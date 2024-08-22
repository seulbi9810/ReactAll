import { combineReducers } from "redux";
import itemsReducer from "./items";

const RootReducer= combineReducers({itemsReducer,})

export default RootReducer