import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = () => {
    setcartIsShown(true);
  };

  const hideCartHandler = () => {
    setcartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
