import axios from 'axios';

const BASE_URL = 'http://example.com/api/users';

const userService = {
  // Create
  createUser: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}`, userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error.response?.data || error.message);
      throw error;
    }
  },

  // Read
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error.response?.data || error.message);
      throw error;
    }
  },

  getUserById: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error.response?.data || error.message);
      throw error;
    }
  },

  // Update
  updateUser: async (userId, userData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error.response?.data || error.message);
      throw error;
    }
  },

  // Delete
  deleteUser: async (userId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting user:', error.response?.data || error.message);
      throw error;
    }
  },
};

export default userService;