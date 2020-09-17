import {calcReducer} from "./reducers/calcReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    calc: calcReducer
})