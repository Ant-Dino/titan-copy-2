import axios from 'axios';

const BASE_URL = 'http://example.com/api/users';

interface User {
  id?: number;
  name: string;
  email: string;
}

const config = {
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers like Authorization here
  },
};

export const UserService = {
  // Fetch all users
  getAllUsers: () => {
    return axios.get(BASE_URL, config);
  },

  // Fetch a single user by ID
  getUserById: (id: number) => {
    return axios.get(`${BASE_URL}/${id}`, config);
  },

  // Create a new user
  createUser: (user: User) => {
    return axios.post(BASE_URL, user, config);
  },

  // Update an existing user
  updateUser: (id: number, user: User) => {
    return axios.put(`${BASE_URL}/${id}`, user, config);
  },

  // Delete a user
  deleteUser: (id: number) => {
    return axios.delete(`${BASE_URL}/${id}`, config);
  },
};