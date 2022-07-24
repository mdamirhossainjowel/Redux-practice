const { createStore } = require("redux");

const ADDUSER = "ADDUSER";

const userState = {
  users: ["Amir"],
};

const userCounter = (user) => {
  return {
    type: ADDUSER,
    payload: user,
  };
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(userCounter("JOWEL"));
