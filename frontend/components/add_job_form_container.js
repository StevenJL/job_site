import React from "react";
import { connect } from "react-redux";
import AddJobForm from "./add_job_form";
import { createJob } from "../actions/job_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.jobs
  };
};

const mapDispatchToProps = dispatch => ({
  createJob: (userId, data) => dispatch(createJob(userId, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddJobForm);
