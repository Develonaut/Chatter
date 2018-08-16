import { createSelector } from 'reselect';
import { getSelectedListType, REMAINING, COMPLETED, ARCHIVED } from 'modules/UIModule';

// Selectors
const itemsSelector = state => state.items;

export const getRemainingItems = createSelector(
  itemsSelector,
  items => items.filter(item => !item.completed && !item.archived)
);

export const getArchivedItems = createSelector(
  itemsSelector,
  items => items.filter(item => item.archived)
);

export const getCompletedItems = createSelector(
  itemsSelector,
  items => items.filter(item => item.completed && !item.archived)
);

export const getItems = createSelector(
  getRemainingItems,
  getCompletedItems,
  getArchivedItems,
  getSelectedListType,
  (remainingItems, completedItems, archivedItems, type) => {
    let items = [];
    switch (type) {
      case REMAINING:
        items = remainingItems
        break;
      case COMPLETED:
        items = completedItems;
        break;
      case ARCHIVED:
        items = archivedItems;
        break;
      default:
        break;
    }
    return items;
  }
)

export const getItemCounts = createSelector(
  itemsSelector,
  (items) => {
    let counts = {};
    [REMAINING, COMPLETED, ARCHIVED].map(type => {
      let count = 0;
      switch (type) {
        case REMAINING:
          count = getRemainingItems({ items }).length;
          break;
        case COMPLETED:
          count = getCompletedItems({ items }).length;
          break;
        case ARCHIVED:
          count = getArchivedItems({ items }).length;
          break;
        default:
          break;
      }

      return counts = {
        ...counts,
        [type]: count,
      };
    });

    return counts;
  }
);

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