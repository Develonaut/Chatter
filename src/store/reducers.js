import { combineReducers } from 'redux'
import chat from '../modules/ChatModule';

const reducers = combineReducers({
    chat,
})

export default reducers;