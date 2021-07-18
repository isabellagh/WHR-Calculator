import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducers/usersReducer'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myClients from './reducers/myClients'
import signupForm from './reducers/signupForm'
import trainerReducer from './reducers/trainerReducer'
// import newClientForm from './reducers/newClientForm'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    // users: usersReducer,
    currentUser,
    loginForm,
    myClients,
    signupForm,
    trainerReducer,
    // newClientForm,
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

  export default store