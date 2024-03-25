import axios from 'axios';

interface InvalidateOrderDataRequest {
  // Define the structure according to the $scope.orderToInvalidate used in the controller
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
  private baseURL: string = ''; // Set the base URL according to your environment

  invalidateOrderData(orderData: InvalidateOrderDataRequest[]) {
    return axios.post(`${this.baseURL}/ReportingController/InvalidateOrderData`, orderData, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
  }

  getReportDetails(tenant: string, details: GetReportDetailsRequest) {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetails/${tenant}`, details, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
  }

  getReportDetailsFilter(filterSection: string, tenant: string) {
    return axios.get(`${this.baseURL}/ReportingController/GetReportDetailsFilter/${filterSection}/${tenant}`, {
      headers: {
        // Add any required headers here
      },
    });
  }

  getReportDetailsbyReferenceFilter(tenant: string, filterDetails: GetReportDetailsbyReferenceFilterRequest) {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetailsbyReferenceFilter/${tenant}`, filterDetails, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });
  }
}

export default PsReportingService;