import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Exception {
 ExceptionName: string;
 NoOfExceptions: number;
 ThreshholdCount: number;
 DateTime: string;
}

const PsDashboard: React.FC = () => {
 const [BEQSummaryList, setBEQSummaryList] = useState<Exception[]>([]);
 const [TEQSummaryList, setTEQSummaryList] = useState<Exception[]>([]);
 
 useEffect(() => {
   // Simulate fetching data
   const fetchData = async () => {
     // Here you would fetch the data from the server
     const fetchedBEQSummaryList: Exception[] = [
       // Dummy data
       { ExceptionName: 'BEException1', NoOfExceptions: 3, ThreshholdCount: 2, DateTime: '2023-04-01T12:00:00' },
     ];

     const fetchedTEQSummaryList: Exception[] = [
       // Dummy data
       { ExceptionName: 'TEException1', NoOfExceptions: 5, ThreshholdCount: 4, DateTime: '2023-04-01T13:00:00' },
     ];

     setBEQSummaryList(fetchedBEQSummaryList);
     setTEQSummaryList(fetchedTEQSummaryList);
   };

   fetchData();
 }, []);

 return (
   <div>
     <div className="ps-dashboard-header">
       {/* Business Exception Queue */}
       <div className="col-md-6">
         <div className="widget widget-nopad">
           <div className="widget-header">
             <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
             <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
           </div>

           <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
             {!BEQSummaryList && (
               <div>
                 <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                 <span className="sr-only">Loading...</span>
               </div>
             )}

             <div className="shortcuts">
               {BEQSummaryList.map((Exception) => (
                 <Link key={Exception.ExceptionName} to={`/businessexception/${Exception.ExceptionName}`} 
                       className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                       <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                       <span className="value">{Exception.NoOfExceptions}</span><br />
                       <span className="value">{Exception.DateTime}</span>
                 </Link>
               ))}
             </div>
           </div>
         </div>
       </div>
       {/* Technical Exception Queue */}
       <div className="col-md-6">
         <div className="widget widget-nopad">
           <div className="widget-header">
             <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
             <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
           </div>

           <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
             {!TEQSummaryList && (
               <div>
                 <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                 <span className="sr-only">Loading...</span>
               </div>
             )}

             <div className="shortcuts">
               {TEQSummaryList.map((Exception) => (
                 <Link key={Exception.ExceptionName} to={`/Exceptions/${Exception.ExceptionName}`} 
                       className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                       <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                       <span className="value">{Exception.NoOfExceptions}</span><br />
                       <span className="value">{Exception.DateTime}</span>
                 </Link>
               ))}
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default PsDashboard;