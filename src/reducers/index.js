import { combineReducers } from "redux";
import tasks from './tasks';
import isDisplayForm from "./isDisplayForm";
import itemEditting from "./itemEditting";
import search from "./search";
import sort from "./sort";
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditting,
    search,
    sort
})
export default myReducer;