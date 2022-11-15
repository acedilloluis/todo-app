import React from 'react';
import PropTypes from 'prop-types';

function FilterButton({ name, setFilter }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type="radio"
        id={name}
        name="filters"
        value={name}
        onClick={() => setFilter(name)}
      />
    </>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string,
  setFilter: PropTypes.func,
};

export default FilterButton;
