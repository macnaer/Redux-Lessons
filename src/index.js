import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./Components/AppComponent/App";

import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch } = store;
const { PLUS, MINUS, MULTIPLE } = bindActionCreators(actions, dispatch);

const updateCounter = () => {
  ReactDOM.render(
    <App
      counter={store.getState()}
      PLUS={PLUS}
      MINUS={MINUS}
      MULTIPLE={() => MULTIPLE(3)}
    />,
    document.getElementById("root")
  );
};

store.subscribe(updateCounter);
updateCounter();
