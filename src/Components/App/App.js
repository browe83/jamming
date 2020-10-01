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
        { name: "name", artist: "artist", album: "album", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name3", artist: "artist3", album: "album3", id: 3 },
      ],
      playlistName: "play-list-name",
      playlistTracks: [
        {
          name: "playlistname",
          artist: "playlistartist",
          album: "playlistalbum",
          id: 4,
        },
        {
          name: "playlistname2",
          artist: "playlistartist2",
          album: "playlistalbum2",
          id: 5,
        },
        {
          name: "playlistname3",
          artist: "playlistartist3",
          album: "playlistalbum3",
          id: 6,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({
      playlistTracks: tracks,
    });
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(
      (currentTrack) => currentTrack.id !== track.id
    );

    this.setState({
      playlistTracks: tracks,
    });
  }
  updatePlaylistName(name) {
    this.setState({
      playlistName: name,
    });
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
            <SearchResults
              searchResults={this.state.SearchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
