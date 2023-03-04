import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

export default function Task({
  id,
  completed,
  content,
  toggleTaskCompleted,
  deleteTask,
  index,
}) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <input
              id={id}
              type="checkbox"
              onChange={() => toggleTaskCompleted(id)}
              defaultChecked={completed}
            />
            <label className="todo-label" htmlFor={id}>
              {content}
            </label>
          </div>
          <button onClick={() => deleteTask(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#494C6B"
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </button>
        </li>
      )}
    </Draggable>
  );
}
