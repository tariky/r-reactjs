import {
  REQUEST_HOT_POSTS,
  SUCCESS_HOT_POSTS,
  REQUEST_NEW_POSTS,
  SUCCESS_NEW_POSTS,
  REQUEST_TOP_POSTS,
  SUCCESS_TOP_POSTS
} from "./types";
import axios from 'axios';

//
// HOT POSTS ACTIONS
//

function requestHotPosts() {
  return { type: REQUEST_HOT_POSTS };
}

function successHotPosts(posts) {
  return {
    type: SUCCESS_HOT_POSTS,
    payload: posts
  };
}

export function fetchHotPosts() {
  return function(dispatch) {
    dispatch(requestHotPosts());

    axios.get("https://www.reddit.com/r/reactjs.json").then(response => {
      dispatch(successHotPosts(response.data.data.children));
    });
  };
}

//
// NEW POSTS ACTIONS
//

function requestNewPosts() {
  return { type: REQUEST_NEW_POSTS };
}

function successNewPosts(posts) {
  return {
    type: SUCCESS_NEW_POSTS,
    payload: posts
  };
}

export function fetchNewPosts() {
  return function(dispatch) {
    dispatch(requestNewPosts());

    axios.get("https://www.reddit.com/r/reactjs/new.json").then(response => {
      dispatch(successNewPosts(response.data.data.children));
    });
  };
}

//
// TOP POSTS ACTIONS
//

function requestTopPosts() {
  return { type: REQUEST_TOP_POSTS };
}

function successTopPosts(posts) {
  return {
    type: SUCCESS_TOP_POSTS,
    payload: posts
  };
}

export function fetchTopPosts() {
  return function(dispatch) {
    dispatch(requestTopPosts());

    axios.get("https://www.reddit.com/r/reactjs/top.json").then(response => {
      dispatch(successTopPosts(response.data.data.children));
    });
  };
}