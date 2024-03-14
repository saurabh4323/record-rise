// Fields.js
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Fields = ({ name, email, index, onDelete }) => {
  const handleDelete = () => {
    onDelete(index); // Call the delete function with the index
  };

  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
        <Button onClick={handleDelete} variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;
