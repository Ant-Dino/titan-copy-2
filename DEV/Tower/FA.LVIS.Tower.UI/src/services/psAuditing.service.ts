import axios from 'axios';

const auditService = {
  getAuditDetails: function(details) {
    return axios.post('api/audit/GetAuditDetails/', details);
  },
  getAuditDetailsFilter: function(filterSection) {
    return axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
  }
};

export default auditService;