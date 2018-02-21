import React, { Component } from "react";
import PostCounter from "./PostCounter";
import PostImage from './PostImage';
import PostInfo from './PostInfo';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="grid-item">
        <PostCounter score={post.score} />
        <PostImage />
        <PostInfo info={post} />
      </div>
    );
  }
}

export default Post;
