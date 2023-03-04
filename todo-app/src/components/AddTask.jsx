import React, { useRef } from 'react';

export default function AddTask({ addTask }) {
  const inputRef = useRef(null);

  function handleOnSubmit(e) {
    e.preventDefault();

    if (!inputRef.current.value.trim()) {
      return;
    }
    addTask(inputRef.current.value);
    inputRef.current.value = '';
    inputRef.current.focus();
  }
  return (
    <form onSubmit={handleOnSubmit} className="add-task">
      <button type="submit">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="#9394A5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.4583 25.6667V14.2083H0V11.4583H11.4583V0H14.2083V11.4583H25.6667V14.2083H14.2083V25.6667H11.4583Z" />
        </svg>
      </button>
      <input
        autoFocus={true}
        ref={inputRef}
        type="text"
        placeholder="Create a new todo..."
      />
    </form>
  );
}
