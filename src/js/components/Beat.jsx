/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile.jsx';
/* eslint-ensable no-unused-vars */

const Beat = (props) => {
  const tiles = props.frequencies.map(
    (tile, index) =>
      <Tile
        key={index}
        tileIndex={index}
        isActive={props.activeTiles[index]}
        isCurrent={props.isCurrent}
        beatIndex={props.beatIndex}
        frequency={props.frequencies[index]}
        duration={props.duration}
        onClick={(beatIndex, tileIndex) => props.onClick(beatIndex, tileIndex)}
        context={props.context}
      />
  );
  const activeClass = props.isCurrent ? 'active' : 'inactive';

  return (
    <div className={`${activeClass} beat`}>
      {tiles}
      <div className={'beat-indicator'}></div>
    </div>
  );
};

export default Beat;

Beat.propTypes = {
  activeTiles: PropTypes.arrayOf(PropTypes.bool).isRequired,
  beatIndex: PropTypes.number.isRequired,
  context: PropTypes.object.isRequired,
  duration: PropTypes.number.isRequired,
  frequencies: PropTypes.arrayOf(PropTypes.number).isRequired,
  isCurrent: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
