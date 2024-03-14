
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
const ChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
            data: [300, 500, 100],
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, []); // This empty array causes useEffect to behave like componentDidMount
  return (
    <canvas ref={chartRef} width="400" height="400"></canvas>
  );
}
export default ChartComponent;