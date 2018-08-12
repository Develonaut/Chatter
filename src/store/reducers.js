import { combineReducers } from 'redux'
import users from '../modules/UsersModule';
import messages from '../modules/MessagesModule';

const reducers = combineReducers({
    users,
    messages,
})

export default reducers;