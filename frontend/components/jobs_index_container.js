import React from "react";
import { connect } from "react-redux";
import JobsIndex from "./jobs_index";
import { fetchJobs } from "../actions/job_actions";
import { createApplication } from "../actions/application_actions";

const mapStateToProps = state => {
  return {
    jobs: Object.values(state.entities.jobs),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchJobs: userId => dispatch(fetchJobs(userId)),
  createApplication: jobId => dispatch(createApplication(jobId))
});

export default connect(mapStateToProps, mapDispatchToProps)(JobsIndex);
