import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);

interface Exception {
 ExceptionName: string;
 NoOfExceptions: number;
 DateTime: string;
 ThreshholdCount: number;
}

const Dashboard: React.FC = () => {
 const [beqData, setBeqData] = useState<Exception[] | null>(null);
 const [teqData, setTeqData] = useState<Exception[] | null>(null);
 // Example function to fetch business exception queue summary list
 const fetchBEQSummaryList = async () => {
   // Fetch data from an API or service
   setBeqData([/* Mocked Data */]);
 };
 // Example function to fetch technical exception queue summary list
 const fetchTEQSummaryList = async () => {
   // Fetch data from an API or service
   setTeqData([/* Mocked Data */]);
 };

 useEffect(() => {
   fetchBEQSummaryList();
   fetchTEQSummaryList();
 }, []);

 return (
   <div>
     <div className="col-md-6">
       <div className="widget widget-nopad">
         <div className="widget-header">
           <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
           <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
         </div>
         <div className="dashboard-widget-content" style={{ overflowY: 'auto;' }}>
           {!beqData ? (
             <div>
               <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
               <span className="sr-only">Loading...</span>
             </div>
           ) : (
             <div className="shortcuts">
               {beqData.slice(0, 20).map((exception) => (
                 <a key={exception.ExceptionName} href={`#/businessexception/${exception.ExceptionName}`} className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                   <span className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{exception.ExceptionName}</span>
                   <span className="value">{exception.NoOfExceptions}</span><br />
                   <span className="value">{exception.DateTime}</span>
                 </a>
               ))}
             </div>
           )}
         </div>
       </div>
     </div>
     <div className="col-md-6">
       {/* Visualization for Business Exceptions can be added here */}
     </div>
     <div className="col-md-6">
       <div className="widget widget-nopad">
         <div className="widget-header">
           <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
           <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
         </div>
         <div className="dashboard-widget-content" style={{ overflowY: 'auto;' }}>
           {!teqData ? (
             <div>
               <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
               <span className="sr-only">Loading...</span>
             </div>
           ) : (
             <div className="shortcuts">
               {teqData.slice(0, 100).map((exception) => (
                 <a key={exception.ExceptionName} href={`#/Exceptions/${exception.ExceptionName}`} className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                   <span className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{exception.ExceptionName}</span>
                   <span className="value">{exception.NoOfExceptions}</span><br />
                   <span className="value">{exception.DateTime}</span>
                 </a>
               ))}
             </div>
           )}
         </div>
       </div>
     </div>
     <div className="col-md-6">
       {/* Visualization for Technical Exceptions can be added here */}
     </div>
   </div>
 );
};

export default Dashboard;