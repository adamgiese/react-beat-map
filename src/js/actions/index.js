export const changeScale = scale => (
  {
    type: 'CHANGE_SCALE',
    scale,
  }
);

export const changeDuration = duration => (
  {
    type: 'CHANGE_DURATION',
    duration,
  }
);

export const toggleTile = (beatIndex, tileIndex) => (
  {
    type: 'TOGGLE_TILE',
    beatIndex,
    tileIndex,
  }
);
