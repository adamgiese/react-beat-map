import React from 'react';
import Sound from './Sound.jsx';

const Tile = (props) => {
  if (props.isActive && props.isCurrent) {
    const note = new Sound(props.context);
    const now = props.context.currentTime;
    note.play(props.frequency, now, props.duration);
  }
  const activeClass = props.isActive ? 'active' : 'inactive';
  return (
    <button
      className={`tile ${activeClass}`}
      onClick={(beatIndex, tileIndex) => props.onClick(props.beatIndex, props.tileIndex)}
    />
  );
}

export default Tile;
