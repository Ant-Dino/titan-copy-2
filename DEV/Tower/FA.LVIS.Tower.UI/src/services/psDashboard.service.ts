import axios from 'axios';

interface BEQExceptionResponse {
  // Define the structure according to the expected response
}

interface TEQExceptionResponse {
  // Define the structure according to the expected response
}

interface GraphicalTEQExceptionResponse {
  // Define the structure according to the expected response
}

interface GraphicalBEQExceptionResponse {
  // Define the structure according to the expected response
}

export class DashboardService {
  private baseURL: string = ''; // Define the base URL for your API

  loadBEQExceptions(): Promise<BEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    }).then(response => response.data);
  }

  loadTEQExceptions(): Promise<TEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    }).then(response => response.data);
  }

  loadGraphicalTEQException(): Promise<GraphicalTEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalTEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    }).then(response => response.data);
  }

  loadGraphicalBEQException(): Promise<GraphicalBEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalBEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    }).then(response => response.data);
  }
}