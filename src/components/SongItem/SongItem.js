import React, { PropTypes } from 'react';

import styles from './SongItem.css';

const SongItem = (props) => {
  const { songData } = props;
  const album = songData.album;
  const albumName = album.name;
  const albumImage = album.images[1];

  const msToMinsAndSecs = (ms) => {
    const mins = Math.floor(ms / 60000);
    const secs = ((ms % 60000) / 1000).toFixed(0);

    return `  ${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className={styles.root}>
      <div className={styles.album}>
        <img role="presentation" src={albumImage.url} />
        <span className={styles.albumName}>{albumName}</span>
      </div>
      <div className={styles.songAndDescription}>
        <audio controls duration src={songData.preview_url} />
        <span className={styles.songDescription}>Name: {songData.name}</span>
        <span className={styles.songDescription}>Duration: {msToMinsAndSecs(songData.duration_ms)}</span>
      </div>
    </div>
  );
};

SongItem.propTypes = {
  songData: PropTypes.object,
};

export default SongItem;
