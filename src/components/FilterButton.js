import React from 'react';
import PropTypes from 'prop-types';

function FilterButton({ name, setFilter }) {
  return (
    <label
      onClick={() => setFilter(name)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') setFilter(name);
      }}
    >
      <input type="radio" name="filters" value={name} />
      <p tabIndex="0">{name}</p>
    </label>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string,
  setFilter: PropTypes.func,
};

export default FilterButton;
