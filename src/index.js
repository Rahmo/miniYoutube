import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList'
const API_KEY = 'AIzaSyAjcM7MXvVJm25MA62LxMWgsbsUtkBJ_zo';


class App extends React.Component{
  constructor (props) {
    super(props);

    this.state= {videos: []} //starts with the empty array
    
    YTSearch({key:API_KEY, term: 'surfboards'},(videos)=>{ // kicks off a test call
      this.setState({videos}); //ES6 when the key and property is the same name
    });
  }
render() { return ( 
  <div>
    <SearchBar/>
    <VideoList videos={this.state.videos} />
  </div>);
  }}
  ReactDOM.render(<App/>, document.querySelector('.container'));

