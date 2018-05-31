import { combineReducers } from "redux";
import pageConfigReducer from "../pageConfig";
import refreshReducer from "../refresh";

export default combineReducers({
  pageConfig: pageConfigReducer,
  refresh: refreshReducer
});
