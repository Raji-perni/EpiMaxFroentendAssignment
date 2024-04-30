import React, { useState } from 'react';
import './index.css'


const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !dueDate) return;
    
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      dueDate: dueDate,
      completed: false,
    };

    addTask(newTask);
    setTaskName('');
    setTaskDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className='input-container'>
        <label htmlFor="taskName" className='label'>Task Name:</label>
        <input
            type="text"
            id="taskName"
            className='input-box'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
        />
      </div>
      
      <div className='input-container'>
        <label htmlFor="taskDescription" className='label'>Description:</label>
        <textarea
            id="taskDescription"
            className='input-box'
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
      </div>

      <div className='input-container'>
        <label htmlFor="dueDate" className='label'>Due Date:</label>
        <input
            type="date"
            id="dueDate"
            className='input-box'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
        />
      </div>
      <button type="submit" className='add-btn'>Add Task</button>
    </form>
  );
};

export default TaskForm;