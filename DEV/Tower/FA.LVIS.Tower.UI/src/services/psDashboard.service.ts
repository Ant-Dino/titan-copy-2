import axios from 'axios';

const service = {
  loadBEQExceptions() {
    return axios.get('Dashboard/BEQException/')
      .then(response => response.data)
      .catch(error => console.error('Error loading BEQ Exceptions:', error));
  },

  loadTEQExceptions() {
    return axios.get('Dashboard/TEQException/')
      .then(response => response.data)
      .catch(error => console.error('Error loading TEQ Exceptions:', error));
  },

  loadGraphicalTEQException() {
    return axios.get('Dashboard/GraphicalTEQException/')
      .then(response => response.data)
      .catch(error => console.error('Error loading Graphical TEQ Exception:', error));
  },

  loadGraphicalBEQException() {
    return axios.get('Dashboard/GraphicalBEQException/')
      .then(response => response.data)
      .catch(error => console.error('Error loading Graphical BEQ Exception:', error));
  }
};

export default service;