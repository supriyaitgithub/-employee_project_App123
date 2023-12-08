import { combineReducers } from "redux";
import employeeReducer from "./EmployeeReducers";

const root = combineReducers({
    employee:employeeReducer
  });
const rootReducer = (state, action) => {
    return root(state, action);
  };
  
  export default rootReducer;