import { combineReducers } from 'redux'
import ui from 'modules/UIModule';
import items from 'modules/ItemsModule';

const reducers = combineReducers({
    ui,
    items,
})

export default reducers