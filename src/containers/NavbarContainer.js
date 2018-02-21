import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHotPosts, fetchNewPosts, fetchTopPosts } from "../actions/posts";

class NavbarContainer extends Component {
  // Hacky way to add active class to selected button
  addActiveClass(target) {
    const head_btn = document.getElementsByClassName("head_btn");

    // Before adding active to button style
    // removes all active classes from all head_btn elements.
    // In ideal situation first check if element has active class
    // then remove class from that element.

    for (var i = 0; i < head_btn.length; i++) {
      head_btn[i].classList.remove("active");
    }
    // Adds active to active button
    target.classList.add("active");
  }

  fetchPosts(e, action) {
    this.props.dispatch(action);
    this.addActiveClass(e.target);
  }

  render() {
    return (
      <header>
        <div className="head_title">
          <h1>
            <span className="pointer">/r/reactjs</span>
          </h1>
        </div>
        <div className="hot">
          <a
            onClick={e => {
              this.fetchPosts(e, this.props.fetchHotPosts());
            }}
            className="head_btn active"
          >
            <i className="fas fa-fire mr" /> HOT
          </a>
        </div>
        <div className="new">
          <a
            onClick={e => {
              this.fetchPosts(e, this.props.fetchNewPosts());
            }}
            className="head_btn"
          >
            <i className="fas fa-retweet mr" /> NEW
          </a>
        </div>
        <div className="top">
          <a
            onClick={e => {
              this.fetchPosts(e, this.props.fetchTopPosts());
            }}
            className="head_btn"
          >
            <i className="fas fa-star mr" /> TOP
          </a>
        </div>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchHotPosts,
    fetchNewPosts,
    fetchTopPosts
  };
}

export default connect(null, mapDispatchToProps)(NavbarContainer);
