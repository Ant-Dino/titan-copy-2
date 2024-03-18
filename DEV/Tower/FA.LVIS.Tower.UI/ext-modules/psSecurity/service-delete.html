import React, { useState } from 'react';
interface TableRowProps {
  deleteRow: (row: any) => void; // Define the row type according to your data
  row: any; // Again, define the row type based on your data structure
}
const TableRow: React.FC<TableRowProps> = ({ deleteRow, row }) => {
  // Placeholder for any state or effects you might want to add
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const confirmDelete = async () => {
    const isConfirmed = window.confirm('Are you sure to delete?');
    if (isConfirmed) {
      setIsDeleting(true);
      try {
        await deleteRow(row);
        alert('Row deleted successfully.');
      } catch (error) {
        console.error('Error deleting row:', error);
        alert('Failed to delete row.');
      } finally {
        setIsDeleting(false);
      }
    }
  };
  return (
    <div>
      <button type="button" className="btn btn-danger" onClick={confirmDelete} disabled={isDeleting}>
        {isDeleting ? <span>Deleting...</span> : <i className="glyphicon glyphicon-trash"></i>}
      </button>
    </div>
  );
}
export default TableRow;