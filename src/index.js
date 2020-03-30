import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./Components/AppComponent/App";

import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch } = store;
const { PLUS, MINUS } = bindActionCreators(actions, dispatch);

const updateCounter = () => {
  document.querySelector(".counter").innerHTML = store.getState();
};

store.subscribe(updateCounter);

ReactDOM.render(<App />, document.getElementById("root"));
