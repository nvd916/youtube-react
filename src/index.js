import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC2uC6wCJ75iR3gcaYo0HlGBlnMDQImhTk';

// Create new component that produces some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'あやねる'}, videos => this.setState({videos}));
    // ES6 shorthand for this.setState({videos: videos})
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Put the component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
