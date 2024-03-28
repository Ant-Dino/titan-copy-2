import axios from 'axios';

const baseURL = ''; // You should replace this with your actual base URL

interface UserInfoResponse {
    ActivityRight: string;
    CanManageBEQ: boolean;
    CanManageTEQ: boolean;
}

interface BEQExceptionResponse {
    // Define the structure of your BEQException response here
}

interface TEQExceptionResponse {
    // Define the structure of your TEQException response here
}

const DashboardService = {
    getCurrentUser: async (): Promise<UserInfoResponse> => {
        const response = await axios.get(`${baseURL}/getUserInfo`, {
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers required for your API
            },
        });
        return response.data;
    },

    loadBEQExceptions: async (): Promise<BEQExceptionResponse[]> => {
        const response = await axios.get(`${baseURL}/Dashboard/BEQException/`, {
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers required for your API
            },
        });
        return response.data;
    },

    loadTEQExceptions: async (): Promise<TEQExceptionResponse[]> => {
        const response = await axios.get(`${baseURL}/Dashboard/TEQException/`, {
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers required for your API
            },
        });
        return response.data;
    },
};

export default DashboardService;