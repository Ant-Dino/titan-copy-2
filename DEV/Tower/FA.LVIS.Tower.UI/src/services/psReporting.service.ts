import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'https://your-api-domain.com/api';

// Set up the headers, typically including content type or authentication tokens
const headers = {
  'Content-Type': 'application/json',
  // 'Authorization': 'Bearer yourAuthTokenHere', // Uncomment and replace if needed
};

// Example service file for PsReporting
class PsReportingService {
  // Example method for a GET request
  static async fetchReportData(params: any) {
    try {
      const response = await axios.get(`${API_BASE_URL}/reporting-endpoint`, { params, headers });
      return response.data;
    } catch (error) {
      console.error('Error fetching report data:', error);
      throw error;
    }
  }

  // Example method for a POST request
  static async invalidateOrder(orderId: string, payload: any) {
    try {
      const response = await axios.post(`${API_BASE_URL}/invalidate-order/${orderId}`, payload, { headers });
      return response.data;
    } catch (error) {
      console.error('Error invalidating order:', error);
      throw error;
    }
  }

  // Add more methods as needed for other endpoints
}

export default PsReportingService;