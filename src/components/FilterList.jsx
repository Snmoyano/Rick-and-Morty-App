import React from "react";
import "./styles/filterList.css";

const FilterList = ({ suggestedList, setSearchInput }) => {
  const handleClick = (id) => {
    setSearchInput(id);
  };

  return (
    <ul className="filterList">
      {suggestedList?.map((location) => (
        <li
          onClick={() => handleClick(location.id)}
          key={location.id}
          className="container__list"
        >
          {location.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
