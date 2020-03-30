import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch } = store;
const { PLUS, MINUS } = bindActionCreators(actions, dispatch);

document.querySelector(".plus").addEventListener("click", PLUS);
document.querySelector(".minus").addEventListener("click", MINUS);

const updateCounter = () => {
  document.querySelector(".counter").innerHTML = store.getState();
};

store.subscribe(updateCounter);
