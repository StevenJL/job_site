import React from "react";
import JobsIndexContainer from "./jobs_index_container";

class Account extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div>
        Hello, {this.props.currentUser.firstName}!
        <br />
        <br />
        <button onClick={e => this.handleSubmit(e)}>Sign out</button>
        <JobsIndexContainer />
      </div>
    );
  }
}
export default Account;
