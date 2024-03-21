import axios from 'axios';

interface User {
  ID: string;
  UserId: string;
  Role: string;
  IsActive: boolean;
  EmailId: string;
  Employeeid: string;
  sTenant: string;
  ManageBEQ: boolean;
  ManageTEQ: boolean;
}

class PsSecurityService {
  private baseURL: string = ''; // Base URL should be defined according to the environment setup

  getTenants() {
    return axios.get(`${this.baseURL}Security/GetTenant`);
  }

  getShowTenants() {
    return axios.get(`${this.baseURL}Security/GetShowTenants`);
  }

  getUsers() {
    return axios.get(`${this.baseURL}Security/GetUsers`);
  }

  addUser(user: User) {
    return axios.post(`${this.baseURL}api/Security/Post`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  updateUser(user: User) {
    return axios.post(`${this.baseURL}api/Security/UpdateUserDetails`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  deleteUser(userId: string) {
    return axios.get(`${this.baseURL}api/Security/Delete/${userId}`);
  }

  getTenantList() {
    return axios.get(`${this.baseURL}FilePreferences/GetTenantList`);
  }

  getRoles() {
    return axios.get(`${this.baseURL}Security/GetRoles`);
  }

  findUser(identity: string, userName: string) {
    return axios.get(`${this.baseURL}Security/FindUser/${identity}/${userName}`);
  }

  getCurrentUser() {
    return axios.get(`${this.baseURL}Security/GetCurrentUser/`);
  }
}

export default new PsSecurityService();