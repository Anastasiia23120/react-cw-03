import CSS from "./RadioButtons.module.css";
import React, { useState } from "react";

const RadioButtons = () => {
  const [coffeeSize, setCoffeeSize] = useState("sm");

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  return (
    <>
      <div>
        <h1>Select coffee size</h1>
        <label></label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        Small
        <label></label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
        />
        Medium
        <label></label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </div>
      <p>
        <b>Selected size: </b>
        {coffeeSize}
      </p>
    </>
  );
};

export default RadioButtons;
