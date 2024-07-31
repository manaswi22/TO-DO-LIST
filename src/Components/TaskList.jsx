

import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, toggleComplete }) => {
  return (
    <div className="mt-8">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          editTask={editTask} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </div>
  );
};

export default TaskList;