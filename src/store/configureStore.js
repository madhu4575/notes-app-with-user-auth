import { createStore,combineReducers ,applyMiddleware} from 'redux'
import userReducer from '../reducers/userReducer'
import notesReducer from '../reducers/notesReducer'
import thunk from 'redux-thunk'


const configureStore = () => {
  const store = createStore(combineReducers({
    notes:notesReducer,
    user:userReducer
  }),applyMiddleware(thunk))
  return store
  }
  export default configureStore