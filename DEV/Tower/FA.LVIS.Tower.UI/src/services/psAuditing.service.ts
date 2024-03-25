import axios from 'axios';

interface AuditDetails {
  search?: string;
  Fromdate: string;
  ThroughDate: string;
}

interface AuditDetailsFilter {
  filterSection: string;
}

class PsAuditingService {
  private baseURL: string = '';

  constructor() {
    this.baseURL = 'api/audit/';
  }

  getAuditDetails(details: AuditDetails) {
    return axios.post(`${this.baseURL}GetAuditDetails/`, details, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getAuditDetailsFilter(filterSection: string) {
    return axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export default new PsAuditingService();