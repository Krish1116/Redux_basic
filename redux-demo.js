// this is for we need to import the redux in our file
const redux = require("redux");

// this is the reducre function
const counterReducer1 = (state = { counter: 0 }, action) => {
  if (action.type === "increment")
    return {
      counter: state.counter + 2,
    };
  if (action.type === "decrement")
    return {
      counter: state.counter - 2,
    };
  return state;
};

// store needs to know which reducer is responsible for changing that store bcz reducer which is works togather with the store
const store = redux.createStore(counterReducer1);
console.log("initial state - ", store.getState());

const counterSubscriber = () => {
  //getState is a method which is available on store created with create store it will give us latest snapshot after it was updated
  const latestState = store.getState();
  console.log(latestState);
};
// subscribe to the store
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
