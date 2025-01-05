import { createStore } from 'redux';
import counterReducer from '../reducers/counterReducer';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('counterState', serializedState);
  } catch (err) {
    console.log(err);
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

