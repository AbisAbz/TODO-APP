import React, { useState } from 'react';
import "./todo.css";
import ListTask from "./ListTask";
import AddTask from  "./addTask";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");



  const addTask = (title) => {
    if (title.length > 0) {
      const equalValues = tasks.filter(
        (item) => item.title.toLowerCase() === title.toLowerCase()
      );
  
      if (equalValues.length > 0) {
        setMessage("Task already exists");
      } else {
        
        const id = Date.now().toString();
        const newTask = [...tasks, { id, title }];
        setTasks(newTask);
        setMessage("");
      }
    } else {
      setMessage("Please add a task");
    }
  };
  

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index,1);
    setTasks(newTask);
  };


  const editTask = (taskId, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  };
  

  return (
    <div className='todo-container'>
      <div className='header'> Get Things Done!</div>
      <div className='add-task'>
        <AddTask addTask={addTask} setMessage={setMessage} />
        <p className='errormessage'>{message}</p>
      </div>
      <div className='tasks'>
      

{tasks.map((task) => (
  <ListTask
    key={task.id} 
    task={task}
    removeTask={removeTask}
    editTask={editTask}
  />
))}

        
      </div>
    </div>
  );
};

export default Todo;
