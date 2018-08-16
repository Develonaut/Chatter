import { createSelector } from 'reselect'

export const REMAINING = 'REMAINING';
export const COMPLETED = 'COMPLETED';
export const ARCHIVED = 'ARCHIVED';

// Selectors
const listTypeSelector = state => state.ui["list-type"];

export const getSelectedListType = createSelector(
  listTypeSelector,
  type => type,
);

// Actions
export const SELECT_LIST_TYPE = 'SELECT_LIST_TYPE';

export function selectListType(listType) {
  return { type: SELECT_LIST_TYPE, listType }
}

const initState = {
  "list-type": REMAINING,
};
export default function UIModule(state = initState, action) {
    switch (action.type) {
      case SELECT_LIST_TYPE:
        return {
          ...state,
          "list-type": action.listType,
        }
      default:
        return state
    }
  }