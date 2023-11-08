import React, { useState } from 'react';

const AddTask = ({ addTask, setMessage }) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    addTask(value);
    setValue("");
  };

  return (
    <div className='input-container'>
      <input
        type='text'
        className='input'
        placeholder='Add a new task'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setMessage(""); 
        }}
      />
      <button onClick={addItem} className='add-btn'>
        ADD
      </button>
    </div>
  );
};

export default AddTask;
