import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
