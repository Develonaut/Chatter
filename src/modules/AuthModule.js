import { createSelector } from 'reselect';

// Selectors
const authedUserSelector = state => state.auth

export const getAuthedUserSelector = createSelector(
  authedUserSelector,
  authedUser => authedUser,
);

// Actions
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function signIn(user) {
  return { type: SIGN_IN, user }
}

export function signOut() {
  return { type: SIGN_OUT }
}

export default function AuthModule(state = {}, action) {
    switch (action.type) {
      case SIGN_IN:
        return {
          ...state,
          ...action.user,
        }
      case SIGN_OUT:
        return {}
      default:
        return state
    }
  }