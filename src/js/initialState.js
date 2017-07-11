/* global document, URL */
/* eslint-disable no-unused-vars */
import scales from './utils/scales';
import { mapFromQuery } from './utils/uri';
/* eslint-ensable no-unused-vars */

const params = new URL(document.location).searchParams;
const scale = params.get('scale') || 'pentatonic';
const resonance = params.get('resonance') || 2;
const duration = Number(params.get('duration')) || 200;
const frequencies = scales(scale);

let map = [];
if (params.get('beats')) {
  map = mapFromQuery(params.get('beats'), frequencies.length);
} else {
  map = Array(12).fill(null);
  map.forEach((beat, index) => {
    map[index] = Array(frequencies.length).fill(false);
  });
}

const initialState = {
  scale,
  duration,
  map,
  resonance,
};
export default initialState;
