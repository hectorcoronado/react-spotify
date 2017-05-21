import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import SongItem from './SongItem/SongItem';
import SongList from './SongList/SongList';
import searchSpotify from '../utils/searchSpotify';
import styles from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: '',
      tracks: {},
      songPosition: 0,
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    const { tracks, songPosition } = this.state;

    return (
      <div className={styles.root}>
        <SearchBar
          updateText={(song) => this.setState({ song })}
          fetchSongs={this.fetchSongs}
        />
        {/* if tracks.items exists, render component: */}
        {tracks.items && <SongItem songData={tracks.items[songPosition]} />}
        {tracks.items && <SongList
          listOfSongs={tracks.items}
          selectSong={(songPosition) =>
            this.setState({ songPosition })}
        />}
      </div>
    );
  }
}
