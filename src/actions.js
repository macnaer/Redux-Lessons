export const PLUS = () => {
  return {
    type: "PLUS"
  };
};

export const MINUS = () => {
  return {
    type: "MINUS"
  };
};

export const MULTIPLE = payload => {
  return {
    type: "MULTI",
    payload
  };
};
