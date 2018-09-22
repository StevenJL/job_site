import React from "react";

class AddJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const job = Object.assign({}, this.state);
    this.props
      .createJob(this.props.currentUser.id, { job })
      .then(response => this.setState({ title: "", description: "" }));
  }

  updateField(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <form>
          <label>
            Title
            <br />
            <input
              type="text"
              value={this.state.title}
              onChange={this.updateField("title")}
            />
          </label>
          <br />
          <br />
          <label>
            Description
            <br />
            <textarea
              value={this.state.description}
              onChange={this.updateField("description")}
            />
          </label>

          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={e => this.handleSubmit(e)}
          />
        </form>
      </div>
    );
  }
}

export default AddJobForm;
