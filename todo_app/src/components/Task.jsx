import React from 'react';

const Task = ({ task, onDelete, onToggleStatus, onEdit }) => {
  return (
    <li className="task-item">
      <span className="task-text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button className="complete-task" onClick={onToggleStatus}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button className="edit-task" onClick={onEdit}>
        Edit
      </button>
      <button className="delete-task" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Task;
