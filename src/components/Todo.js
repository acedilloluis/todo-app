import React from 'react';
import PropTypes from 'prop-types';
import cross from '../images/icon-cross.svg';

function Todo({ id, task, completed, toggleTodoCompleted, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          name={id}
          value={completed}
          onClick={() => toggleTodoCompleted(id)}
        />
        <span className="circle"></span>
        <p>{task}</p>
      </label>
      <div onClick={() => deleteTodo(id)}>
        <img src={cross} alt="icon of cross" className="responsive-img" />
      </div>
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
