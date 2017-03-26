import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyCks9RoaWqvMLm8umozkwFBT51T50q4k6g';

YTSearch({key: API_KEY, term: 'surfBoards'}, function(data) {
  console.log(data);
});

// Create a new component. This component should produce some HTML.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    );
}

// Take his component's generated HTML and put it on the page. (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));