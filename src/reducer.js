import { REGISTER_SUCCESS, REGISTER_FAIL, REGISTER } from "./actions";

const initialState = { register: {}, registerResult: "" };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return state;
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: action.register,
        registerResult: action.result
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerResult: action.result
      };
    default:
      return state;
  }
};

export default reducer;
