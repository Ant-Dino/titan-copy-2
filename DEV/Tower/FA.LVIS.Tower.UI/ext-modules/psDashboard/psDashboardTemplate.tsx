import React, { useEffect, useState } from 'react';

interface Exception {
   ExceptionName: string;
   NoOfExceptions: number;
   ThreshholdCount: number;
   DateTime: string;
}

const Dashboard: React.FC = () => {
   const [beqSummaryList, setBeqSummaryList] = useState<Exception[] | null>(null);
   const [teqSummaryList, setTeqSummaryList] = useState<Exception[] | null>(null);

   // Simulate fetching data from an API
   useEffect(() => {
       const fetchData = async () => {
           // Placeholder for actual fetching logic
           const beqData: Exception[] = []; // Fetch BEQ data
           const teqData: Exception[] = []; // Fetch TEQ data
           setBeqSummaryList(beqData);
           setTeqSummaryList(teqData);
        };
       fetchData();
    }, []);

   return (
       <div>
           <div className="col-md-6">
               <div className="widget widget-nopad">
                   <div className="widget-header">
                       <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                       <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
                   </div>
                   <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                       {!beqSummaryList && (
                           <div>
                               <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                               <span className="sr-only">Loading...</span>
                           </div>
                       )}
                       <div className="shortcuts">
                           {beqSummaryList?.map((Exception, index) => (
                               <a key={index} href={`#/businessexception/${Exception.ExceptionName}`}
                                  className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                   <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                                   <span className="value">{Exception.NoOfExceptions}</span><br />
                                   <span className="value">{Exception.DateTime}</span>
                               </a>
                           ))}
                       </div>
                   </div>
               </div>
           </div>
           <div className="col-md-6">
               <div className="widget widget-nopad">
                   <div className="widget-header">
                       <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                       <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
                   </div>
                   <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                       {!teqSummaryList && (
                           <div>
                               <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                               <span className="sr-only">Loading...</span>
                           </div>
                       )}
                       <div className="shortcuts">
                           {teqSummaryList?.map((Exception, index) => (
                               <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`}
                                  className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                   <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                                   <span className="value">{Exception.NoOfExceptions}</span><br />
                                   <span className="value">{Exception.DateTime}</span>
                               </a>
                           ))}
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
};

export default Dashboard;