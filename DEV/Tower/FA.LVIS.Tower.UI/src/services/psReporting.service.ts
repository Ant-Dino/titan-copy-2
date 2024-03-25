import axios from 'axios';

interface InvalidateOrderDataRequest {
  // Define the structure of the request body if needed
}

interface GetReportDetailsRequest {
  Fromdate: string;
  ThroughDate: string;
}

interface GetReportDetailsbyReferenceFilterRequest {
  ReferenceNoType: string;
  ReferenceNo: string;
}

class PsReportingService {
  private baseURL: string = ''; // Set the base URL for your API

  constructor() {
    // Initialize with any setup if needed
  }

  public invalidateOrderData(orderData: InvalidateOrderDataRequest) {
    return axios.post(`${this.baseURL}/ReportingController/InvalidateOrderData`, orderData, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
  }

  public getReportDetails(tenant: string, details: GetReportDetailsRequest) {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetails/${tenant}`, details, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
  }

  public getReportDetailsFilter(filterSection: string, tenant: string) {
    return axios.get(`${this.baseURL}/ReportingController/GetReportDetailsFilter/${filterSection}/${tenant}`, {
      headers: {
        // Any headers if needed
      },
    });
  }

  public getReportDetailsbyReferenceFilter(tenant: string, filterDetails: GetReportDetailsbyReferenceFilterRequest) {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetailsbyReferenceFilter/${tenant}`, filterDetails, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
  }
}

export default PsReportingService;