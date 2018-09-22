import { RECEIVE_JOB, RECEIVE_JOBS } from "../actions/job_actions";
import merge from "lodash/merge";

const jobsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_JOBS:
      return action.jobs;
    case RECEIVE_JOB:
      return merge({}, state, { [action.job.id]: action.job });
    default:
      return state;
  }
};

export default jobsReducer;
