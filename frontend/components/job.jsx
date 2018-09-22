import React from "react";

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    const { job, updateJobIndexState, createApplication } = this.props;
    e.preventDefault();
    createApplication(job.id).then(res =>
      updateJobIndexState(res.application.jobId)
    );
  }

  render() {
    const { job, currentUser } = this.props;
    return (
      <div>
        <h2>Position: {job.title}</h2>
        {currentUser.employer ? null : (
          <span>
            <span>Employer: {job.employerFirstName} </span>
            <span>{job.employerLastName}</span>
            <br />
          </span>
        )}
        <p>
          <b>Job Description:</b> {job.description}
        </p>
        {currentUser.employer ? null : (
          <button onClick={e => this.handleSubmit(e)}>Apply</button>
        )}
      </div>
    );
  }
}

export default Job;
