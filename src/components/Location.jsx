import React from "react";
import "./styles/locationBox.css";

const Location = ({ location }) => {
  return (
    <article className="location__box">
      <div className="box__container">
        <h2 className="location__tittle">{location?.name}</h2>
        <ul className="location__list">
          <li>
            <span>Type: </span>
            {location?.type}
          </li>
          <li>
            <span>Dimension: </span>
            {location?.dimension}
          </li>
          <li>
            <span>Population: </span>
            {location?.residents.length}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Location;
