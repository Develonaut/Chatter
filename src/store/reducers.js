import { combineReducers } from 'redux'
import auth from '../modules/AuthModule';
import messages from '../modules/MessagesModule';

const reducers = combineReducers({
    auth,
    messages,
})

export default reducers