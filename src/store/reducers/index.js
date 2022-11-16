import { combineReducers } from "redux";

import studentsReducer from "./StudentReducer";

const rootReducer = combineReducers({
  students: studentsReducer,
});

export default rootReducer;
