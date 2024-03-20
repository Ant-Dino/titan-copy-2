import axios from 'axios';

const API_BASE_URL = 'http://example.com/api';

const userService = {
  // Fetch all users
  getAllUsers: function() {
    return axios.get(`${API_BASE_URL}/users`);
  },

  // Fetch a single user by ID
  getUserById: function(userId) {
    return axios.get(`${API_BASE_URL}/users/${userId}`);
  },

  // Create a new user
  createUser: function(userData) {
    return axios.post(`${API_BASE_URL}/users`, userData);
  },

  // Update a user by ID
  updateUser: function(userId, userData) {
    return axios.put(`${API_BASE_URL}/users/${userId}`, userData);
  },

  // Delete a user by ID
  deleteUser: function(userId) {
    return axios.delete(`${API_BASE_URL}/users/${userId}`);
  }
};

export default userService;