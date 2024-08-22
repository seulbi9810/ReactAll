import { combineReducers } from "redux";
import numberReducer from "./number";
import accountReducer from "./account";


const rootReducer= combineReducers({numberReducer, accountReducer })

export default rootReducer