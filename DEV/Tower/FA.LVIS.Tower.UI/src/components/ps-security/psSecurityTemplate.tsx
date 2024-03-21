import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
interface SecurityProfilesProps {
  getCurrentUser: () => void;
  hasModifyAccess: boolean;
  addRow: () => void;
  // Add other props needed for your component here
}
const SecurityProfiles: React.FC<SecurityProfilesProps> = ({ getCurrentUser, hasModifyAccess, addRow }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  // Define column definitions and row data for AgGrid
  const columnDefs = [
    { headerName: "Security Profile", field: "securityProfile", sortable: true, filter: true },
    // Add more column definitions as needed
  ];
  const rowData = [
    // Fill row data as needed
  ];
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          <div>Security Profiles</div>
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Security Profiles</li>
          </ul>
          <div>
            {hasModifyAccess && (
              <Button onClick={addRow} size="sm" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faUserPlus} /> Add New User
              </Button>
            )}
          </div>
          <div 
            className="ag-theme-alpine"
            style={{ height: 400, width: '100%' }}
          >
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              // Enable features you need, similar to ui-grid attributes
              rowSelection="multiple"
              animateRows={true}
              enableRangeSelection={true}
              allowContextMenuWithControlKey={true}
              ensureDomOrder={true}
              suppressRowClickSelection={true}
            />
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};
export default SecurityProfiles;