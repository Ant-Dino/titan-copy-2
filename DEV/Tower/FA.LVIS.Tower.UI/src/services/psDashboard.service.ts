import axios from 'axios';

interface BEQExceptionResponse {
  // Define the structure according to your needs
}

interface TEQExceptionResponse {
  // Define the structure according to your needs
}

interface GraphicalTEQExceptionResponse {
  // Define the structure according to your needs
}

interface GraphicalBEQExceptionResponse {
  // Define the structure according to your needs
}

export class DashboardService {
  private baseURL: string = ''; // Set your base URL here

  public loadBEQExceptions(): Promise<BEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers here
      },
    }).then(response => response.data);
  }

  public loadTEQExceptions(): Promise<TEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers here
      },
    }).then(response => response.data);
  }

  public loadGraphicalTEQException(): Promise<GraphicalTEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalTEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers here
      },
    }).then(response => response.data);
  }

  public loadGraphicalBEQException(): Promise<GraphicalBEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalBEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers here
      },
    }).then(response => response.data);
  }
}