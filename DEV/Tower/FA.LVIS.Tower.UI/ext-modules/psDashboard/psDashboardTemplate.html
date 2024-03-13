import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
// Defines the type for the props expected by the React component
interface ChartProps {
  data: number[]; // Assuming this is an array of numbers for simplicity
  labels: string[]; // Labels for the chart, one for each dataset entry
// The React component definition, using TypeScript
const ChartComponent: React.FC<ChartProps> = ({ data, labels }) => {
  // Reference to the canvas element where the chart will be drawn
  const chartRef = useRef<HTMLCanvasElement>(null);
  // Similar to AngularJS's $onInit, useEffect with an empty dependency array mimics componentDidMount lifecycle method
  useEffect(() => {
    if (chartRef.current) {
      // Initialize the chart using Chart.js
      const myChart = new Chart(chartRef.current, {
        type: 'line', // Example of a line chart
        data: {
          labels: labels,
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: data,
            },
          ],
        },
        options: {},
      // Optional: Cleanup function to destroy the chart when the component unmounts
      return () => myChart.destroy();
    // Empty dependency array means this effect runs only once on mount
  }, [data, labels]);
  // Render a canvas element which Chart.js uses to draw the chart
  return <canvas ref={chartRef} />;
export default ChartComponent;