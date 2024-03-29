USE [Terminal]
GO
/****** Object:  StoredProcedure [dbo].[GetExceptionInfo]    Script Date: 8/8/2018 1:39:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Anand Vidyarthi
-- Create date: 04/10/2017
-- Description:	Get all Exceptions to display in Tower
-- =======================================================================================================
--	Date		User					Description  
--	05/16/2018  Satha					Changes to pick up missing records which has a file in ObjectPath
--	07/10/2018  Satha					Add parameter Exception Type Name
--	08/07/2018  Satha					Add Buyer and Transaction Type Name
-- =======================================================================================================

ALTER PROCEDURE [dbo].[GetExceptionInfo]
(
	@startdate DATETIME,
	@enddate DATETIME,
	@exceptiongroupid INT,
	@tenantId INT,
	@isincluderesolved BIT,
	@exceptionTypeName VARCHAR(50) = NULL
)
AS

	--SET @startdate = DATEADD(d, -160, GETDATE())
	--set @enddate  = GETDATE()
	--set @exceptiongroupid = 2
	--set @tenantId = 3
	--set @isincluderesolved = 1
	--set @ExceptionTypeName = null

CREATE TABLE #ExceptionList
(
	ExceptionId int,
    ExceptionTypeName varchar(50),		   
    MessageLogId int,
    ExceptionDesc varchar(max),	
    Comments varchar(max),
    TypeCodeId int,
	TypeCodeDesc varchar(200),
    CreatedDate datetime,
    CreatedById int,
    LastModifiedDate datetime,
    LastModifiedById int, 
	ServiceRequestId int, 
	TenantId int, 
	MessageLogDesc varchar(1000), 
	MessageMapId int, 
	DocumentObjectId bigint
)


BEGIN	
	SET NOCOUNT ON;
	SET FMTONLY OFF;
		  
	INSERT INTO #ExceptionList
	SELECT ex.ExceptionId ,
           ext.ExceptionTypeName,		   
           ex.MessageLogId ,
           ex.ExceptionDesc ,
           ex.Comments ,
           ex.TypeCodeId,
		   tc.TypeCodeDesc,
           ex.CreatedDate ,
           ex.CreatedById ,
           ex.LastModifiedDate ,
           ex.LastModifiedById, ml.ServiceRequestId, ml.TenantId, ml.MessageLogDesc, ml.MessageMapId, ISNULL(ml.DocumentObjectId, ex.DocumentObjectId) AS DocumentObjectId
	FROM dbo.Exception ex (NOLOCK)
	JOIN dbo.ExceptionType ext ON ext.ExceptionGroupId = @exceptiongroupid AND ex.ExceptionTypeId = ext.ExceptionTypeId
	LEFT JOIN dbo.MessageLog ml (NOLOCK) ON ex.MessageLogId = ml.MessageLogId
	JOIN dbo.TypeCode tc ON ex.TypeCodeId = tc.TypeCodeId
	WHERE CONVERT(DATE, ex.CreatedDate) >= CONVERT(DATE, @startdate)
	AND CONVERT(DATE, ex.CreatedDate) <= CONVERT(DATE, @enddate)
	AND (@exceptionTypeName IS NULL OR ext.ExceptionTypeName = @exceptionTypeName)
	AND (@isincluderesolved = 1 OR (@isincluderesolved = 0 AND ex.TypeCodeId <> 204))

	CREATE NONCLUSTERED INDEX ix_tempExceptionList ON #ExceptionList ([MessageLogId]);
	CREATE NONCLUSTERED INDEX ix_tempExceptionList2 ON #ExceptionList ([MessageMapId]);
	CREATE NONCLUSTERED INDEX ix_tempExceptionList3 ON #ExceptionList ([CreatedDate]);
	CREATE NONCLUSTERED INDEX ix_tempExceptionList4 ON #ExceptionList ([DocumentObjectId]);
	CREATE NONCLUSTERED INDEX ix_tempExceptionList5 ON #ExceptionList ([TenantId]);
	
	--IF(@isincluderesolved = 0)
	--BEGIN
	--	DELETE FROM #ExceptionList 
	--	WHERE TypeCodeId = 204
	--END

	IF(@tenantId <> 3)
	BEGIN
		DELETE FROM #ExceptionList 
		WHERE TenantId <> @tenantId OR TenantId IS NULL
	END

	DECLARE @temp table
	(
		docobj xml,
		docobjid bigint,
		exid int,
		docobjpath varchar(250)
	)

	INSERT INTO @temp
	SELECT do.Object as docobj, do.DocumentObjectId, t.ExceptionId, do.ObjectPath
	FROM #ExceptionList t
	LEFT JOIN TerminalDocument.dbo.DocumentObject do (NOLOCK) ON t.DocumentObjectId = do.DocumentObjectId 
	where t.MessageLogId = 0
		
	--SELECT xml.xmldata.value('DocumentObjectId[1]', 'bigint') as docobj
	--FROM @temp t
	--CROSS APPLY t.docobj.nodes('EXCEPTION')xml(xmldata)

	--DROP TABLE @temp
	SELECT ExceptionId, ExceptionTypeName, MessageLogId, ExceptionDesc, DocumentObjectId, Comments, TypeCodeId, ExceptionStatus, CreatedDate, CreatedById, 
			   LastModifiedDate, LastModifiedById, ServiceRequestId, MessageTypeId, MessageTypeName, ExternalRefNum, ServiceName, TenantName, CreatedBy, LastModifiedBy,
			   ObjectPath as DocObjectPath, BuyerName, TransactionType
	FROM
	(
		SELECT t.ExceptionId, t.ExceptionTypeName, t.MessageLogId, t.ExceptionDesc, t.DocumentObjectId, t.Comments, t.TypeCodeId, t.TypeCodeDesc ExceptionStatus, t.CreatedDate, t.CreatedById, 
			   t.LastModifiedDate, t.LastModifiedById, t.ServiceRequestId, mt.MessageTypeId, mt.MessageTypeName, sr.ExternalRefNum, svc.ServiceName, ten.TenantName, tu.UserName CreatedBy, tu1.UserName LastModifiedBy, 
			   NULL AS ObjectPath, dm.BuyerName, dm.TransactionType
		FROM #ExceptionList t
		LEFT JOIN dbo.ServiceRequest sr (NOLOCK) ON t.ServiceRequestId = sr.ServiceRequestId
		LEFT JOIN dbo.[Service] svc ON sr.ServiceId = svc.ServiceId	
		LEFT JOIN dbo.MessageMap mm (NOLOCK) ON t.MessageMapId = mm.MessageMapId
		LEFT JOIN dbo.MessageType mt (NOLOCK) ON mm.MessageTypeId = mt.MessageTypeId
		LEFT JOIN dbo.Tenant ten (nolock) on t.TenantId = ten.TenantId
		LEFT JOIN dbo.[Tower.Users] (nolock) tu on tu.UserId = t.CreatedById
		LEFT JOIN dbo.[Tower.Users] (nolock) tu1 on tu1.UserId = t.LastModifiedById
		LEFT JOIN TerminalDocument.dbo.DocumentObjectMetadata (nolock) dm on t.DocumentObjectId = dm.DocumentObjectId
		WHERE t.MessageLogId > 0  
		UNION ALL
		SELECT t.ExceptionId, t.ExceptionTypeName, t.MessageLogId, t.ExceptionDesc, 
				ISNULL(xml.xmldata.value('DocumentObjectId[1]', 'bigint'), t.DocumentObjectId) AS DocumentObjectId, 
				t.Comments, t.TypeCodeId, t.TypeCodeDesc ExceptionStatus, t.CreatedDate, t.CreatedById, 
				t.LastModifiedDate, t.LastModifiedById, t.ServiceRequestId, NULL AS MessageTypeId, NULL AS MessageTypeName, 
				xml.xmldata.value('ExternalRefNum[1]', 'VARCHAR(50)') as ExternalRefNum, 
				--'abc' as ExternalRefNum,
				NULL AS ServiceName, ten.TenantName, tu.UserName CreatedBy, tu1.UserName LastModifiedBy,
				do.docobjpath AS ObjectPath, NULL AS BuyerName, NULL AS TransactionType
		FROM #ExceptionList t
		--JOIN TerminalDocument.dbo.DocumentObject do (NOLOCK) ON t.DocumentObjectId = do.DocumentObjectId
		JOIN @temp do ON t.DocumentObjectId = do.docobjid OUTER APPLY do.docobj.nodes('EXCEPTION')xml(xmldata)
		LEFT JOIN dbo.Tenant ten (nolock) on t.TenantId = ten.TenantId
		LEFT JOIN dbo.[Tower.Users] (nolock) tu on tu.UserId = t.CreatedById
		LEFT JOIN dbo.[Tower.Users] (nolock) tu1 on tu1.UserId = t.LastModifiedById
		WHERE t.MessageLogId = 0
	) x	
	ORDER BY CreatedDate desc

	
	IF OBJECT_ID('tempdb..#ExceptionList') IS NOT NULL 
		DROP TABLE #ExceptionList	

END

