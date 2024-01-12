import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterStatus } from '../../redux/filterSlice';
import { nanoid } from 'nanoid';

const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const onFilterChange = event => {
    dispatch(setFilterStatus(event.target.value.toLowerCase()));
  };

  return (
    <label htmlFor={filterId}>
      Find contacts by name
      <input
        id={filterId}
        name="filterName"
        type="text"
        placeholder="Search contacts..."
        onChange={onFilterChange}
      />
    </label>
  );
};
export default Filter;
