import axios from 'axios';

const psSecurityService = {
    getUsers() {
        return axios.get('Security/GetUsers');
    },
    getTenant() {
        return axios.get('Security/GetTenant');
    },
    getShowTenants() {
        return axios.get('Security/GetShowTenants');
    },
    addUser(userData) {
        return axios.post('api/Security/Post', userData);
    },
    updateUserDetails(userData) {
        return axios.post('api/Security/UpdateUserDetails', userData);
    },
    deleteUser(userId) {
        return axios.get(`api/Security/Delete/${userId}`);
    },
    getTenantList() {
        return axios.get('FilePreferences/GetTenantList');
    },
    getRoles() {
        return axios.get('Security/GetRoles');
    },
    findUser(identity, userName) {
        return axios.get(`Security/FindUser/${identity}/${userName}`);
    },
    getCurrentUser() {
        return axios.get('Security/GetCurrentUser/');
    }
};

export default psSecurityService;