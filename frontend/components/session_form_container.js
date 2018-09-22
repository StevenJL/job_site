import { connect } from "react-redux";
import { login, signup, clearSessionErrors } from "../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const errors = state.errors.session;

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const currentPath = ownProps.location.pathname;
  let admin = false;
  let action = login;
  if (currentPath.slice(-5) === "admin") {
    admin = true;
  }
  const userType = admin ? "employer" : "applicant";
  if (currentPath.slice(1, 7) === "signup") {
    action = signup;
  }

  return {
    processForm: user => dispatch(action(user)),
    admin,
    userType,
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
