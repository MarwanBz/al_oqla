import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggleStatus,onEdit }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a new task above.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEdit={() => onEdit(task.id, window.prompt('Edit task:', task.text))}
              onDelete={() => onDelete(task.id)}
              onToggleStatus={() => onToggleStatus(task.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
