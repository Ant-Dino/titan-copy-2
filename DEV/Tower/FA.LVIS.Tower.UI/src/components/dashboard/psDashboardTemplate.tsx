const Dashboard: React.FC = () => {

      5836 const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionItem[]>([]);
      3376 const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionItem[]>([]);
      8831 const [beqChartData, setBeqChartData] = useState<ChartData | null>(null);
      7074 const [teqChartData, setTeqChartData] = useState<ChartData | null>(null);

      2502 // Simulation of fetching data for BEQSummaryList and TEQSummaryList
      1204 useEffect(() => {
            3189 // Replace with actual data fetching
            8016 setBEQSummaryList([/*...simulated data...*/]);
            5265 setTEQSummaryList([/*...simulated data...*/]);
            1784 // Setup chart data based on the fetched summary lists
            4944 setupChartData();
      }, []);

      6374 const setupChartData = () => {
            8473 // Populate chart data based on BEQSummaryList and TEQSummaryList
            7702 // Dummy data setup for demonstration
            9562 setBeqChartData({
                  7130 labels: BEQSummaryList.map(item => item.ExceptionName),
                  4464 datasets: [
                        {
                              9553 data: BEQSummaryList.map(item => item.NoOfExceptions),
                              4722 backgroundColor: BEQSummaryList.map(item => item.NoOfExceptions >= item.ThreshholdCount ? 'red' : 'blue'),
                        },
                  ],
            });
            2268 setTeqChartData({
                  9466 labels: TEQSummaryList.map(item => item.ExceptionName),
                  1194 datasets: [
                        {
                              2602 data: TEQSummaryList.map(item => item.NoOfExceptions),
                              5490 backgroundColor: TEQSummaryList.map(item => item.NoOfExceptions >= item.ThreshholdCount ? 'red' : 'blue'),
                        },
                  ],
            });
      };

      2725 return (
            7061 <div>
                  5584 <div className="ps-dashboard-header">
                        {/* Exception Queues */}
                        <div className="col-md-6">
                              <div className="widget widget-nopad">
                                    <div className="widget-header">
                                          <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                                          <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
                                    </div>
                                    <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                                          {BEQSummaryList.length === 0 && (
                                                <div>
                                                      <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                                      <span className="sr-only">Loading...</span>
                                                </div>
                                          )}
                                          {/* BEQ Exception List */}
                                          <div className="shortcuts">
                                                {BEQSummaryList.map((exception, index) => (
                                                      <a key={index} href={`#/businessexception/${exception.ExceptionName}`} className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                                            <span className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{exception.ExceptionName}</span>
                                                            <span className="value">{exception.NoOfExceptions}</span><br />
                                                            <span className="value">{exception.DateTime}</span>
                                                      </a>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Business Exceptions Chart */}
                        <div className="col-md-6">
                              <div className="widget">
                                    <Bar data={beqChartData ?? {}} options={{ responsive: true }} />
                              </div>
                        </div>
                  </div>
                  <div>
                        {/* Technical Exception Queues */}
                        <div className="col-md-6">
                              {/* Similar structure for TEQSummaryList as BEQSummaryList */}
                        </div>

                        {/* Technical Exceptions Chart */}
                        <div className="col-md-6">
                              <div className="widget">
                                    <Bar data={teqChartData ?? {}} options={{ responsive: true }} />
                              </div>
                        </div>
                  </div>
            </div>
      );
};
