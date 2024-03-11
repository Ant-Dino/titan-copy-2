import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);

interface Exception {
ExceptionName: string;
NoOfExceptions: number;
ThreshholdCount: number;
DateTime: string;
}

interface ChartData {
labels: string[];
datasets: {
data: number[];
label: string;
backgroundColor: string[];
borderColor: string[];
borderWidth: number;
}
}

const Dashboard: React.FC = () => {
const [beqSummaryList, setBeqSummaryList] = useState<Exception[]>([]);
const [teqSummaryList, setTeqSummaryList] = useState<Exception[]>([]);
const [beqLineData, setBeqLineData] = useState<ChartData | null>(null);
const [teqLineData, setTeqLineData] = useState<ChartData | null>(null);

// Mock fetch function
const fetchExceptions = async () => {
// Example data fetch function
setBeqSummaryList([{ ExceptionName: 'Business Exception 1', NoOfExceptions: 5, ThreshholdCount: 10, DateTime: '2023-04-01' }]);
setTeqSummaryList([{ ExceptionName: 'Technical Exception 1', NoOfExceptions: 3, ThreshholdCount: 5, DateTime: '2023-04-02' }]);
setBeqLineData({
labels: ['January', 'February', 'March'],
datasets: [{
data: [65, 59, 80],
label: 'BEQ Summary',
backgroundColor: ['rgba(255,99,132,0.2)'],
borderColor: ['rgba(255,99,132,1)'],
borderWidth: 1
}]
});
setTeqLineData({
labels: ['April', 'May', 'June'],
datasets: [{
data: [28, 48, 40],
label: 'TEQ Summary',
backgroundColor: ['rgba(54, 162, 235, 0.2)'],
borderColor: ['rgba(54, 162, 235, 1)'],
borderWidth: 1
}]
});
};

useEffect(() => {
fetchExceptions();
}, []);

return (
<div>
<div className="ps-dashboard-header">
<div className="col-md-6">
<div className="widget widget-nopad">
<div className="widget-header">
<i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
<h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
</div>
<div className="dashboard-widget-content" style={{ overflowY: 'auto;' }}>
{!beqSummaryList && (
<div>
<i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
<span className="sr-only">Loading...</span>
</div>
)}
<div className="shortcuts">
{beqSummaryList.map((exception, index) => (
<a key={index} className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
<span className={`${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{exception.ExceptionName}</span>
<span className="value">{exception.NoOfExceptions}</span><br />
<span className="value">{exception.DateTime}</span>
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
<Bar data={beqLineData} />
)}
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
<div className="dashboard-widget-content" style={{ overflowY: 'auto;' }}>
{!teqSummaryList && (
<div>
<i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
<span className="sr-only">Loading...</span>
</div>
)}
<div className="shortcuts">
{teqSummaryList.map((exception, index) => (
<a key={index} className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
<span className={`${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{exception.ExceptionName}</span>
<span className="value">{exception.NoOfExceptions}</span><br />
<span className="value">{exception.DateTime}</span>
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
<Bar data={teqLineData} />
)}
</div>
</div>
</div>
</div>
</div>
);
};

export default Dashboard;