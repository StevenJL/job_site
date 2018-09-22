import React from "react";
import { connect } from "react-redux";
import WelcomePage from "./welcome_page";
import { logout } from "../actions/session_actions";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
