import { SAMPLE } from "./ActionType";
const initialState = {
  post: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE.post:
      return {
        ...state,
        post: action.payload,
      };
    default:
      break;
  }
  return state;
};
