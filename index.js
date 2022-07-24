const {createStore,combineReducers}=require('redux');

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADDUSER='ADDUSER'
const counterState = {
  count: 0,
};
const userState = {
  users: ['Amir'],
};
const incrementCounter = () => {
  return {
    type: INCREMENT,
    payload: 10,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
    payload:5,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};
const userCounter = (user) => {
  return {
    type: ADDUSER,
    payload:user,
  };
};

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
const userReducer = (state = userState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        users:[...state.users, action.payload],
      };
   
    default:
      return state;
  }
};
const rootReducer=combineReducers({
      countR:counterReducer,
      usersR:userReducer,
})

const store=createStore(rootReducer);

store.subscribe(()=>{
      console.log(store.getState());
})

// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())
// store.dispatch()
// store.dispatch(resetCounter())
store.dispatch(incrementCounter(),userCounter("Hossain"))
// store.dispatch(userCounter("JOWEL"))