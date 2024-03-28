import axios from 'axios';

const baseURL = ''; // Please replace '' with the actual base URL

interface UserInfoResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
}

interface TenantInfoResponse {
  // Define the structure based on the expected tenant information response
}

const SecurityService = {
  getUserInfo: async (): Promise<UserInfoResponse> => {
    const response = await axios.get<UserInfoResponse>(`${baseURL}/Security/GetUserInfo`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
    return response.data;
  },

  getTenant: async (): Promise<TenantInfoResponse> => {
    const response = await axios.get<TenantInfoResponse>(`${baseURL}/Security/GetTenant`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
    return response.data;
  },
};

export default SecurityService;