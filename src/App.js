import React, { useState } from 'react';
import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <div className='form-section'>
        <h1 className="main-heading">Task Manager</h1>
        <TaskForm addTask={addTask} />
      </div>
      <TaskList tasks={tasks} completeTask={completeTask} />
    </div>
  );
};

export default App;