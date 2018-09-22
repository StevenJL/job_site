import React from "react";
import { Link } from "react-router-dom";
import Job from "./job";
import ApplicantNames from "./applicant_names";

class JobsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appliedJobs: this.props.currentUser.appliedJobs
    };
    this.updateJobIndexState = this.updateJobIndexState.bind(this);
  }

  componentDidMount() {
    this.props.fetchJobs(this.props.currentUser.id);
  }

  updateJobIndexState(jobId) {
    const newArr = this.state.appliedJobs.concat([jobId]);
    this.setState({ appliedJobs: newArr });
  }

  render() {
    let openJobs = [];
    if (this.props.currentUser.appliedJobs) {
      const jobs = this.props.currentUser.appliedJobs.map(jobId => {
        return this.props.jobs[jobId];
      });
    }

    if (!this.props.jobs) {
      return <div>There are no jobs.</div>;
    }
    return (
      <div>
        <h1>Jobs</h1>
        {this.props.currentUser.employer ? (
          <Link to="/add_job">
            <button>+ Post Job</button>
          </Link>
        ) : null}
        <ul>
          {this.props.jobs.map(job => {
            return this.props.currentUser.appliedJobs ? (
              this.state.appliedJobs.includes(job.id) ? null : (
                <li>
                  <Job
                    updateJobIndexState={this.updateJobIndexState}
                    createApplication={this.props.createApplication}
                    currentUser={this.props.currentUser}
                    job={job}
                  />
                  _________________
                </li>
              )
            ) : (
              <li>
                <Job
                  updateJobIndexState={this.updateJobIndexState}
                  createApplication={this.props.createApplication}
                  currentUser={this.props.currentUser}
                  job={job}
                />
                <ApplicantNames names={job.applicantNames} />
                _________________
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default JobsIndex;
