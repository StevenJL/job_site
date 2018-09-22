import React from "react";
import { Link, Redirect } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  title() {
    return <h1 className="site-name">Welcome to Job Site!</h1>;
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/account" />;
    } else {
      return (
        <div>
          <ul>
            <li>{this.title()}</li>
            <li>
              <Link to="/signup">Applicant Portal</Link>
            </li>
            <li>
              <Link to="/signup/admin">Employer Portal</Link>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default Greeting;
