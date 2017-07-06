function note(name, octave) {
  const notes = {
    C: 16.35,
    Cs: 17.32,
    D: 18.35,
    Ds: 19.45,
    E: 20.60,
    F: 21.83,
    Fs: 23.12,
    G: 24.50,
    Gs: 25.96,
    A: 27.50,
    Bb: 29.14,
    B: 30.87,
  };
  if (notes[name]) {
    return notes[name] * (2 ** octave);
  }
  return 0;
}

const noteNames = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'Bb', 'B'];

function scaleFromPattern(pattern, root = 'C', initialOctave = 3, numberOfOctaves = 3) {
  let i = 0;
  const scale = [];
  const initialIndex = noteNames.indexOf(root);

  for (i; i <= numberOfOctaves * 12; i += pattern[(scale.length - 1) % pattern.length]) {
    const noteName = noteNames[(i + initialIndex) % 12];
    const octave = initialOctave + Math.floor((i + initialIndex) / 12);
    scale.push(note(noteName, octave));
  }
  return scale;
}

function scales(scaleName, root = 'C', initialOctave = 3, numberOfOctaves = 3) {
  switch (scaleName) {
    case 'whole':
      return scaleFromPattern([2], root, initialOctave, numberOfOctaves);
    case 'chromatic':
      return scaleFromPattern([1], root, initialOctave, numberOfOctaves);
    case 'major':
      return scaleFromPattern([2, 2, 1, 2, 2, 2, 1], root, initialOctave, numberOfOctaves);
    case 'minor':
      return scaleFromPattern([2, 1, 2, 2, 1, 2, 2], root, initialOctave, numberOfOctaves);
    case 'lydian':
      return scaleFromPattern([2, 2, 2, 1, 2, 2, 1], root, initialOctave, numberOfOctaves);
    case 'mixolydian':
      return scaleFromPattern([2, 2, 1, 2, 2, 1, 2], root, initialOctave, numberOfOctaves);
    case 'pentatonic':
      return scaleFromPattern([2, 2, 3, 2, 4], root, initialOctave, numberOfOctaves);
    case 'octatonic':
      return scaleFromPattern([1, 2], root, initialOctave, numberOfOctaves);
    default: // return pentatonic if no scale found
      return scaleFromPattern([2, 2, 3, 2, 4], root, initialOctave, numberOfOctaves);
  }
}

export default scales;
