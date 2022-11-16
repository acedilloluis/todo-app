import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import ClearButton from './components/ClearButton';
import desktopDarkBg from './images/bg-desktop-dark.jpg';
import mobileDarkBg from './images/bg-mobile-dark.jpg';
import sunIcon from './images/icon-sun.svg';

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};

function App({ defaultTodos }) {
  const [todos, setTodos] = useState(defaultTodos);
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
    <div id="wrapper">
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
    </div>
  );
}

App.propTypes = {
  defaultTodos: PropTypes.array,
};

export default App;
