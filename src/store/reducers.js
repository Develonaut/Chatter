import { combineReducers } from 'redux'
import messages from '../modules/MessagesModule';

const reducers = combineReducers({
    messages,
})

export default reducers;