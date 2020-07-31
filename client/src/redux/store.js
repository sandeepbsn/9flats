import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import registerReducer from "../redux/reducers/registerReducer";
import profileReducer from "../redux/reducers/profileReducer";
import loginReducer from "../redux/reducers/loginReducer";
import queryReducer from "../redux/reducers/queryReducer";

const rootReducer = combineReducers({ registerReducer,loginReducer, queryReducer });

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;