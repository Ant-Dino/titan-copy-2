import axios from 'axios';

const baseURL = '/Security';

interface UserResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
}

interface UsersResponse {
  // Assuming structure based on usage, adjust as necessary
}

interface TenantsResponse {
  // Assuming structure based on usage, adjust as necessary
}

const SecurityService = {
  getCurrentUser: async (): Promise<UserResponse> => {
    const response = await axios.get(`${baseURL}/GetCurrentUser/`);
    return response.data;
  },

  getUsers: async (): Promise<UsersResponse[]> => {
    const response = await axios.get(`${baseURL}/GetUsers`);
    return response.data;
  },

  getTenant: async (): Promise<TenantsResponse[]> => {
    const response = await axios.get(`${baseURL}/GetTenant`);
    return response.data;
  },
};

export default SecurityService;