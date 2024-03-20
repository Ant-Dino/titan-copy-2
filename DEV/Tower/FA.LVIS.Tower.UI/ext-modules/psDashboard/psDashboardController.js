import axios from 'axios';

const API_BASE_URL = 'https://your-api-base-url.com';

const ApiService = {
  // Example GET request
  fetchData: (resourcePath) => {
    return axios.get(`${API_BASE_URL}/${resourcePath}`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },

  // Example POST request
  createData: (resourcePath, payload) => {
    return axios.post(`${API_BASE_URL}/${resourcePath}`, payload)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },

  // Example PUT request
  updateData: (resourcePath, payload) => {
    return axios.put(`${API_BASE_URL}/${resourcePath}`, payload)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },

  // Example DELETE request
  deleteData: (resourcePath) => {
    return axios.delete(`${API_BASE_URL}/${resourcePath}`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
};

export default ApiService;