import axios from 'axios';

const service = {
  invalidateOrderData(orderToInvalidate) {
    return axios.post('ReportingController/InvalidateOrderData', orderToInvalidate);
  },

  getReportDetails(togglingTenant, details) {
    return axios.post(`ReportingController/GetReportDetails/${togglingTenant}`, details);
  },

  getReportDetailsFilter(filterSection, togglingTenant) {
    return axios.get(`ReportingController/GetReportDetailsFilter/${filterSection}/${togglingTenant}`);
  },

  getReportDetailsByReferenceFilter(togglingTenant, fDetails) {
    return axios.post(`ReportingController/GetReportDetailsbyReferenceFilter/${togglingTenant}`, fDetails);
  }
};

export default service;