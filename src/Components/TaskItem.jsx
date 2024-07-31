

import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex items-center justify-between" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toggleComplete(task.id)} 
            className="mr-2 leading-tight"
          />
          <span className={`text-lg ${task.completed ? 'line-through' : ''}`}>{task.title}</span>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          {isExpanded ? 'Hide' : 'Show'} Details
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p className="text-gray-700">{task.description}</p>
          <p className="text-gray-500 text-sm">Last updated: {new Date(task.lastUpdated).toLocaleString()}</p>
          <div className="flex mt-4">
            <button 
              onClick={() => editTask(task)} 
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 rounded mr-2"
            >
              Edit
            </button>
            <button 
              onClick={() => deleteTask(task.id)} 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
