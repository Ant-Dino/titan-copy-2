import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://your-api-base-url.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleResponse = (response) => {
  // You can add more validation or transformation logic here
  return response.data;
};

const handleError = (error) => {
  // Handle errors more gracefully in your application
  console.error('API call failed. ', error);
  throw error;
};

const ApiService = {
  fetchItems() {
    return apiClient.get('/items')
      .then(handleResponse)
      .catch(handleError);
  },

  fetchItemById(itemId) {
    return apiClient.get(`/items/${itemId}`)
      .then(handleResponse)
      .catch(handleError);
  },

  createItem(itemData) {
    return apiClient.post('/items', itemData)
      .then(handleResponse)
      .catch(handleError);
  },

  updateItem(itemId, itemData) {
    return apiClient.put(`/items/${itemId}`, itemData)
      .then(handleResponse)
      .catch(handleError);
  },

  deleteItem(itemId) {
    return apiClient.delete(`/items/${itemId}`)
      .then(handleResponse)
      .catch(handleError);
  },
};

export default ApiService;