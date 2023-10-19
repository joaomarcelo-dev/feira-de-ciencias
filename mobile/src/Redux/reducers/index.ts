import { combineReducers } from "redux";
import appReducer from "./app.reducer";
import RootReducer from "../../types/RootReducer.type";

const rootReducer = combineReducers<RootReducer>({
  app: appReducer,
});

export default rootReducer;

