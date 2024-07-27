import React from "react";

const FilterItem = ({ title, selectedFilter, setSelectedFilter }) => {
  return (
    <button
      className={`filter-item ${selectedFilter === title && "active"}`}
      onClick={() => setSelectedFilter(title)}
    >
      {title}
    </button>
  );
};

export default FilterItem;
