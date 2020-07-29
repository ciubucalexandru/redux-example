import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PostList from './components/PostsList/PostsListSmart';

function App() {
  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  );
}

export default App;
