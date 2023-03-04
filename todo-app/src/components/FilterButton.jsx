import React from 'react';

export default function FilterButton({ name, isPressed, setFilter }) {
  return (
    <button
      onClick={() => {
        setFilter(name);
      }}
      style={{ color: isPressed ? 'var(--surface-7)' : '' }}
    >
      {name}
    </button>
  );
}
