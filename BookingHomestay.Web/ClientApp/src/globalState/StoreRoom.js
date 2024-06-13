// store.js
import { createStore } from 'state-pool';

// Initialize the store
const store = createStore();

// Define initial state
const initialState = {
  count: 0,
  latitude: 0,
  longitude: 0,
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString()
};

// Create a shared state within the store
store.setState("latitude", initialState.latitude);
store.setState("longitude", initialState.longitude);
store.setState("count", initialState.count);
store.setState("startDate", initialState.startDate);
store.setState("endDate", initialState.endDate);

export default store;
