import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import _ from 'lodash';

import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'

const API_KEY = 'AIzaSyAjcM7MXvVJm25MA62LxMWgsbsUtkBJ_zo';


class App extends React.Component{
  constructor (props) {
    super(props);

    this.state= {
      videos: [],
      selectedVideo:null
    } //starts with the empty array

    this.videoSearch('Baby one more time');
    }

    videoSearch(term){
      YTSearch({key:API_KEY, term: term},(videos)=>{ // kicks off a test call
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      }); //{video}ES6 when the key and property is the same name
    });
  }
render() {
  const videoSearch = _.debounce((term)=>{this.videoSearch(term )},600)
  return ( 
    <div>
    <SearchBar onSearchTermChange={videoSearch}/>
    <VideoDetail video={this.state.selectedVideo}/>
    <VideoList 
    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
    videos={this.state.videos}/>
    </div>
    );
  }
}
  ReactDOM.render(<App/>, document.querySelector('.container'));

