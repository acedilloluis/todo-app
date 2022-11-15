import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const DEFAULT_TODOS = [
  { id: 0, task: 'Complete onine JavaScript course', completed: true },
  { id: 1, task: 'Jog around the park 3x', completed: false },
  { id: 2, task: '10 minute meditation', completed: false },
  { id: 3, task: 'Read for 1 hour', completed: false },
  { id: 4, task: 'Pick up groceries', completed: false },
  { id: 5, task: 'Complete Todo App on Frontend Mentor', completed: false },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App defaultTodos={DEFAULT_TODOS} />);
