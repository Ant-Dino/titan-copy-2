import axios from 'axios';

const baseURL = 'http://your-api-url.com'; // Replace with your actual API base URL

interface UserInfoResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  UserName?: string;
}

interface BEQExceptionResponse {
  // Define the structure according to your API response
}

interface TEQExceptionResponse {
  // Define the structure according to your API response
}

const psDashboardService = {
  getUserInfo: async (): Promise<UserInfoResponse> => {
    return axios.get<UserInfoResponse>(`${baseURL}/UserInfo/getUser`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  },
  loadBEQExceptions: async (): Promise<BEQExceptionResponse[]> => {
    return axios.get<BEQExceptionResponse[]>(`${baseURL}/Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  },
  loadTEQExceptions: async (): Promise<TEQExceptionResponse[]> => {
    return axios.get<TEQExceptionResponse[]>(`${baseURL}/Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  },
};

export default psDashboardService;