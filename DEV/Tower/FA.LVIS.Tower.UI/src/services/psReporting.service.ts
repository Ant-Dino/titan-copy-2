import axios from 'axios';

const reportingService = {
  invalidateOrderData(orderToInvalidate) {
    return axios.post('ReportingController/InvalidateOrderData', orderToInvalidate);
  },
  getReportDetails(togglingTenant, details) {
    return axios.post(`ReportingController/GetReportDetails/${togglingTenant}`, details);
  },
  getReportDetailsFilter(filterSection, togglingTenant) {
    return axios.get(`ReportingController/GetReportDetailsFilter/${filterSection}/${togglingTenant}`);
  },
  getReportDetailsByReferenceFilter(togglingTenant, FDetails) {
    return axios.post(`ReportingController/GetReportDetailsbyReferenceFilter/${togglingTenant}`, FDetails);
  }
};

export default reportingService;