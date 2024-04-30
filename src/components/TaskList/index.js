import React from 'react';
import './index.css'

const TaskList = ({ tasks, completeTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <h3 className='task-heading'>{task.name}</h3>
          <p>{task.description}</p>
          <p><strong>Due Date:</strong> {task.dueDate}</p>
          {!task.completed && (
            <button className='Complete-task-btn' onClick={() => completeTask(task.id)}>Complete Task</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;