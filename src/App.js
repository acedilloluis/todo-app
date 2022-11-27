import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { nanoid } from 'nanoid';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import ClearButton from './components/ClearButton';
import desktopDarkBg from './images/bg-desktop-dark.jpg';
import mobileDarkBg from './images/bg-mobile-dark.jpg';
import sunIcon from './images/icon-sun.svg';
import './index.css';

const DEFAULT_TODOS = [
  { id: 'todo-0', task: 'Complete onine JavaScript course', completed: true },
  { id: 'todo-1', task: 'Jog around the park 3x', completed: false },
  { id: 'todo-2', task: '10 minute meditation', completed: false },
  { id: 'todo-3', task: 'Read for 1 hour', completed: false },
  { id: 'todo-4', task: 'Pick up groceries', completed: false },
  {
    id: 'todo-5',
    task: 'Complete Todo App on Frontend Mentor',
    completed: false,
  },
];

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODOS);
  const [filter, setFilter] = useState('All');

  function addTodo(task) {
    const newTodo = { id: `todo-${nanoid()}`, task: task, completed: false };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    const remainingTodos = todos.filter((todo) => id !== todo.id);
    setTodos(remainingTodos);
  }

  function clearCompleted() {
    const remainingTodos = todos.filter((todo) => !todo.completed);
    setTodos(remainingTodos);
  }

  function toggleTodoCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const todoList = todos
    .filter(FILTER_MAP[filter])
    .map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodo={deleteTodo}
      />
    ));
  const filterBtns = Object.keys(FILTER_MAP).map((name) => (
    <FilterButton key={name} name={name} setFilter={setFilter} />
  ));

  const todosCounter = `${todoList.length} ${
    todoList.length === 1 ? 'item' : 'items'
  } remaining`;

  return (
    <>
      <picture>
        <source
          srcSet={desktopDarkBg}
          type="image/jpeg"
          media="(min-width: 375px)"
        />
        <img src={mobileDarkBg} alt="" className="responsive-img" />
      </picture>

      <main>
        <header>
          <h1>TODO</h1>
          <img src={sunIcon} alt="icon of the sun" />
        </header>

        <CreateTodo addTodo={addTodo} />

        <ul id="todo-list" className="box">
          {todoList}
          <li>
            <p>{todosCounter}</p>
            <ClearButton clearCompleted={clearCompleted} />
          </li>
        </ul>

        <form id="filter-btns" className="box">
          {filterBtns}
        </form>

        <footer>Drag and drop to reorder list</footer>
      </main>
    </>
  );
}

const root = document.querySelector('#root');
createRoot(root).render(<App />);
