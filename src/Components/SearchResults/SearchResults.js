import React, { Component } from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends Component {
  render() {
    const isLoading = this.props.isLoading;
    console.log(this.props.isLoading);
    if (isLoading) {
      return (
        <div className="SearchResults">
          <h2>Loading...</h2>
        </div>
      );
    } else {
      return (
        <div className="SearchResults">
          <h2>Results</h2>
          <TrackList
            tracks={this.props.searchResults}
            onAdd={this.props.onAdd}
            isRemoval={false}
          />
        </div>
      );
    }
  }
}

export default SearchResults;
