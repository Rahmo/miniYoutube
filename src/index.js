import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAjcM7MXvVJm25MA62LxMWgsbsUtkBJ_zo';

YTSearch({key:API_KEY, term: 'surfboards'},function(data){
 console.log(data);
});
const App= () => {
  return ( <div>
    <SearchBar/>
  </div>);
  }
  ReactDOM.render(<App/>, document.querySelector('.container'));

