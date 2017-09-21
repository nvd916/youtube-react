import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC2uC6wCJ75iR3gcaYo0HlGBlnMDQImhTk';

// Create new component that produces some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Put the component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
