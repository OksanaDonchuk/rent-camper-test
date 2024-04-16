import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'store/selectors';
import { filter } from 'store/filterSlise';

export const Filter = () => {
  const dispatch = useDispatch();
  const searchFilter = useSelector(selectFilter);

  const onChangeFilter = event => {
    dispatch(filter(event.target.value));
  };

  return (
    <div className={css.search_container}>
      <input
        className={css.search_input}
        type="search"
        value={searchFilter ?? ''}
        onChange={onChangeFilter}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default Filter;
