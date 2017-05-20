import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import SongItem from './SongItem/SongItem';
import searchSpotify from '../utils/searchSpotify';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: [],
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    const { tracks } = this.state;

    return (
      <div>
        <SearchBar
          updateText={(song) => this.setState({ song })}
          fetchSongs={this.fetchSongs}
        />
        {/* if tracks.items exists, render component: */}
        {tracks.items && <SongItem songData={tracks.items[0]} />}
      </div>
    );
  }
}
