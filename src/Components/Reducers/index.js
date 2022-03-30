import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { psychologistReducer } from "./psychologistReducer";

const rootReducer = combineReducers({
  user: userReducer,
  psychologist: psychologistReducer,
});

export default rootReducer;
