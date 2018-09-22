import {
  RECEIVE_JOB,
  RECEIVE_JOB_ERRORS,
  CLEAR_JOB_ERRORS
} from "../actions/job_actions";

const jobErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_JOB:
      return newState;
    case RECEIVE_JOB_ERRORS:
      return action.errors;
    case CLEAR_JOB_ERRORS:
      return newState;
    default:
      return state;
  }
};

export default jobErrorsReducer;
