import React from "react";
import { connect } from "react-redux";
import WelcomePage from "./welcome_page";
import { logout } from "../actions/session_actions";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
