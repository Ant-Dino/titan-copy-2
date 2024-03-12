import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// Assuming the data fetching logic is abstracted into these functions.
// These would typically make HTTP requests to your backend.
const fetchBEQSummaryList = async () => {
        // This function should return the fetched data for Business Exception Queue
     };
const fetchTEQSummaryList = async () => {
        // This function should return the fetched data for Technical Exception Queue
     };

// Define the React component for Business Exception Queue
const BusinessExceptionQueue: React.FC = () => {
  const [beqSummaryList, setBeqSummaryList] = useState<Array<any>>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchBEQSummaryList();
      setBeqSummaryList(data);
         };
    loadData();
     }, []);

  return (
    <div className="col-md-6">
      <div className="widget widget-nopad">
        <div className="widget-header">
          <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
          <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
             </div>
        <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
          {beqSummaryList.length === 0 ? (
                 <div>
              <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
              <span className="sr-only">Loading...</span>
                   </div>
               ) : (
            <div className="shortcuts">
              {beqSummaryList.map((Exception, index) => (
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
     );
   };

// Define the React component for Technical Exception Queue
const TechnicalExceptionQueue: React.FC = () => {
  const [teqSummaryList, setTeqSummaryList] = useState<Array<any>>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTEQSummaryList();
      setTeqSummaryList(data);
         };
    loadData();
     }, []);

  return (
    <div className="col-md-6">
      <div className="widget widget-nopad">
        <div className="widget-header">
          <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
          <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
             </div>
        <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
          {teqSummaryList.length === 0 ? (
                 <div>
              <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
              <span className="sr-only">Loading...</span>
                   </div>
               ) : (
            <div className="shortcuts">
              {teqSummaryList.map((Exception, index) => (
                <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
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
     );
   };

// The main dashboard component that combines both queues
const Dashboard: React.FC = () => {
  return (
    <div>
      <BusinessExceptionQueue />
      <TechnicalExceptionQueue />
         </div>
     );
   };

export default Dashboard;