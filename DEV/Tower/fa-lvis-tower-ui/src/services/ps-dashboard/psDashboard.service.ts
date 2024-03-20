import axios from 'axios';

const service = {
  loadBEQExceptions() {
    return axios.get('Dashboard/BEQException/')
      .then(response => response.data)
      .catch(error => console.error('There was an error loading the BEQ exceptions:', error));
  },

  loadTEQExceptions() {
    return axios.get('Dashboard/TEQException/')
      .then(response => response.data)
      .catch(error => console.error('There was an error loading the TEQ exceptions:', error));
  },

  loadGraphicalTEQException() {
    return axios.get('Dashboard/GraphicalTEQException/')
      .then(response => response.data)
      .catch(error => console.error('There was an error loading the graphical TEQ exceptions:', error));
  },

  loadGraphicalBEQException() {
    return axios.get('Dashboard/GraphicalBEQException/')
      .then(response => response.data)
      .catch(error => console.error('There was an error loading the graphical BEQ exceptions:', error));
  }
};

export default service;