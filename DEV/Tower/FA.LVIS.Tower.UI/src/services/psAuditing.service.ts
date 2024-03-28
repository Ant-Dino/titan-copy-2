import axios from 'axios';

// Define the base URL for the auditing API
const BASE_URL = 'http://example.com/api'; // Adjust this URL to your actual API endpoint

// Define the interface for the audit details request parameters
interface AuditDetailsParams {
  fromdate: Date;
  throughDate: Date;
}

// Define the interface for the filter selection parameter
interface FilterSelectionParams {
  filterSelection: string;
}

// Axios instance for custom configurations if needed
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // You can add more custom configurations here
});

// Function to get audit details based on date range
export const getAuditDetails = (params: AuditDetailsParams) => {
  return axiosInstance.get('/audit/details', {
    params,
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers required by your API
    },
  });
};

// Function to get audit details based on a filter selection
export const getAuditDetailsFilter = (params: FilterSelectionParams) => {
  return axiosInstance.get('/audit/details/filter', {
    params,
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers required by your API
    },
  });
};