import React from 'react';
import FilterButton from './FilterButton';
import { FILTER_NAMES } from '../utils';

export default function FilterButtons({ mobile, filter, setFilter }) {
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className={mobile ? 'mobile-filters-buttons' : 'filters-buttons'}>
      {filterList}
    </div>
  );
}
