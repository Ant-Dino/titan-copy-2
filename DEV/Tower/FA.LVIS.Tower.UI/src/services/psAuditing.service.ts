import axios, { AxiosResponse } from 'axios';

const BASE_URL = ''; // You should replace this with the actual base URL

interface UserInfoResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
}

interface AuditDetailsResponse {
  // Assuming the structure of your response, you should adjust it according to the actual response structure
}

interface GetAuditDetailsParams {
  search?: string;
  Fromdate: string;
  ThroughDate: string;
}

export const AuditingService = {
  getUserInfo: async (): Promise<AxiosResponse<UserInfoResponse>> => {
    return axios.get<UserInfoResponse>(`${BASE_URL}/getUserInfo`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers that you might need
      },
    });
  },

  getAuditDetailsFilter: async (filterSection: string, params: GetAuditDetailsParams): Promise<AxiosResponse<AuditDetailsResponse[]>> => {
    return axios.get<AuditDetailsResponse[]>(`${BASE_URL}/AuditController/GetAuditDetailsFilter/${filterSection}`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        // Any other headers that you might need
      },
    });
  },

  getAuditDetails: async (params: GetAuditDetailsParams): Promise<AxiosResponse<AuditDetailsResponse[]>> => {
    return axios.get<AuditDetailsResponse[]>(`${BASE_URL}/api/audit/GetAuditDetails/`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        // Any other headers that you might need
      },
    });
  },
};