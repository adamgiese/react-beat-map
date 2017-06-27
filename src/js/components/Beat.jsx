import React from 'react';
import Tile from './Tile.jsx';

const Beat = (props) => {
  const tiles = props.frequencies.map(
    (tile, index) => {
      return <Tile
        tileIndex={index}
        isActive={props.activeTiles[index]}
        isCurrent={props.isCurrent}
        beatIndex={props.beatIndex}
        frequency={props.frequencies[index]}
        duration={props.duration}
        onClick={(beatIndex, tileIndex) => props.onClick(beatIndex, tileIndex)}
        context={props.context}
      />
    }
  );
  const activeClass = props.isCurrent ? 'active' : 'inactive';

  return (
    <div className={`${activeClass} beat`}>
      {tiles}
      <div className={'beat-indicator'}></div>
    </div>
  );
}

export default Beat;
