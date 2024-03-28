import axios from 'axios';

// Assuming the base URL is defined in a separate configuration file
import { API_BASE_URL } from '../config';

// Define the interface for the request headers
interface RequestHeaders {
  'Content-Type': string;
  Authorization?: string;
}

// Define the service class for the Dashboard controller
class DashboardService {
  // Method to get current user information
  static async getCurrentUser() {
    const url = `${API_BASE_URL}/user/info`;
    const headers: RequestHeaders = {
      'Content-Type': 'application/json',
      // Assuming there's a method to get the auth token
      // Authorization: `Bearer ${getAuthToken()}`,
    };
    return axios.get(url, { headers });
  }

  // Method to load BEQ exceptions
  static async loadBEQExceptions() {
    const url = `${API_BASE_URL}/exceptions/beq`;
    const headers: RequestHeaders = {
      'Content-Type': 'application/json',
    };
    return axios.get(url, { headers });
  }

  // Method to load TEQ exceptions
  static async loadTEQExceptions() {
    const url = `${API_BASE_URL}/exceptions/teq`;
    const headers: RequestHeaders = {
      'Content-Type': 'application/json',
    };
    return axios.get(url, { headers });
  }

  // Method to load graphical BEQ exceptions
  static async loadGraphicalBEQException() {
    const url = `${API_BASE_URL}/exceptions/beq/graphical`;
    const headers: RequestHeaders = {
      'Content-Type': 'application/json',
    };
    return axios.get(url, { headers });
  }

  // Method to load graphical TEQ exceptions
  static async loadGraphicalTEQException() {
    const url = `${API_BASE_URL}/exceptions/teq/graphical`;
    const headers: RequestHeaders = {
      'Content-Type': 'application/json',
    };
    return axios.get(url, { headers });
  }
}

export default DashboardService;