import axios from 'axios';

// Assuming baseURL for simplicity, replace with actual URL
const baseURL = 'http://example.com/api';

// Setup Axios instance
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Add any common headers here
  },
});

// Define interface for the response types if known, using any as a placeholder
interface IUserResponse {
  // Define properties based on actual response
}

interface IExceptionResponse {
  // Define properties based on actual response
}

// getUser Axios function
export const getUser = async (): Promise<IUserResponse> => {
  try {
    const response = await axiosInstance.get('/user');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// LoadBEQExceptions Axios function
export const LoadBEQExceptions = async (): Promise<IExceptionResponse[]> => {
  try {
    const response = await axiosInstance.get('/beq-exceptions');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// LoadTEQExceptions Axios function
export const LoadTEQExceptions = async (): Promise<IExceptionResponse[]> => {
  try {
    const response = await axiosInstance.get('/teq-exceptions');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Assuming LoadGraphicalBEQException and LoadGraphicalTEQException follow a similar pattern
// LoadGraphicalBEQException Axios function
export const LoadGraphicalBEQException = async (): Promise<IExceptionResponse> => {
  try {
    const response = await axiosInstance.get('/graphical-beq-exception');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// LoadGraphicalTEQException Axios function
export const LoadGraphicalTEQException = async (): Promise<IExceptionResponse> => {
  try {
    const response = await axiosInstance.get('/graphical-teq-exception');
    return response.data;
  } catch (error) {
    throw error;
  }
};