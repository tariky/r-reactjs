import { 
  REQUEST_NEW_POSTS, 
  SUCCESS_NEW_POSTS,
  REQUEST_HOT_POSTS,
  SUCCESS_HOT_POSTS,
  REQUEST_TOP_POSTS,
  SUCCESS_TOP_POSTS,
} from "../actions/types";

const initState = { isFetching: true, posts: [] };

export default function(state = initState, action) {
  switch (action.type) {
    case REQUEST_NEW_POSTS:
      return { ...state, isFetching: true, posts: [] };
    case SUCCESS_NEW_POSTS:
      return { ...state, isFetching: false, posts: action.payload };
    case REQUEST_HOT_POSTS:
      return { ...state, isFetching: true, posts: [] };
    case SUCCESS_HOT_POSTS:
      return { ...state, isFetching: false, posts: action.payload };
    case REQUEST_TOP_POSTS:
      return { ...state, isFetching: true, posts: [] };
    case SUCCESS_TOP_POSTS:
      return { ...state, isFetching: false, posts: action.payload };
    default:
      return state;
  }
}
