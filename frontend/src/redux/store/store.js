// store.js
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'; // Create a reducers.js file later

const store = createStore(rootReducer);

export default store;
