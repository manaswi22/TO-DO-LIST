

import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import SearchBar from './Components/SearchBar';
import tasksData from './data/tasks.json';

const App = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    task.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setTaskToEdit(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Todo List</h1>
      <div className="max-w-2xl mx-auto">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
        <TaskList 
          tasks={filteredTasks} 
          editTask={setTaskToEdit} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      </div>
    </div>
  );
};

export default App;
