import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC2uC6wCJ75iR3gcaYo0HlGBlnMDQImhTk';

// Create new component that produces some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('あやねる');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => this.setState({
      videos: videos,
      selectedVideo: videos[0]
    }));
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
        />
      </div>
    );
  }
}

// Put the component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
