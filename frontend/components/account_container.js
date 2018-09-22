import React from "react";
import { connect } from "react-redux";
import Account from "./account";
import { logout } from "../actions/session_actions";

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
