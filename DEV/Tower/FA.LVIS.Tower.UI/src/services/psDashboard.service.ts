import axios from 'axios';

interface BEQExceptionResponse {
  // Define the structure according to the actual data received
}

interface TEQExceptionResponse {
  // Define the structure according to the actual data received
}

interface GraphicalTEQExceptionResponse {
  // Define the structure according to the actual data received
}

interface GraphicalBEQExceptionResponse {
  // Define the structure according to the actual data received
}

export class DashboardService {
  private baseURL: string = ''; // Set the base URL according to your environment

  loadBEQExceptions(): Promise<BEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by the API
      },
    }).then(response => response.data);
  }

  loadTEQExceptions(): Promise<TEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by the API
      },
    }).then(response => response.data);
  }

  loadGraphicalTEQException(): Promise<GraphicalTEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalTEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by the API
      },
    }).then(response => response.data);
  }

  loadGraphicalBEQException(): Promise<GraphicalBEQExceptionResponse> {
    return axios.get(`${this.baseURL}/Dashboard/GraphicalBEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by the API
      },
    }).then(response => response.data);
  }
}