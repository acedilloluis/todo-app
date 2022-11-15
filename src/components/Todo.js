import React from 'react';
import PropTypes from 'prop-types';
import cross from '../images/icon-cross.svg';

function Todo({ id, task, completed, toggleTodoCompleted, deleteTodo }) {
  return (
    <li>
      <label htmlFor="completed-btn" className="visually-hidden">
        Toggle todo as completed
      </label>
      <input
        type="checkbox"
        id="completed-btn"
        name={id}
        value={completed}
        className="circle"
        onClick={() => toggleTodoCompleted(id)}
      />
      <div>{task}</div>
      <img src={cross} alt="icon of cross" onClick={() => deleteTodo(id)} />
    </li>
  );
}

Todo.propTypes = {
  id: PropTypes.string,
  task: PropTypes.string,
  completed: PropTypes.bool,
  toggleTodoCompleted: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default Todo;
