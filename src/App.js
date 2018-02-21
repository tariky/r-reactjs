import React, { Component } from 'react';
import NavbarContainer from './containers/NavbarContainer';
import PostsContainer from './containers/PostsContainer';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <NavbarContainer />
        <PostsContainer />
      </div>
    );
  }
}



export default App;
