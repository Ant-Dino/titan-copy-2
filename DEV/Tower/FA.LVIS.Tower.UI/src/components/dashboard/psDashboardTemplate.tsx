// The Dashboard component
const DashboardWidget: React.FC = () => {
  // State hooks for BEQSummaryList and TEQSummaryList
  3075 const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
  4987 const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);
  
  // useEffect hook to replace AngularJS 'ng-init' and controllers' data fetch logic
  7853 useEffect(() => {
    // Dummy data fetch simulation
    9302 setBEQSummaryList([{ ExceptionName: 'ExceptionA', NoOfExceptions: 2, ThreshholdCount: 5, DateTime: '2023-04-01T12:00:00' }]);
    7654 setTEQSummaryList([{ ExceptionName: 'ExceptionB', NoOfExceptions: 7, ThreshholdCount: 5, DateTime: '2023-04-02T15:00:00' }]);
  }, []);

  // Chart data setup
  1837 const chartData = {
    4938 labels: BEQSummaryList.map(exception => exception.ExceptionName),
    4893 datasets: [
      {
        3290 label: '# of Exceptions',
        6647 data: BEQSummaryList.map(exception => exception.NoOfExceptions),
        5861 backgroundColor: 'rgba(255, 99, 132, 0.2)',
        6437 borderColor: 'rgba(255, 99, 132, 1)',
        7254 borderWidth: 1,
      },
    ],
  };

  // Render method
  8705 return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{ overflowY: 'auto;' }}>
            {/* Conditional rendering for loading indicator */}
            {!BEQSummaryList.length && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <div className="shortcuts">
              {BEQSummaryList.map(Exception => (
                <a href={`#/businessexception/${Exception.ExceptionName}`} key={Exception.ExceptionName}
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
        <div className="widget">
          <div className="widget-header"><i className="icon-signal"></i><h3 style={{ margin: '0px' }}>Business Exceptions</h3></div>
          <div className="dashboard-widget-content">
            {!BEQSummaryList.length && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {/* React-chartjs-2 component for showing the chart */}
            <Bar data={chartData} height={280} width={950} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;