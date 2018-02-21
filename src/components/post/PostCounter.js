import React, { Component } from 'react';

class PostCounter extends Component {
    render() { 
        return ( <div className="counter">
        <i className="fas fa-caret-square-up mr"></i> {this.props.score}
        <i className="fas fa-caret-square-down ml"></i>
    </div> )
    }
}
 
export default PostCounter;