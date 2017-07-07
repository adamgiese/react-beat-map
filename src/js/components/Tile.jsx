/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Sound from '../utils/sound';
/* eslint-ensable no-unused-vars */

const Tile = (props) => {
  if (props.isActive && props.isCurrent) {
    const note = new Sound(props.context);
    const now = props.context.currentTime;
    note.play(props.frequency, now, props.duration, 'sine');
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

Tile.propTypes = {
  tileIndex: PropTypes.number.isRequired,
  beatIndex: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  frequency: PropTypes.number.isRequired,
  context: PropTypes.object.isRequired,
};
