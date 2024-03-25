import axios from 'axios';

interface InvalidateOrderDataRequest {
  // Define the structure of the request payload for InvalidateOrderData endpoint
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
  private baseURL: string = ''; // Define the base URL for the API

  constructor() {
    // Initialize with the base URL of your API
    this.baseURL = 'http://your-api-url.com/';
  }

  public async invalidateOrderData(orderData: InvalidateOrderDataRequest): Promise<any> {
    const url = `${this.baseURL}ReportingController/InvalidateOrderData`;
    return axios.post(url, orderData, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
  }

  public async getReportDetails(tenant: string, details: GetReportDetailsRequest): Promise<any> {
    const url = `${this.baseURL}ReportingController/GetReportDetails/${tenant}`;
    return axios.post(url, details, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
  }

  public async getReportDetailsFilter(filterSection: string, tenant: string): Promise<any> {
    const url = `${this.baseURL}ReportingController/GetReportDetailsFilter/${filterSection}/${tenant}`;
    return axios.get(url, {
      headers: {
        // Any headers if needed
      },
    });
  }

  public async getReportDetailsbyReferenceFilter(tenant: string, filterDetails: GetReportDetailsbyReferenceFilterRequest): Promise<any> {
    const url = `${this.baseURL}ReportingController/GetReportDetailsbyReferenceFilter/${tenant}`;
    return axios.post(url, filterDetails, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
  }
}

export default PsReportingService;