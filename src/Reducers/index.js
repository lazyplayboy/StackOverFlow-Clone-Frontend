import { combineReducers } from "redux";
import authReducer from "./Auth";
import currentUserReducer from './CurrentUser'
import questionsReducer from './question'
import usersReducer from './Users'

export default combineReducers({
    authReducer,currentUserReducer,questionsReducer,usersReducer
})