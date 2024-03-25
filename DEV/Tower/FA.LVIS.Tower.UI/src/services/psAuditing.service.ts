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
  private baseURL: string = ''; // Base URL should be defined according to the environment setup

  getAuditDetails(details: AuditDetails) {
    return axios.post(`${this.baseURL}api/audit/GetAuditDetails/`, details, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers that are required
      },
    });
  }

  getAuditDetailsFilter(filterSection: string) {
    return axios.get(`${this.baseURL}AuditController/GetAuditDetailsFilter/${filterSection}`, {
      headers: {
        // Any headers if required
      },
    });
  }
}

export default new PsAuditingService();