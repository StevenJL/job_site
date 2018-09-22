import {
  RECEIVE_APPLICATION,
  RECEIVE_APPLICATIONS
} from "../actions/application_actions";
import merge from "lodash/merge";

const jobsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_APPLICATIONS:
      return action.applications;
    case RECEIVE_APPLICATION:
      return merge({}, state, { [action.application.id]: action.application });
    default:
      return state;
  }
};

export default jobsReducer;
