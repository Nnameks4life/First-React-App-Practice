import React from "react";

const List = () => {
  const FOODS = ["Rice", "Bean", "Yam", "Garri", "Egg", "plantian"];
  const STATE = ["Rice", "Bean", "Yam", "Garri", "Egg", "plantian"];

  return (
    <div>
      <div className="bg-warning col-6">
        <ul style={{ listStyleType: "none", fontSize: "20px" }}>
          {FOODS.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul style={{ listStyleType: "none", fontSize: "20px" }}>
          {STATE.map((state, index) => (
            <li key={index}>{state}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
