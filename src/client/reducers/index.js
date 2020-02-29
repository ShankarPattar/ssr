import { combineReducers } from "redux";
import usersReduser from "./usersReducer";
import authReducer from "./authReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  users: usersReduser,
  auth: authReducer,
  admins: adminReducer
});
