import React, { useState } from 'react';
import { BsPencil } from 'react-icons/bs';

const ListTask = ({ task, index, removeTask, editTask }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    if (editedTitle.length > 0) {
      editTask(index, editedTitle); 
      setEditing(false);
    }
   
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <div className='list-tasks'>
      {editing ? (
        <>
          <input
            type='text'
            value={editedTitle}
            onChange={handleTitleChange}
          />
          <button onClick={handleSaveClick} className='save-btn'>Save</button>
        </>
      ) : (
       <>

        <div>
          <span>{task.title}</span>
          <button onClick={() => removeTask(index)} className='delete-btn'>
            Delete
          </button>
          </div>
          <span onClick={handleEditClick} className='edit-icon'>
            <BsPencil />
          </span>
          </>
      )}
    </div>
  );
};




export default ListTask;


