import sessionErrorsReducer from "./session_errors_reducer";
import jobErrorsReducer from "./job_errors_reducer";
import applicationErrorsReducer from "./application_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  jobs: jobErrorsReducer,
  applications: applicationErrorsReducer
});

export default errorsReducer;
