import React from 'react';
interface RowDeletionButtonProps {
  deleteRow: (row: any) => void;
  row: any;
const RowDeletionButton: React.FC<RowDeletionButtonProps> = ({ deleteRow, row }) => {
  const handleDeleteClick = () => {
    if (window.confirm('Are you sure to delete?')) {
      deleteRow(row);
  return (
    <div>
      <div>
        <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>
          <i className="glyphicon glyphicon-trash"></i>
export default RowDeletionButton;