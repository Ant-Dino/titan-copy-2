 
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const PsSecurityComponent = () => {
  const [activityRight, setActivityRight] = useState(null);
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);
  const [users, setUsers] = useState([]);
  const [tenantName, setTenantName] = useState("");
  const [tenantVisible, setTenantVisible] = useState(false);
  const [busy, setBusy] = useState(false);
  const [cookies, setCookie] = useCookies(['activityright']);
  const history = useHistory();

  useEffect(() => {
    fetchUserActivityRight();
    fetchUsers();
    fetchTenant();
  }, []);

  const fetchUserActivityRight = async () => {
    try {
      const response = await axios.get("Security/GetCurrentUser/");
      const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
      setActivityRight(ActivityRight || cookies.activityright);
      setCanManageTEQ(CanManageTEQ);
      setCanManageBEQ(CanManageBEQ);
      checkAccessRights(ActivityRight);
    } catch (error) {
      console.error("Failed to fetch user activity rights:", error);
    }
  };

  const fetchUsers = async () => {
    if (!activityRight) return;
    try {
      const response = await axios.get("Security/GetUsers");
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const fetchTenant = async () => {
    try {
      const response = await axios.get("Security/GetTenant");
      setTenantName(response.data);
      checkTenantVisibility();
    } catch (error) {
      console.error("Failed to fetch tenant:", error);
    }
  };

  const checkAccessRights = (activityRight) => {
    if (activityRight === "Admin" || activityRight === "SuperAdmin") {
      setHasAccess(true);
    }
    if (activityRight === "SuperAdmin") {
      setHasModifyAccess(true);
    }
    if (activityRight !== "Admin" && activityRight !== "SuperAdmin") {
      // Redirect if not authorized
      history.push("/dashboard");
    }
  };

  const checkTenantVisibility = async () => {
    try {
      const response = await axios.get("Security/GetShowTenants");
      setTenantVisible(response.data);
    } catch (error) {
      console.error("Failed to check tenant visibility:", error);
    }
  };

  const handleDeleteUser = async (user) => {
    try {
      await axios.post("api/Security/Delete/" + user.ID);
      toast.success("The record was deleted successfully");
      setUsers(users.filter(u => u.ID !== user.ID));
    } catch (error) {
      toast.error("Cannot Delete user (error in console)");
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div>
      {/* Security Grid UI here */}
      <button disabled={!hasModifyAccess}>Add User</button>
      {users.map((user, index) => (
        <div key={index}>
          <p>{user.Name}</p>
          <button onClick={() => handleDeleteUser(user)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PsSecurityComponent;
