import * as JobsAPIUtil from "../util/jobs_api_util";

export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const RECEIVE_JOB = "RECEIVE_JOB";
export const RECEIVE_JOB_ERRORS = "RECEIVE_JOB_ERRORS";
export const CLEAR_JOB_ERRORS = "CLEAR_JOB_ERRORS";

export const receiveJobs = jobs => ({
  type: RECEIVE_JOBS,
  jobs
});

export const receiveJob = job => ({
  type: RECEIVE_JOB,
  job
});

export const receiveJobErrors = errors => ({
  type: RECEIVE_JOB_ERRORS,
  errors
});

export const clearJobErrors = () => ({
  type: CLEAR_JOB_ERRORS
});

// thunk action creators
export const createJob = (userId, data) => dispatch => {
  return JobsAPIUtil.createJob(userId, data).then(
    serverJob => dispatch(receiveJob(serverJob)),
    err => dispatch(receiveJobErrors(err.responseJSON))
  );
};

export const fetchJobs = userId => dispatch => {
  return JobsAPIUtil.fetchJobs(userId).then(serverJobs =>
    dispatch(receiveJobs(serverJobs))
  );
};

export const fetchJob = id => dispatch => {
  return JobsAPIUtil.fetchJob(id).then(serverJob =>
    dispatch(receiveJob(serverJob))
  );
};
