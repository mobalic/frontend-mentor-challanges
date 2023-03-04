import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import FilterButtons from './components/FilterButtons';
import Task from './components/Task';
import initialData from './initial-data';
import { nanoid } from 'nanoid';
import { FILTER_MAP } from './utils';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

export default function App() {
  const [tasks, setTasks] = useState(initialData);
  const [filter, setFilter] = useState('All');

  function handleAddTask(content) {
    const newTask = {
      id: 'todo-' + nanoid(),
      content: content,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleToggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function handleDeleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.filter(FILTER_MAP[filter]).map((task, index) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        completed={task.completed}
        content={task.content}
        toggleTaskCompleted={handleToggleTaskCompleted}
        deleteTask={handleDeleteTask}
        index={index}
      />
    );
  });

  function handleClearCompleted() {
    const remainingTasks = tasks.filter(FILTER_MAP['Active']);
    setTasks(remainingTasks);
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const status = `${taskList.length} ${tasksNoun} left`;

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  }

  return (
    <div id="App">
      <div className="home">
        <header>
          <h1>TODO</h1>
          <button
            id="theme-toggle"
            title="Toggles light & dark"
            aria-label="auto"
            aria-live="polite"
            onClick={() => {
              // Set the theme value here to resolve the issue with Chrome on Android.
              theme.value = theme.value === 'light' ? 'dark' : 'light';
              setPreference();
            }}
          >
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
              <mask id="moon">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="white"
                ></rect>
                <circle cx="40" cy="8" r="11" fill="black"></circle>
              </mask>
              <circle
                id="sun"
                cx="12"
                cy="12"
                r="11"
                mask="url(#moon)"
              ></circle>
              <g id="sun-beams">
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </g>
            </svg>
          </button>
        </header>
        <AddTask addTask={handleAddTask} />

        <div className="tasks-container">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  role="list"
                  className="todo-list stack-large stack-exception"
                  aria-labelledby="list-heading"
                >
                  {taskList}

                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <div className="task-controllers">
            <div className="status">{status}</div>
            <FilterButtons
              mobile={false}
              filter={filter}
              setFilter={setFilter}
            />
            <button id="clear" onClick={() => handleClearCompleted()}>
              Clear Completed
            </button>
          </div>
        </div>
        <FilterButtons mobile={true} filter={filter} setFilter={setFilter} />
        <div className="note">Drag and drop to reorder list</div>
      </div>
    </div>
  );
}
