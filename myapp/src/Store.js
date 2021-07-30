import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({});

export const store = createStore(
    rootReducer, window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
)

