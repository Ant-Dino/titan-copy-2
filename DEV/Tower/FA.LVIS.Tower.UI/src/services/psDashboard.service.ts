import axios from 'axios';

const baseURL = 'http://example.com/api'; // Replace with the actual base URL

interface UserResponse {
  // Define the structure according to the expected response
}

interface TEQExceptionResponse {
  // Define the structure according to the expected response
}

interface BEQExceptionResponse {
  // Define the structure according to the expected response
}

interface GraphicalTEQExceptionResponse {
  // Define the structure according to the expected response
}

interface GraphicalBEQExceptionResponse {
  // Define the structure according to the expected response
}

const dashboardService = {
  getUser: (): Promise<UserResponse> => {
    return axios.get(`${baseURL}/user`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  },

  getTEQException: (): Promise<TEQExceptionResponse> => {
    return axios.get(`${baseURL}/teqException`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  },

  getBEQException: (): Promise<BEQExceptionResponse> => {
    return axios.get(`${baseURL}/beqException`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  },

  getGraphicalTEQException: (): Promise<GraphicalTEQExceptionResponse> => {
    return axios.get(`${baseURL}/graphicalTEQException`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  },

  getGraphicalBEQException: (): Promise<GraphicalBEQExceptionResponse> => {
    return axios.get(`${baseURL}/graphicalBEQException`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  },
};

export default dashboardService;