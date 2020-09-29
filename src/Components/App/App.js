import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SeachBar";
import SearchResults from "..SearchResults/SearchResults/SearchResults";
import Playlist from "..Playlist/Playlist/Playlist";

function App() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
