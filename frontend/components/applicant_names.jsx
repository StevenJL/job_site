import React from "react";

const ApplicantNames = ({ names }) => {
  return (
    <div>
      {names ? (
        <div>
          <h3>Applicants:</h3>
          <ul>{names.map(name => <li>{name}</li>)}</ul>
        </div>
      ) : null}
    </div>
  );
};

export default ApplicantNames;
