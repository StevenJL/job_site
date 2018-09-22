import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      admin: false
    };
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  componentDidUpdate(prevProps) {
    if (this.props.formType !== prevProps.formType) {
      this.setState(
        {
          email: "",
          password: "",
          admin: false,
          first_name: "",
          last_name: ""
        },
        () => {
          this.props.clearSessionErrors();
        }
      );
    }
  }

  updateField(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({ user }).then(response =>
      this.setState({
        email: "",
        password: "",
        admin: false,
        first_name: "",
        last_name: ""
      })
    );
  }

  render() {
    const currentForm = this.props.formType;
    const { userType } = this.props;

    let pageTitle =
      userType == "applicant" ? "Applicant Portal" : "Employer Portal";
    let formTitle;
    let toOtherForm1;
    let toOtherForm2;
    let otherPath;

    let toOtherPortal1;
    let toOtherPortal2;
    let otherPortalPath;
    if (userType == "applicant") {
      otherPortalPath = "/signup/admin";
      toOtherPortal1 = "Are you looking to hire? ";
      toOtherPortal2 = "Visit our employer portal.";
    } else {
      otherPortalPath = "/signup";
      toOtherPortal1 = "Are you searching for a job? ";
      toOtherPortal2 = "Visit our applicant portal.";
    }

    switch (currentForm) {
      case "login":
        otherPath = "/signup";
        this.state.admin ? this.setState({ admin: false }) : null;
        break;
      case "login/admin":
        otherPath = "/signup/admin";
        !this.state.admin ? this.setState({ admin: true }) : null;
        break;
      case "signup":
        otherPath = "/login";
        this.state.admin ? this.setState({ admin: false }) : null;
        break;
      case "signup/admin":
        !this.state.admin ? this.setState({ admin: true }) : null;
        otherPath = "/login/admin";
      default:
        break;
    }

    if (currentForm.slice(0, 5) === "login") {
      formTitle = "Sign In";
      toOtherForm1 = "Don't have an account? ";
      toOtherForm2 = "Sign up now";
    } else {
      formTitle = "Sign Up";
      toOtherForm1 = "Already have an account? ";
      toOtherForm2 = "Sign in";
    }

    return (
      <div>
        <h1>{pageTitle}</h1>
        {toOtherPortal1}
        <Link to={otherPortalPath}>{toOtherPortal2}</Link>

        <form>
          <h2>{formTitle}</h2>

          <ul>
            {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>

          <label>
            Email
            <br />
            <input
              type="email"
              value={this.state.email}
              onChange={this.updateField("email")}
              autoFocus
            />
          </label>
          <br />

          {currentForm.slice(0, 6) === "signup" ? (
            <span>
              <label>
                First Name
                <br />
                <input
                  type="text"
                  value={this.state.first_name}
                  onChange={this.updateField("first_name")}
                />
              </label>
              <br />

              <label>
                Last Name
                <br />
                <input
                  type="text"
                  value={this.state.last_name}
                  onChange={this.updateField("last_name")}
                />
              </label>
              <br />
            </span>
          ) : null}

          <label>
            Password
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.updateField("password")}
            />
          </label>
          <br />

          <input
            type="submit"
            onClick={e => this.handleSubmit(e)}
            value={formTitle}
          />

          <div>
            {toOtherForm1}
            <Link to={otherPath}>{toOtherForm2}.</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
