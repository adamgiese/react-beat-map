/* eslint-disable no-unused-vars */
import React from 'react';
import Sound from './Sound.jsx';
/* eslint-ensable no-unused-vars */

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
      /* eslint-disable no-unused-vars */
      onClick={(beatIndex, tileIndex) => props.onClick(props.beatIndex, props.tileIndex)}
      /* eslint-ensable no-unused-vars */
    />
  );
};

export default Tile;
