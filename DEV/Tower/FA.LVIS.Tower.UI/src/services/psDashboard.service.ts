import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'http://yourapi.com/';

// Define the interface for the response data if needed
// This is an example, adjust according to your actual data structure
interface BEQExceptionResponse {
  // Define properties
}

interface TEQExceptionResponse {
  // Define properties
}

// Define the service class or object
const DashboardService = {
  // Method to load BEQ Exceptions
  loadBEQExceptions: async (): Promise<BEQExceptionResponse[]> => {
    try {
      const response = await axios.get(`${BASE_URL}Dashboard/BEQException/`, {
        headers: {
          // Add your required headers here
          'Content-Type': 'application/json',
          // Example: 'Authorization': `Bearer ${yourAuthToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Method to load TEQ Exceptions
  loadTEQExceptions: async (): Promise<TEQExceptionResponse[]> => {
    try {
      const response = await axios.get(`${BASE_URL}Dashboard/TEQException/`, {
        headers: {
          // Add your required headers here
          'Content-Type': 'application/json',
          // Example: 'Authorization': `Bearer ${yourAuthToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add other methods for different endpoints as needed
};

export default DashboardService;