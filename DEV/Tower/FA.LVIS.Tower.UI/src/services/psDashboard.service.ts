import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DashboardComponent = () => {
  const [beqExceptions, setBeqExceptions] = useState([]);
  const [teqExceptions, setTeqExceptions] = useState([]);
  const [graphicalTeqException, setGraphicalTeqException] = useState([]);
  const [graphicalBeqException, setGraphicalBeqException] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    loadBEQExceptions();
    loadTEQExceptions();
    loadGraphicalTEQException();
    loadGraphicalBEQException();
  }, []);
  const loadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then(response => {
        setBeqExceptions(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading BEQ Exceptions:", error);
        setError(error.toString());
        setLoading(false);
      });
  };
  const loadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then(response => {
        setTeqExceptions(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading TEQ Exceptions:", error);
        setError(error.toString());
        setLoading(false);
      });
  };
  const loadGraphicalTEQException = () => {
    axios.get('Dashboard/GraphicalTEQException/')
      .then(response => {
        setGraphicalTeqException(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading Graphical TEQ Exception:", error);
        setError(error.toString());
        setLoading(false);
      });
  };
  const loadGraphicalBEQException = () => {
    axios.get('Dashboard/GraphicalBEQException/')
      .then(response => {
        setGraphicalBeqException(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading Graphical BEQ Exception:", error);
        setError(error.toString());
        setLoading(false);
      });
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h2>BEQ Exceptions</h2>
      {/* Render BEQ Exceptions */}
      {beqExceptions.map((exception, index) => (
        <p key={index}>{exception.description}</p>
      ))}
      <h2>TEQ Exceptions</h2>
      {/* Render TEQ Exceptions */}
      {teqExceptions.map((exception, index) => (
        <p key={index}>{exception.description}</p>
      ))}
      <h2>Graphical TEQ Exceptions</h2>
      {/* Render Graphical TEQ Exceptions */}
      {graphicalTeqException.map((exception, index) => (
        <p key={index}>{exception.description}</p>
      ))}
      <h2>Graphical BEQ Exceptions</h2>
      {/* Render Graphical BEQ Exceptions */}
      {graphicalBeqException.map((exception, index) => (
        <p key={index}>{exception.description}</p>
      ))}
    </div>
  );
};
export default DashboardComponent;