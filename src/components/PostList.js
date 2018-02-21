import React, { Component } from 'react';
import Post from './post/Post';

class PostList extends Component {
    render() { 
        return (<div>{this.props.posts.map((post) => {
            return <Post key={post.data.id} post={post.data} />
        })}</div>)
    }
}
 
export default PostList;