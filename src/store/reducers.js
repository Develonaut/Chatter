import { combineReducers } from 'redux'
import auth from 'modules/AuthModule';
import events from 'modules/EventsModule';
import messages from 'modules/MessagesModule';

const reducers = combineReducers({
    auth,
    events,
    messages,
});

export default reducers