import React from "react";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amoutn: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.99</span>
      </div>
      <div className={classes.action}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};
