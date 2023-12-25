import { useState } from 'react';

export default function SortBy({ sortBy, setSortBy }) {
  const handleChange = e => {
    setSortBy(e.target.value);
  }

  return (
    <div>
      <label htmlFor="sort-by">Sort by</label>
      <select
        name="sort-by"
        id="sort-by"
        value={sortBy}
        onChange={handleChange}
      >
        <option value="name">name</option>
        <option value="population">population</option>
        <option value="area">area</option>
      </select>
    </div>
  );
}