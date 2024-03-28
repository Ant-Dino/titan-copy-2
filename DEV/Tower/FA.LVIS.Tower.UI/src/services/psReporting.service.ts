import axios from 'axios';

const baseURL = ''; // Please set the base URL of your API

interface GetTenantResponse {
  // Define the structure of the response from /Security/GetTenant
}

interface GetReportDetailsRequest {
  togglingTenant: string;
  fromDate: Date;
  throughDate: Date;
}

interface GetReportDetailsResponse {
  // Define the structure of the response from /ReportingController/GetReportDetails/
}

const PsReportingService = {
  getTenant: () => {
    return axios.get<GetTenantResponse>(`${baseURL}/Security/GetTenant`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    });
  },

  getReportDetails: (request: GetReportDetailsRequest) => {
    return axios.post<GetReportDetailsResponse>(`${baseURL}/ReportingController/GetReportDetails/`, request, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
    });
  },

  // If there were more endpoints identified in the component, they would be added here similarly.
};

export default PsReportingService;