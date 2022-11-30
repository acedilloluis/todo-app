import React from 'react';
import PropTypes from 'prop-types';

function Todo({ id, task, completed, toggleTodoCompleted, deleteTodo }) {
  // for checkboxes to be keyboard accessible need to move p out of label; so need to change checked styles with js
  return (
    <li>
      <label>
        <input
          type="checkbox"
          name={id}
          checked={completed}
          onClick={() => toggleTodoCompleted(id)}
        />
        <span className="circle"></span>
        <p>{task}</p>
      </label>

      <button type="button" title="Delete item" onClick={() => deleteTodo(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
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
