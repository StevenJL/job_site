import { combineReducers } from "redux";
import jobsReducer from "./jobs_reducer";
import applicationsReducer from "./applications_reducer";

const entitiesReducer = combineReducers({
  jobs: jobsReducer,
  applications: applicationsReducer
});

export default entitiesReducer;
