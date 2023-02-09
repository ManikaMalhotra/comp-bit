import { useState } from 'react';
const useSort = (data, config) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const setSortColumn = label => {
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // TODO:
  //     1. Only sort data if sortOrder && sortBy are not null.
  //     2. Make a copy of the data prop so that we're not changing actual data. And then safely sort new data.
  //     3. Find the relevant sortValue function and use it to sort the array of objects.

  let sortedData = data;
  if (sortOrder && sortBy) {
    const {
      sortValue
    } = config.find(column => column.label === sortBy);

    // Sorting logic begins
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const order = sortOrder === 'asc' ? 1 : -1; // 1 for asc, -1 for desc

      if (typeof valueA === 'string') {
        return valueA.localeCompare(b) * order;
      } else {
        return (valueA - valueB) * order;
      }
    });
    // Sorting logic ends
  }

  return {
    sortOrder: sortOrder,
    sortBy: sortBy,
    sortedData: sortedData,
    setSortColumn: setSortColumn
  };
};
export default useSort;