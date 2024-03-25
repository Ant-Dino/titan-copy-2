import axios from 'axios';

interface BEQExceptionResponse {
  // Define the structure according to the actual response
}

interface TEQExceptionResponse {
  // Define the structure according to the actual response
}

interface GraphicalTEQExceptionResponse {
  // Define the structure according to the actual response
}

interface GraphicalBEQExceptionResponse {
  // Define the structure according to the actual response
}

export class PsDashboardService {
  private baseURL: string = ''; // Set the base URL according to the environment

  public loadBEQExceptions(): Promise<BEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  }

  public loadTEQExceptions(): Promise<TEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  }

  public loadGraphicalTEQException(): Promise<GraphicalTEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalTEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  }

  public loadGraphicalBEQException(): Promise<GraphicalBEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalBEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    }).then(response => response.data);
  }
}