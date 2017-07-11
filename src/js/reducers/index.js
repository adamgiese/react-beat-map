/* eslint-disable no-unused-vars */
import scales from '../utils/scales';
/* eslint-ensable no-unused-vars */

const handleActions = (state = [], action) => {
  const newMap = state.map.map(array => array.slice());
  switch (action.type) {
    case 'CHANGE_SCALE':
      return { ...state, scale: action.scale };
    case 'CHANGE_TONE':
      return { ...state, tone: action.tone };
    case 'CHANGE_RESONANCE':
      return { ...state, resonance: action.resonance };
    case 'CHANGE_DURATION':
      return { ...state, duration: action.duration };
    case 'TOGGLE_TILE':
      newMap[action.beatIndex][action.tileIndex] = !newMap[action.beatIndex][action.tileIndex];
      return { ...state, map: newMap };
    case 'REMOVE_BEAT':
      newMap.pop();
      if (newMap.length >= 2) {
        return { ...state, map: newMap };
      }
      return state;
    case 'ADD_BEAT':
      newMap.push(Array(scales(state.scale).length).fill(false));
      return { ...state, map: newMap };
    default:
      return state;
  }
};
export default handleActions;
