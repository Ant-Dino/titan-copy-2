import React, { useState, useEffect } from 'react';
// Assume fetchData is a function that fetches the data from the backend
// and Chart component is a pre-built or third-party component similar to ng-chart
import { fetchData, Chart } from './services';

const Dashboard: React.FC = () => {
   const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
   const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);
   const [beqLineData, setBeqLineData] = useState<any>(null);
   const [teqLineData, setTeqLineData] = useState<any>(null);

   useEffect(() => {
       // Simulating DashBoardCtrl.getCurrentUser();
       // Assuming fetchData can fetch based on some endpoints
       fetchData('currentUser').then(user => {
           console.log(user);
           // You may update states based on the fetched user data here
       });
       fetchData('BEQSummaryList').then(data => setBEQSummaryList(data));
       fetchData('TEQSummaryList').then(data => setTEQSummaryList(data));
       fetchData('beqLineData').then(data => setBeqLineData(data));
       fetchData('teqLineData').then(data => setTeqLineData(data));
   }, []);

   return (
       <div>
           <div className="ps-dashboard-header">
               {/* Breadcrumb can be added here if needed */}
               <div>
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
                                   {BEQSummaryList && BEQSummaryList.slice(0, 20).map(Exception => (
                                       <a key={Exception.ExceptionName}
                                          href={`#/businessexception/${Exception.ExceptionName}`}
                                          className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}`}>
                                           <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                                           <span className="value">{Exception.NoOfExceptions}</span><br />
                                           <span className="value">{Exception.DateTime}</span>
                                       </a>
                                   ))}
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-6">
                       <div className="widget">
                           <div className="widget-header">
                               <i className="icon-signal"></i>
                               <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
                           </div>
                           <div className="dashboard-widget-content">
                               {!beqLineData && (
                                   <div>
                                       <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                       <span className="sr-only">Loading...</span>
                                   </div>
                               )}
                               {beqLineData && (
                                   <Chart data={beqLineData.data} labels={beqLineData.labels} options={beqLineData.optionsMixed} />
                               )}
                           </div>
                       </div>
                   </div>
               </div>
               <div>
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
                                   {TEQSummaryList && TEQSummaryList.slice(0, 100).map(Exception => (
                                       <a key={Exception.ExceptionName}
                                          href={`#/Exceptions/${Exception.ExceptionName}`}
                                          className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}`}>
                                           <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                                           <span className="value">{Exception.NoOfExceptions}</span><br />
                                           <span className="value">{Exception.DateTime}</span>
                                       </a>
                                   ))}
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-6">
                       <div className="widget">
                           <div className="widget-header">
                               <i className="icon-signal"></i>
                               <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
                           </div>
                           <div className="dashboard-widget-content">
                               {!teqLineData && (
                                   <div>
                                       <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                       <span className="sr-only">Loading...</span>
                                   </div>
                               )}
                               {teqLineData && (
                                   <Chart data={teqLineData.data} labels={teqLineData.labels} options={teqLineData.optionsMixed} />
                               )}
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
}

export default Dashboard;