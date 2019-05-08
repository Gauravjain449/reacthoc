import { combineReducers } from "redux";
import BookReducer from './reducer_books';
import ActiveBookReducer from './reducer_bookdetails';


const rootReducer = combineReducers({
    Books: BookReducer,
    ActiveBook: ActiveBookReducer
});

export default rootReducer;