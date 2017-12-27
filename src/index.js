import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAjcM7MXvVJm25MA62LxMWgsbsUtkBJ_zo';

const App= () => {
  return ( <div>
    <SearchBar/>
  </div>);
  }
  ReactDOM.render(<App/>, document.querySelector('.container'));

