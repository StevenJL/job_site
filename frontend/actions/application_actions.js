import * as ApplicationsAPIUtil from "../util/applications_api_util";

export const RECEIVE_APPLICATIONS = "RECEIVE_APPLICATIONS";
export const RECEIVE_APPLICATION = "RECEIVE_APPLICATION";
export const RECEIVE_APPLICATION_ERRORS = "RECEIVE_APPLICATION_ERRORS";
export const CLEAR_APPLICATION_ERRORS = "CLEAR_APPLICATION_ERRORS";

export const receiveApplications = applications => ({
  type: RECEIVE_APPLICATIONS,
  applications
});

export const receiveApplication = application => ({
  type: RECEIVE_APPLICATION,
  application
});

export const receiveApplicationErrors = errors => ({
  type: RECEIVE_APPLICATION_ERRORS,
  errors
});

export const clearApplicationErrors = () => ({
  type: CLEAR_APPLICATION_ERRORS
});

// thunk action creators
export const createApplication = jobId => dispatch => {
  return ApplicationsAPIUtil.createApplication(jobId).then(
    serverApplication => dispatch(receiveApplication(serverApplication)),
    err => dispatch(receiveApplicationErrors(err.responseJSON))
  );
};

export const fetchApplications = userId => dispatch => {
  return ApplicationsAPIUtil.fetchApplications(userId).then(
    serverApplications => dispatch(receiveApplications(serverApplications))
  );
};

export const fetchApplication = id => dispatch => {
  return ApplicationsAPIUtil.fetchApplication(id).then(serverApplication =>
    dispatch(receiveApplication(serverApplication))
  );
};
