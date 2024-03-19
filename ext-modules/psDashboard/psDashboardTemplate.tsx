import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { deviceDetect } from 'react-device-detect';
interface UserInfo {
  UserName: string;
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
}
export const AppController: React.FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['browsercheck', 'currentuser', 'activityright', 'CanAccessReq', 'tenantname']);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [tenantName, setTenantName] = useState<string>('');
  useEffect(() => {
    const browser = deviceDetect().browser;
    if (browser !== 'chrome' && browser !== 'ie') {
      if (!cookies.browsercheck) {
        alert('The browser you are using is not supported 100% by Tower. To get the best user experience, you should use "Chrome" or "Internet Explorer".');
        setCookie('browsercheck', 'true', { path: '/' });
      }
    }
    fetchUserInfo();
    fetchTenantName();
  }, []);
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get<UserInfo>('Security/GetCurrentUser/');
      setUserInfo(response.data);
      setCookie('currentuser', response.data.UserName, { path: '/' });
      setCookie('activityright', response.data.ActivityRight, { path: '/' });
      setCookie('CanAccessReq', response.data.CanAccessReq, { path: '/' });
      addUserAuditLog();
    } catch (error) {
      console.error('Unauthorized: ', error);
    }
  };
  const fetchTenantName = async () => {
    try {
      const response = await axios.get<string>('Security/GetTenant/');
      setTenantName(response.data);
      setCookie('tenantname', response.data, { path: '/' });
    } catch (error) {
      console.error(error);
    }
  };
  const addUserAuditLog = async () => {
    try {
      await axios.post('Security/AddUserAuditLog/');
    } catch (error) {
      console.error(error);
    }
  };
  const openPopupWindow = () => {
    window.open("./TowerUserGuide/help.html", "User Guide", "scrollbars=1,resizable=1,left=10,top=150");
  };
  return (
    <div>
      {/* Render your component UI based on userInfo and tenantName */}
      <button onClick={openPopupWindow}>Open User Guide</button>
    </div>
  );
};
export default AppController;