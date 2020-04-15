import React from 'react';
import './App.css';
import PostList from './PostList';
import { MovieProvider } from './MovieContext'
import PostListTest from './PostListTest';
import Shishir from './Shishir'


function App() {
  return (
    <MovieProvider>
      <div className="App">
        <PostList />
        <PostListTest />
        <Shishir />
      </div>
    </MovieProvider>
  );
}

export default App;
