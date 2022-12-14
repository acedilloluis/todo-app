import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Todo({
  id,
  task,
  completed,
  toggleTodoCompleted,
  deleteTodo,
  editTodo,
}) {
  const [editedTodo, setEditedTodo] = useState(task);
  const [isEditing, setIsEditing] = useState(false);
  const editFieldRef = useRef(null);
  const circleBtnRef = useRef(null);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const wasEditing = usePrevious(isEditing);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(id, editedTodo);
    setIsEditing(false);
  }

  useEffect(() => {
    if (!wasEditing && isEditing) {
      setTimeout(() => editFieldRef.current.focus(), 2); // if user opens editing field by keyboard need to make sure it doesn't submit immediately
    }
    if (wasEditing && !isEditing) {
      circleBtnRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`editing-${id}`} className="visually-hidden">
        Edit the todo
      </label>
      <input
        type="text"
        id={`editing-${id}`}
        name={`editing-${id}`}
        minLength="1"
        maxLength="50"
        value={editedTodo}
        ref={editFieldRef}
        onChange={(e) => setEditedTodo(e.target.value)}
      />
    </form>
  );

  const viewTemplate = (
    <>
      <label>
        <input
          type="checkbox"
          name={id}
          checked={completed}
          onChange={() => toggleTodoCompleted(id)}
        />
        <span
          className="circle"
          onKeyDown={(e) => {
            if (e.key === 'Enter') toggleTodoCompleted(id);
          }}
          ref={circleBtnRef}
          tabIndex={0}
        ></span>
        <p
          onClick={() => setIsEditing(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setIsEditing(true);
          }}
          tabIndex={0}
        >
          {task}
        </p>
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
    </>
  );

  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}

Todo.propTypes = {
  id: PropTypes.string,
  task: PropTypes.string,
  completed: PropTypes.bool,
  toggleTodoCompleted: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
};

export default Todo;
