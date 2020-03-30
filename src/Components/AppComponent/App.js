import React from "react";
import "./App.css";

const App = ({ counter, PLUS, MINUS, MULTIPLE }) => {
  return (
    <div class="container">
      <h1 class="counter">{counter}</h1>
      <button class="btn btn-success plus" onClick={PLUS}>
        +
      </button>
      <button class="btn btn-success minus" onClick={MINUS}>
        -
      </button>
      <button class="btn btn-success minus" onClick={MULTIPLE}>
        *
      </button>
    </div>
  );
};
export default App;
