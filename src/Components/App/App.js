import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SeachBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [
        { name: "name", artist: "artist", album: "album", id: "id" },
        { name: "name2", artist: "artist2", album: "album2", id: "id2" },
        { name: "name3", artist: "artist3", album: "album3", id: "id3" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
