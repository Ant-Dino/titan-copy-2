import axios from 'axios';

const auditService = {
  getAuditDetailsFilter(filterSection) {
    return axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
  },
  postAuditDetails(details) {
    return axios.post('api/audit/GetAuditDetails/', details);
  }
};

export default auditService;