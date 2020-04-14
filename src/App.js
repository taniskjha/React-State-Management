import React from 'react';
import './App.css';
import PostList from './PostList';
import { MovieProvider } from './MovieContext'
import PostListTest from './PostListTest';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <h1>React State Management</h1>
        <PostList />
        <PostListTest />
      </div>
    </MovieProvider>
  );
}

export default App;
