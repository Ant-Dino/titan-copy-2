import React, { useState, useEffect } from 'react';

interface Exception {
 ExceptionName: string;
 NoOfExceptions: number;
 ThreshholdCount: number;
 DateTime: string;
}

const Dashboard: React.FC = () => {
 const [BEQSummaryList, setBEQSummaryList] = useState<Exception[]>([]);
 const [TEQSummaryList, setTEQSummaryList] = useState<Exception[]>([]);
 const [isLoadingBEQ, setIsLoadingBEQ] = useState<boolean>(true);
 const [isLoadingTEQ, setIsLoadingTEQ] = useState<boolean>(true);

 useEffect(() => {
   // Simulate fetching data
   setTimeout(() => {
     const beqData = [
        // Mockup data
     ];
     const teqData = [
        // Mockup data
     ];
     setBEQSummaryList(beqData);
     setTEQSummaryList(teqData);
     setIsLoadingBEQ(false);
     setIsLoadingTEQ(false);
   }, 2000);
 }, []);

 return (
   <div className="ps-dashboard-header">
     <br /><br />
     <div>
       <div className="col-md-6">
         <div className="widget widget-nopad">
           <div className="widget-header">
             <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
             <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
           </div>
           <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
             {isLoadingBEQ ? (
               <>
                 <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                 <span className="sr-only">Loading...</span>
               </>
             ) : (
               <div className="shortcuts">
                 {BEQSummaryList.map((Exception, index) => (
                   <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                     <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                     <span className="value">{Exception.NoOfExceptions}</span><br />
                     <span className="value">{Exception.DateTime}</span>
                   </a>
                 ))}
               </div>
             )}
           </div>
         </div>
       </div>
       <div className="col-md-6">
         {/* Similar structure for TEQSummaryList */}
       </div>
     </div>
   </div>
 );
};

export default Dashboard;