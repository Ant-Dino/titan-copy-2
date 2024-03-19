import axios from 'axios';

const API_URL = 'http://your-api-url.com/api';

class YourServiceName {
  // Get all items
  getAll() {
    return axios.get(`${API_URL}/items`);
  }

  // Get a single item by ID
  get(id) {
    return axios.get(`${API_URL}/items/${id}`);
  }

  // Create a new item
  create(data) {
    return axios.post(`${API_URL}/items`, data);
  }

  // Update an item by ID
  update(id, data) {
    return axios.put(`${API_URL}/items/${id}`, data);
  }

  // Delete an item by ID
  delete(id) {
    return axios.delete(`${API_URL}/items/${id}`);
  }

  // Additional methods based on your AngularJS controller's logic can be added here
}

export default new YourServiceName();