import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = user => {
  return dispatch =>
    SessionAPIUtil.signup(user).then(
      serverUser => dispatch(receiveCurrentUser(serverUser)),
      err => dispatch(receiveSessionErrors(err.responseJSON))
    );
};

export const login = user => dispatch =>
  SessionAPIUtil.login(user).then(
    serverUser => dispatch(receiveCurrentUser(serverUser)),
    err => {
      dispatch(receiveSessionErrors(err.responseJSON));
    }
  );

export const logout = () => dispatch =>
  SessionAPIUtil.logout().then(res => dispatch(receiveCurrentUser(null)));
