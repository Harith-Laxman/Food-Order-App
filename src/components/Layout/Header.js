import React from "react";
import classes from "./Header.module.css";
import mealspic from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealspic} alt="Meals pic"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
