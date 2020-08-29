import React from 'react';
import PostForm from './components/PostForm'
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm/>
        </div>
      </div>  
      <div className="row pt-3">
        <div className="col">
          <div className="wrap p-3 border border-warning rounded">
            <h2>Sync Posts</h2>
            <Posts/>
          </div>
        </div>
        <div className="col ml-3">
          <div className="wrapp p-3 border border-warning rounded">
            <h2>Async Posts</h2>
            <FetchedPosts/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
