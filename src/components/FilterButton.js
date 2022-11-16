import React from 'react';
import PropTypes from 'prop-types';

function FilterButton({ name, setFilter }) {
  return (
    <label>
      <input
        type="radio"
        name="filters"
        value={name}
        onClick={() => setFilter(name)}
      />
      <p>{name}</p>
    </label>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string,
  setFilter: PropTypes.func,
};

export default FilterButton;
