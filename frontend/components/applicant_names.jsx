import React from "react";

const ApplicantNames = props => {
  return (
    <div>
      {props.names ? (
        <div>
          <h3>Applicants:</h3>
          <ul>{props.names.map(name => <li>{name}</li>)}</ul>
        </div>
      ) : null}
    </div>
  );
};

export default ApplicantNames;
