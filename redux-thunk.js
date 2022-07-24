const { createStore,applyMiddleware} = require("redux");
const thunk=require("redux-thunk").default;
const axios=require("axios");

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILED = "FAILED";
const api='https://jsonplaceholder.typicode.com/posts'

const initialPost = {
  posts: [],
  isLoading: false,
  error: null,
};

const postRequest = () => {
  return {
    type: REQUEST,
  };
};
const postSuccess = (post) => {
  return {
    type: SUCCESS,
    payload: post,
  };
};
const postFailed = (error) => {
  return {
    type: FAILED,
    payload: error,
  };
};

const postReducer = (state = initialPost, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS:
      return {
        isLoading: false,
        posts: [...state.post, action.payload],
        error: null,
      };
    case FAILED:
      return {
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
const fetchData=()=>{
return(dispatch)=>{
    dispatch(postRequest());
    axios.get(api)
    .then(res=>{
        const posts=res.data;
        const post=posts.map((post)=>{
            console.log(post.body);
        })
    })
    .catch((error)=>{
        console.log(error.message)
    })
}
}


const store = createStore(postReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(fetchData())