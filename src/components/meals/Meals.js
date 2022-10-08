import React from "react";
import AvailableMeals from "./AvailableMeals";
import Mealssummary from "./Mealssummary";

const Meals = () => {
  return (
    <React.Fragment>
      <Mealssummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
