import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
// Define the props for the ChartComponent
interface ChartProps {
  data: number[];
  labels: string[];
}
// ChartComponent using TypeScript and React Hooks
const ChartComponent: React.FC<ChartProps> = ({ data, labels }) => {
  // Reference for the canvas element
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  // useEffect to update the chart when data or labels change
  useEffect(() => {
    // Ensure the ref is current and the chart library is available
    if (chartRef && chartRef.current) {
      const chartContext = chartRef.current.getContext('2d');
      // Guard clause if the context is not available for some reason
      if (!chartContext) {
        return;
      }
      // Instantiate a new Chart
      const myChart = new Chart(chartContext, {
        type: 'line', // Type of chart
        data: {
          labels: labels, // Horizontal labels
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: data,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      // Cleanup function to destroy chart instance on component unmount or data change
      return () => {
        myChart.destroy();
      };
    }
  }, [data, labels]); // Dependency array to trigger re-render
  // Render the canvas element
  return <canvas ref={chartRef} />;
};
export default ChartComponent;