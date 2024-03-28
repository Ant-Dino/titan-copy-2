import axios from 'axios';

const baseURL = '/api';

interface UserInfoResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
}

interface AuditDetailsRequest {
  search: string;
  Fromdate: string;
  ThroughDate: string;
}

interface AuditDetailsResponse {
  // Assuming the structure of the response, adjust according to actual response
}

const PsAuditingService = {
  fetchUserInfo: async (): Promise<UserInfoResponse> => {
    const response = await axios.get<UserInfoResponse>(`${baseURL}/user/info`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
    return response.data;
  },

  getAuditDetails: async (data: AuditDetailsRequest): Promise<AuditDetailsResponse> => {
    const response = await axios.post<AuditDetailsResponse>(`${baseURL}/audit/GetAuditDetails`, data, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
    return response.data;
  },
};

export default PsAuditingService;