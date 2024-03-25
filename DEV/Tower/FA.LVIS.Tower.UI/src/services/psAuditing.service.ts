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

  constructor() {
    // Initialize with the actual base URL of the API if needed
    this.baseURL = 'http://example.com/'; // Placeholder URL
  }

  public getAuditDetails(details: AuditDetails) {
    const url = `${this.baseURL}api/audit/GetAuditDetails/`;
    return axios.post(url, details, {
      headers: {
        'Content-Type': 'application/json',
        // Any other required headers
      },
    });
  }

  public getAuditDetailsFilter(filterSection: string) {
    const url = `${this.baseURL}AuditController/GetAuditDetailsFilter/${filterSection}`;
    return axios.get(url, {
      headers: {
        // Any required headers here
      },
    });
  }
}

export default PsAuditingService;