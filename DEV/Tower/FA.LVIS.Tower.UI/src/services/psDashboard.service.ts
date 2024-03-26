import axios from 'axios';

interface BEQExceptionResponse {
  // Define the structure according to your actual data
}

interface TEQExceptionResponse {
  // Define the structure according to your actual data
}

interface GraphicalTEQExceptionResponse {
  // Define the structure according to your actual data
}

interface GraphicalBEQExceptionResponse {
  // Define the structure according to your actual data
}

export class PsDashboardService {
  private baseURL: string = ''; // Set your base URL here

  public loadBEQExceptions(): Promise<BEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    }).then(response => response.data);
  }

  public loadTEQExceptions(): Promise<TEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    }).then(response => response.data);
  }

  public loadGraphicalTEQException(): Promise<GraphicalTEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalTEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    }).then(response => response.data);
  }

  public loadGraphicalBEQException(): Promise<GraphicalBEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalBEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    }).then(response => response.data);
  }
}