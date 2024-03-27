import axios from 'axios';

const baseURL = ''; // Set the base URL of your API

interface UserInfoResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
}

interface BEQExceptionResponse {
  // Define the structure of the BEQException response here
}

interface TEQExceptionResponse {
  // Define the structure of the TEQException response here
}

const DashboardService = {
  getCurrentUser: async (): Promise<UserInfoResponse> => {
    return axios.get<UserInfoResponse>(`${baseURL}/path/to/user/info`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers here
      },
    }).then(response => response.data);
  },

  loadBEQExceptions: async (): Promise<BEQExceptionResponse[]> => {
    return axios.get<BEQExceptionResponse[]>(`${baseURL}/Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers here
      },
    }).then(response => response.data);
  },

  loadTEQExceptions: async (): Promise<TEQExceptionResponse[]> => {
    return axios.get<TEQExceptionResponse[]>(`${baseURL}/Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers here
      },
    }).then(response => response.data);
  },
};

export default DashboardService;