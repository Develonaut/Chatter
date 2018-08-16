 // Actions
 export const ADD_MESSAGE = 'ADD_MESSAGE';
 export const DELETE_MESSAGE = 'DELETE_MESSAGE';

 export function addMessage(message) {
   return {
     type: ADD_MESSAGE,
     message
   }
 }

 export function deleteMessage(message) {
   return {
     type: DELETE_MESSAGE,
     message
   }
 }

 const initState = []
 export default function MessagesModule(state = initState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
        ...action.message,
        }
      ]
    case DELETE_MESSAGE:
      return state.filter((message => action.message.id === message.id));
    default:
      return state
  }
}
