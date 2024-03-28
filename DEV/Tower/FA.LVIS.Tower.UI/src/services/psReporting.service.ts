import axios from 'axios';

const baseURL = ''; // Please set the base URL of your API here

interface InvalidateOrderDataParams {
  orderToInvalidate: any[]; // Specify the correct type based on your data structure
}

interface GetReportDetailsParams {
  Fromdate: string;
  ThroughDate: string;
}

interface GetReportDetailsFilterParams {
  filterSection: string;
  togglingTenant: string;
}

const headers = {
  'Content-Type': 'application/json',
  // Add any other headers required by your API
};

const ReportingService = {
  fetchTenant: async () => {
    return axios.get(`${baseURL}/Security/GetTenant`, { headers });
  },

  invalidateOrderData: async (params: InvalidateOrderDataParams) => {
    return axios.post(`${baseURL}/ReportingController/InvalidateOrderData`, params, { headers });
  },

  getReportDetails: async (togglingTenant: string, params: GetReportDetailsParams) => {
    return axios.post(`${baseURL}/ReportingController/GetReportDetails/${togglingTenant}`, params, { headers });
  },

  getReportDetailsFilter: async (params: GetReportDetailsFilterParams) => {
    return axios.get(`${baseURL}/ReportingController/GetReportDetailsFilter/${params.filterSection}/${params.togglingTenant}`, { headers });
  },
};

export default ReportingService;