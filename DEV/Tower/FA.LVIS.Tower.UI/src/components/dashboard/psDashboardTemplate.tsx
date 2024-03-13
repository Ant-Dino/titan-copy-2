import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
interface ChartProps {
  data: Chart.ChartData;
  options?: Chart.ChartOptions;
const ChartComponent: React.FC<ChartProps> = ({ data, options }) => {
  // Using useRef to hold reference to the chart DOM element
  const chartContainerRef = useRef<HTMLCanvasElement>(null);
  // Using useEffect to create the chart only once the component has mounted
  useEffect(() => {
    // Ensure the chart container is available
    if (chartContainerRef && chartContainerRef.current) {
      // Creating a new chart instance
      const chartInstance = new Chart(chartContainerRef.current, {
        type: 'line', // Assuming a line chart for demonstration
        data,
        options,
      });
      
      // Optional cleanup function to destroy chart on component unmount
      return () => {
        chartInstance.destroy();
      };
    }
  }, [data, options]); // Deps array ensures effect runs only when data or options change
  // Rendering the canvas element for the chart
  return <canvas ref={chartContainerRef} />;
export default ChartComponent;