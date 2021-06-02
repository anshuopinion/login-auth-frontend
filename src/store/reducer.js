export const initialState = {
  token: null,
};

export const actionTypes = {
  SET_TOKEN: "SET_TOKEN",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.value };

    default:
      return state;
  }
};

export default reducer;
