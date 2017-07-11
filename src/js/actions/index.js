export const changeScale = scale => (
  {
    type: 'CHANGE_SCALE',
    scale,
  }
);

export const changeTone = tone => (
  {
    type: 'CHANGE_TONE',
    tone,
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

export const removeBeat = () => (
  {
    type: 'REMOVE_BEAT',
  }
);

export const addBeat = () => (
  {
    type: 'ADD_BEAT',
  }
);

export const changeResonance = resonance => (
  {
    type: 'CHANGE_RESONANCE',
    resonance,
  }
);
