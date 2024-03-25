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
  private baseURL: string = ''; // Define the base URL for the API if known

  invalidateOrderData(orderData: InvalidateOrderDataRequest[]) {
    return axios.post(`${this.baseURL}/ReportingController/InvalidateOrderData`, orderData, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by the API
      },
    });
  }

  getReportDetails(togglingTenant: string, details: GetReportDetailsRequest) {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetails/${togglingTenant}`, details, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by the API
      },
    });
  }

  getReportDetailsFilter(filterSection: string, togglingTenant: string) {
    return axios.get(`${this.baseURL}/ReportingController/GetReportDetailsFilter/${filterSection}/${togglingTenant}`, {
      headers: {
        // Add any headers if required
      },
    });
  }

  getReportDetailsbyReferenceFilter(togglingTenant: string, filterDetails: GetReportDetailsbyReferenceFilterRequest) {
    return axios.post(`${this.baseURL}/ReportingController/GetReportDetailsbyReferenceFilter/${togglingTenant}`, filterDetails, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by the API
      },
    });
  }
}

export default PsReportingService;