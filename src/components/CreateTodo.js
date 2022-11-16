import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CreateTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <form id="create-todo" onSubmit={handleSubmit}>
      <label htmlFor="add-todo" className="visually-hidden">
        Enter a new todo
      </label>
      <input
        type="text"
        id="add-todo"
        name="add-todo"
        placeholder="Create a new todo"
        minLength="1"
        maxLength="50"
        className="box"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
}

CreateTodo.propTypes = {
  addTodo: PropTypes.func,
};

export default CreateTodo;
