const handleActions = (state = [], action) => {
  const newMap = state.map.map(array => array.slice());
  switch (action.type) {
    case 'CHANGE_SCALE':
      return { ...state, scale: action.scale };
    case 'CHANGE_DURATION':
      return { ...state, duration: action.duration };
    case 'TOGGLE_TILE':
      newMap[action.beatIndex][action.tileIndex] = !newMap[action.beatIndex][action.tileIndex];
      return { ...state, map: newMap };
    default:
      return state;
  }
};
export default handleActions;
