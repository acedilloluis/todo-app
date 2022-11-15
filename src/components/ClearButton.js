import React from 'react';
import PropTypes from 'prop-types';

function ClearButton({ clearCompleted }) {
  return (
    <button type="button" onClick={() => clearCompleted()}>
      Clear Completed
    </button>
  );
}

ClearButton.propTypes = {
  clearCompleted: PropTypes.func,
};

export default ClearButton;
