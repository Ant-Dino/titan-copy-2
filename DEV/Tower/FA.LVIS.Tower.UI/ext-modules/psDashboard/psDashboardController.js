import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DashboardComponent = () => {
  const [beqExceptions, setBeqExceptions] = useState([]);
  const [teqExceptions, setTeqExceptions] = useState([]);
  const [graphicalTeqExceptions, setGraphicalTeqExceptions] = useState([]);
  const [graphicalBeqExceptions, setGraphicalBeqExceptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const loadExceptions = async () => {
      setIsLoading(true);
      try {
        const beqExData = await axios.get('Dashboard/BEQException/');
        setBeqExceptions(beqExData.data);
        const teqExData = await axios.get('Dashboard/TEQException/');
        setTeqExceptions(teqExData.data);
        const graphicalTeqExData = await axios.get('Dashboard/GraphicalTEQException/');
        setGraphicalTeqExceptions(graphicalTeqExData.data);
        const graphicalBeqExData = await axios.get('Dashboard/GraphicalBEQException/');
        setGraphicalBeqExceptions(graphicalBeqExData.data);
      } catch (error) {
        console.error("There was an error loading the exceptions:", error);
        setError("Failed to load data");
      } finally {
        setIsLoading(false);
      }
    };
    loadExceptions();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {/* Display BEQ Exceptions */}
      <h1>BEQ Exceptions</h1>
      <ul>
        {beqExceptions.map((exception, index) => (
          <li key={index}>{exception.name}</li>
        ))}
      </ul>
      {/* Display TEQ Exceptions */}
      <h1>TEQ Exceptions</h1>
      <ul>
        {teqExceptions.map((exception, index) => (
          <li key={index}>{exception.name}</li>
        ))}
      </ul>
      {/* Graphical BEQ Exceptions */}
      <h1>Graphical BEQ Exceptions</h1>
      {/* Assuming a simple representation for demonstration */}
      <div>
        {graphicalBeqExceptions.map((exception, index) => (
          <div key={index}>{exception.name}</div>
        ))}
      </div>
      {/* Graphical TEQ Exceptions */}
      <h1>Graphical TEQ Exceptions</h1>
      <div>
        {graphicalTeqExceptions.map((exception, index) => (
          <div key={index}>{exception.name}</div>
        ))}
      </div>
    </div>
  );
};
export default DashboardComponent;