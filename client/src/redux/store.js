import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import loginReducer from './reducers/loginReducer'
import registerReducer from './reducers/registerReducer'
import listingReducer from './reducers/listingReducer'
import entityReducer from './reducers/entityReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({login:loginReducer, register:registerReducer, listing:listingReducer, entity:entityReducer})

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunk
        )
    )
)

export default store;