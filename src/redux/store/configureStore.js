import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducer/index'


const middleware = [
  thunkMiddleware
]
var store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
