import { createSelector } from 'reselect';

// Selectors


// Actions
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const TOGGLE_ARCHIVE = 'TOGGLE_ARCHIVE';

export function addItem(id, name, text) {
  return { type: ADD_ITEM, id, name, text }
}

export function deleteItem(id) {
  return { type: DELETE_ITEM, id }
}

export function toggleComplete(id) {
  return { type: TOGGLE_COMPLETE, id }
}

export function toggleArchive(id) {
  return { type: TOGGLE_ARCHIVE, id }
}

const initState = [];
export default function ItemsModule(state = initState, action) {
    switch (action.type) {
      case ADD_ITEM:
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            text: action.text,
            completed: false,
            archived: false,
          }
        ]
      case DELETE_ITEM:
        return state.filter((item => action.id !== item.id));
      case TOGGLE_COMPLETE:
        return state.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              completed: !item.completed,
            }
          }
          return item
        })
      case TOGGLE_ARCHIVE:
        return state.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
            archived: !item.archived,
            }
          }
          return item
        })
      default:
        return state
    }
  }