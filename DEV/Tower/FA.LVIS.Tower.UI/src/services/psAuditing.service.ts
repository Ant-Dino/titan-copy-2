import axios from 'axios';

const auditingService = {
  getAuditDetailsFilter(filterSection) {
    return axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
  },
  postAuditDetails(details) {
    return axios.post('api/audit/GetAuditDetails/', details);
  }
};

export default auditingService;