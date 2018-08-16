import { createSelector } from 'reselect';

// Selectors
const eventsSelector = state => state.events

export const getEventsSelector = createSelector(
  eventsSelector,
  events => events,
);

// Actions
export const EVENTS_RECEIVED = 'EVENTS_RECEIVED';

export function storeEvents(events) {
  return { type: EVENTS_RECEIVED, events }
}

const initState = {
  CONNECTED: "socket:connected",
};

export default function EventsModule(state = initState, action) {
    switch (action.type) {
      case EVENTS_RECEIVED:
        return {
          ...state,
          ...action.events,
        }
      default:
        return state
    }
  }