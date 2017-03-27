import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCks9RoaWqvMLm8umozkwFBT51T50q4k6g';

// Create a new component. This component should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
       };

    YTSearch({key: API_KEY, term: 'surfBoards'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take his component's generated HTML and put it on the page. (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));