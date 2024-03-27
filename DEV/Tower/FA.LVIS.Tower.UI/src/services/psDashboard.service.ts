import axios from 'axios';

// Define the base URL for your API if it's different for each controller or globally
const BASE_URL = '';

interface UserResponse {
  activityRight: string;
  canManageBEQ: boolean;
  canManageTEQ: boolean;
}

interface ExceptionResponse {
  // Assuming the structure of your exception response, adjust accordingly
}

// Service functions for DashboardController
const DashboardService = {
  getCurrentUser: () => {
    return axios.get<UserResponse>(`${BASE_URL}/user/info`, {
      headers: {
        // Include any required headers here
      },
    });
  },

  loadBEQExceptions: () => {
    return axios.get<ExceptionResponse[]>(`${BASE_URL}/Dashboard/BEQException/`, {
      headers: {
        // Include any required headers here
      },
    });
  },

  loadTEQExceptions: () => {
    return axios.get<ExceptionResponse[]>(`${BASE_URL}/Dashboard/TEQException/`, {
      headers: {
        // Include any required headers here
      },
    });
  },
};

export default DashboardService;