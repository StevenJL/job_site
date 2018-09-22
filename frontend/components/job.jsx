import React from "react";

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createApplication(this.props.job.id)
      .then(res => this.props.updateJobIndexState(res.application.jobId));
  }

  render() {
    return (
      <div>
        <h2>Position: {this.props.job.title}</h2>
        {this.props.currentUser.employer ? null : (
          <span>
            <span>Employer: {this.props.job.employerFirstName} </span>
            <span>{this.props.job.employerLastName}</span>
            <br />
          </span>
        )}
        <p>
          <b>Job Description:</b> {this.props.job.description}
        </p>
        {this.props.currentUser.employer ? null : (
          <button onClick={e => this.handleSubmit(e)}>Apply</button>
        )}
      </div>
    );
  }
}

export default Job;
