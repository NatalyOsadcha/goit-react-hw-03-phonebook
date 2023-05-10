import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={css.filterInput}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
