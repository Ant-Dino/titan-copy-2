import axios from 'axios';

const baseURL = ''; // You should replace this with the actual base URL

interface UserDetails {
    ActivityRight: string;
    CanManageTEQ: boolean;
    CanManageBEQ: boolean;
}

interface NewRow {
    ID: string;
    UserId: string;
    Role: string;
    IsActive: string;
    EmailId: string;
    Employeeid: string;
    Tenant: any;
    ManageBEQ: boolean;
    ManageTEQ: boolean;
}

const PsSecurityService = {
    getCurrentUser: async () => {
        return axios.get<UserDetails>(`${baseURL}Security/GetCurrentUser/`, {
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers here
            },
        });
    },
    getUsers: async () => {
        return axios.get<Array<any>>(`${baseURL}Security/GetUsers`, {
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers here
            },
        });
    },
    // If there were any POST, PUT, DELETE methods, they would be defined here similarly.
    // For example, adding a new row might look like this:
    addRow: async (newRow: NewRow) => {
        return axios.post(`${baseURL}Security/AddRow`, newRow, {
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers here
            },
        });
    },
    // Note: The addRow function is hypothetical and assumes there's an endpoint to add a row.
    // You would need to replace 'Security/AddRow' with the actual endpoint and adjust the newRow type as necessary.
};

export default PsSecurityService;