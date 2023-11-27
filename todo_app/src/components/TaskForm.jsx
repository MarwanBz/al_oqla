import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAdd(newTask);
      setNewTask('');
    }
  };

  // handel when user press enter
   const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }; 

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleInputChange}
         onKeyUp={handleKeyPress}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
