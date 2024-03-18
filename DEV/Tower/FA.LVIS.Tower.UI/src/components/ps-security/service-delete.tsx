import React from 'react';
interface DeleteButtonProps {
  row: any; // Define the type according to your data structure
  deleteRow: (row: any) => void; // Adjust the type
}
const DeleteButton: React.FC<DeleteButtonProps> = ({ row, deleteRow }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure to delete?')) {
      deleteRow(row);
    }
  };
  return (
    <div className="ui-grid-cell-contents">
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        <i className="glyphicon glyphicon-trash"></i>
      </button>
    </div>
  );
};
export default DeleteButton;