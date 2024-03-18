import React, { useState } from 'react';
interface RowProps {
  // Define the structure of the row object if it has specific fields you will use
}
// TypeScript interface for props that we might pass to the MyGridCellComponent
interface MyGridCellComponentProps {
  row: RowProps;
  onDeleteRow: (row: RowProps) => void; // This is a function prop for handling row deletion
}
// React component definition using TypeScript
const MyGridCellComponent: React.FC<MyGridCellComponentProps> = ({ row, onDeleteRow }) => {
  // State and other hooks would go here
  // Function that confirms deletion before proceeding
  const confirmAndDelete = () => {
    if (window.confirm('Are you sure to delete?')) {
      onDeleteRow(row);
    }
  };
  return (
    <div>
      <div className="ui-grid-cell-contents">
        <button type="button" className="btn btn-danger" onClick={confirmAndDelete}>
          <i className="glyphicon glyphicon-trash"></i>
        </button>
      </div>
    </div>
  );
};
export default MyGridCellComponent;