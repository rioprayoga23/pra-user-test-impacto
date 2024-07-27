import React from "react";
import { CATEGORIES } from "../../constants";
import FilterItem from "./FilterItem";

const Filter = ({ seelctedFilter, setSelectedFilter }) => {
  return (
    <div className="filter">
      {CATEGORIES.map((category) => (
        <FilterItem
          title={category}
          selectedFilter={seelctedFilter}
          setSelectedFilter={setSelectedFilter}
          key={category}
        />
      ))}
    </div>
  );
};

export default Filter;
