import axios from 'axios';

// Assuming baseURL is defined globally or imported from a config
const baseURL = '/api';

// Interface for the response data structure for better type checking and IntelliSense
interface UserInfoResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
}

interface AuditDetails {
  // Assuming structure of AuditDetails, needs to be defined according to actual data structure
}

// Function to get user information
export const getUserInfo = (): Promise<UserInfoResponse> => {
  return axios.get(`${baseURL}/userinfo`).then(response => response.data);
};

// Assuming the structure for GetAuditDetails request parameters
interface GetAuditDetailsParams {
  fromDate: Date;
  throughDate: Date;
}

// Function to get audit details based on date range
export const getAuditDetails = (params: GetAuditDetailsParams): Promise<AuditDetails[]> => {
  // Assuming the actual endpoint for GetAuditDetails
  return axios.post(`${baseURL}/audit/details`, params).then(response => response.data);
};

// Assuming the structure for GetAuditDetailsFilter request parameters
interface GetAuditDetailsFilterParams {
  filterOption: string;
}

// Function to get filtered audit details
export const getAuditDetailsFilter = (params: GetAuditDetailsFilterParams): Promise<AuditDetails[]> => {
  // Assuming the actual endpoint for GetAuditDetailsFilter
  return axios.post(`${baseURL}/audit/details/filter`, params).then(response => response.data);
};