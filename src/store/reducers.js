import { combineReducers } from 'redux'
<<<<<<< HEAD
import auth from 'modules/AuthModule';
import messages from 'modules/MessagesModule';
=======
import auth from '../modules/AuthModule';
import messages from '../modules/MessagesModule';
>>>>>>> 553820f409f39a2b1edb7c264ca62e6219fd64e4

const reducers = combineReducers({
    auth,
    messages,
<<<<<<< HEAD
});
=======
})
>>>>>>> 553820f409f39a2b1edb7c264ca62e6219fd64e4

export default reducers