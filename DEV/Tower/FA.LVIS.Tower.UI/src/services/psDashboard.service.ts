import axios from 'axios';

interface BEQExceptionResponse {
  // Define the structure of the response from the BEQException endpoint
}

interface TEQExceptionResponse {
  // Define the structure of the response from the TEQException endpoint
}

interface GraphicalTEQExceptionResponse {
  // Define the structure of the response from the GraphicalTEQException endpoint
}

interface GraphicalBEQExceptionResponse {
  // Define the structure of the response from the GraphicalBEQException endpoint
}

export class PsDashboardService {
  private baseURL: string = ''; // Define the base URL for the API

  constructor() {
    // Initialize with the actual base URL of your API
    this.baseURL = 'http://your-api-url.com/';
  }

  public loadBEQExceptions(): Promise<BEQExceptionResponse> {
    return axios.get(`${this.baseURL}Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other necessary headers
      },
    }).then(response => response.data);
  }

  public loadTEQExceptions(): Promise<TEQExceptionResponse> {
    return axios.get(`${this.baseURL}Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other necessary headers
      },
    }).then(response => response.data);
  }

  public loadGraphicalTEQException(): Promise<GraphicalTEQExceptionResponse> {
    return axios.get(`${this.baseURL}Dashboard/GraphicalTEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other necessary headers
      },
    }).then(response => response.data);
  }

  public loadGraphicalBEQException(): Promise<GraphicalBEQExceptionResponse> {
    return axios.get(`${this.baseURL}Dashboard/GraphicalBEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other necessary headers
      },
    }).then(response => response.data);
  }
}