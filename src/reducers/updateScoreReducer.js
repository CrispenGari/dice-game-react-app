import constants from "../utils";

const updateScoreReducer = (state = [], action) => {
  switch (action.type) {
    case constants.UPDATE_SCORE:
      return state.push(action.value);
    default:
      return state;
  }
};

export default updateScoreReducer;
