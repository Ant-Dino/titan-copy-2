import React, { useState, FunctionComponent } from 'react';
interface RowProps {
  // Define any props types that the row might need for deletion
  // For this example, we'll assume there's an `id` to uniquely identify the row
  id: number;
  // A method passed down to handle the deletion in a parent component might also be included
  deleteRowMethod: (id: number) => void;
}
/* Assuming an AntiForgeryToken component exists in your React project, 
this would be the place to import it. However, for the scope of this conversion, 
let's simulate its import even though it's not detailed in the original AngularJS snippet. */
// import AntiForgeryToken from './AntiForgeryToken';
const TableRow: FunctionComponent<RowProps> = ({ id, deleteRowMethod }) => {
  
  // Handler for when the delete button is clicked
  const handleDeleteClick = (): void => {
    // Confirm with the user if they really want to delete the row
    const isConfirmed = window.confirm('Are you sure to delete?');
    if (isConfirmed) {
      // Call the method passed in the props to handle the actual deletion logic
      deleteRowMethod(id);
    }
  };
  return (
    <div>
      {/* We'll simulate a placeholder for antiforgery token component, 
      as it's not fully detailed how it's to be implemented in React based on the snippet. */}
      {/* <AntiForgeryToken /> */}
      <div className="ui-grid-cell-contents">
        <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>
          <i className="glyphicon glyphicon-trash"></i>
        </button>
      </div>
    </div>
  );
};
export default TableRow;