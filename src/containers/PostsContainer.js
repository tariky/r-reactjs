import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHotPosts } from "../actions/posts";
import PostList from "../components/PostList";

class PostsContainer extends Component {
  componentDidMount() {
    const { dispatch, fetchHotPosts } = this.props;
    dispatch(fetchHotPosts());
  }
  render() {
    if (this.props.postList.isFetching) {
        return (
            <div className="spinner">
              <div className="dot1" />
              <div className="dot2" />
            </div>
          );
    }
    return <PostList posts={this.props.postList.posts} />;
  }
}

function mapStateToProps({ postList }) {
  return {
    postList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchHotPosts
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
