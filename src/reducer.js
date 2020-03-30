const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    case "MULTI":
      return state * action.payload;
    default:
      return state;
  }
};
export default reducer;
