import '../assets/styles/TodoList.css';

import React, { useState } from 'react';

import Task from './Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <TaskForm onAdd={addTask} />
      {tasks.length === 0 ? (
        <p>No tasks available. Add a new task above.</p>
      ) : (
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggleStatus={toggleTaskCompletion}
          onEdit={(taskId, newText) => editTask(taskId, newText)}
        />
      )}
    </div>
  );
};
