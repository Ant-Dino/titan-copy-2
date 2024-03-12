import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

const BusinessExceptionQueue: React.FC = () => {
  const [beqSummaryList, setBeqSummaryList] = useState<Exception[]>([]);

  useEffect(() => {
    // Mock fetching data
    const fetchData = async () => {
      // Replace this with actual fetching logic
      const data: Exception[] = [
        { ExceptionName: 'Exception 1', NoOfExceptions: 5, ThreshholdCount: 10, DateTime: '2023-04-01' },
        { ExceptionName: 'Exception 2', NoOfExceptions: 15, ThreshholdCount: 10, DateTime: '2023-04-02' },
];
      setBeqSummaryList(data);
};
    fetchData();
}, []);

  return (
    <div className="col-md-6">
      <div className="widget widget-nopad">
        <div className="widget-header">
          <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
          <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
}
         </div>
        <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
          {!beqSummaryList && (
            <div>
              <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
              <span className="sr-only">Loading...</span>
}
             </div>
)}
          <div className="shortcuts">
            {beqSummaryList.map((exception, index) => (
              <a
                key={index}
                href={`#/businessexception/${exception.ExceptionName}`}
                className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}`}
}
               >
                <span
                  className={`shortcut-header${exception.NoOfExceptions >= exception.ThreshholdCount ? '' : 'Success'}`}
}
                 >
                  {exception.ExceptionName}
}</span>
                <span className="value">{exception.NoOfExceptions}</span><br />
                <span className="value">{exception.DateTime}</span>
}
               </a>
)}
           </div>
}
       </div>
}
     </div>
};