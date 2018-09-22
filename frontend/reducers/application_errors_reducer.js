import {
  RECEIVE_APPLICATION,
  RECEIVE_APPLICATION_ERRORS,
  CLEAR_APPLICATION_ERRORS
} from "../actions/application_actions";

const applicationErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_APPLICATION:
      return newState;
    case RECEIVE_APPLICATION_ERRORS:
      return action.errors;
    case CLEAR_APPLICATION_ERRORS:
      return newState;
    default:
      return state;
  }
};

export default applicationErrorsReducer;
