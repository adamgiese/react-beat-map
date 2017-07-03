export function mapFromQuery(query, frequencyLength) {
  return query.split('|').map(
    beat => parseInt(beat, 36) // convert to decimal
      .toString(2) // convert to binary
      .padStart(frequencyLength, 0) // ensure each array is the correct length
      .split('') // set as array
      .map(
        tile => tile === '1'
      )
  );
}

export function mapToQuery(map) {
  return map.map( // ugh
    beat => parseInt(beat.map(
      tile => (tile ? 1 : 0)
    ).join(''), 2).toString(36)
  ).join('|');
}

export function note(name, octave) {
  const notes = {
    C: 16.35,
    Cs: 17.32,
    Db: 17.32,
    D: 18.35,
    Ds: 19.45,
    Eb: 19.45,
    E: 20.60,
    F: 21.83,
    Fs: 23.12,
    Gb: 23.12,
    G: 24.50,
    Gs: 25.96,
    Ab: 25.96,
    A: 27.50,
    As: 29.14,
    Bb: 29.14,
    B: 30.87,
  };
  if (notes[name]) {
    return notes[name] * (2 ** octave);
  }
  return 0;
}

export function scales(scaleName) {
  switch (scaleName) {
    case 'chromatic':
      return [
        note('C', 3),
        note('Cs', 3),
        note('D', 3),
        note('Ds', 3),
        note('E', 3),
        note('F', 3),
        note('Fs', 3),
        note('G', 3),
        note('Gs', 3),
        note('A', 3),
        note('Bb', 3),
        note('B', 3),
        note('C', 4),
        note('Cs', 4),
        note('D', 4),
        note('Ds', 4),
        note('E', 4),
        note('F', 4),
        note('Fs', 4),
        note('G', 4),
        note('Gs', 4),
        note('A', 4),
        note('Bb', 4),
        note('B', 4),
        note('C', 5),
      ];
    case 'major':
      return [
        note('C', 3),
        note('D', 3),
        note('E', 3),
        note('F', 3),
        note('G', 3),
        note('A', 3),
        note('B', 3),
        note('C', 4),
        note('D', 4),
        note('E', 4),
        note('F', 4),
        note('G', 4),
        note('A', 4),
        note('B', 4),
        note('C', 5),
      ];
    case 'minor':
      return [
        note('C', 3),
        note('D', 3),
        note('Eb', 3),
        note('F', 3),
        note('G', 3),
        note('Ab', 3),
        note('Bb', 3),
        note('C', 4),
        note('D', 4),
        note('Eb', 4),
        note('F', 4),
        note('G', 4),
        note('Ab', 4),
        note('Bb', 4),
        note('C', 5),
      ];
    case 'lydian':
      return [
        note('C', 3),
        note('D', 3),
        note('E', 3),
        note('Fs', 3),
        note('G', 3),
        note('A', 3),
        note('B', 3),
        note('C', 4),
        note('D', 4),
        note('E', 4),
        note('Fs', 4),
        note('G', 4),
        note('A', 4),
        note('B', 4),
        note('C', 5),
      ];
    case 'mixolydian':
      return [
        note('C', 3),
        note('D', 3),
        note('E', 3),
        note('F', 3),
        note('G', 3),
        note('A', 3),
        note('Bb', 3),
        note('C', 4),
        note('D', 4),
        note('E', 4),
        note('F', 4),
        note('G', 4),
        note('A', 4),
        note('Bb', 4),
        note('C', 5),
      ];
    case 'pentatonic':
      return [
        note('C', 3),
        note('D', 3),
        note('E', 3),
        note('G', 3),
        note('A', 3),
        note('C', 4),
        note('D', 4),
        note('E', 4),
        note('G', 4),
        note('A', 4),
        note('C', 5),
      ];
    case 'octatonic':
      return [
        note('C', 3),
        note('Cs', 3),
        note('Ds', 3),
        note('E', 3),
        note('Fs', 3),
        note('G', 3),
        note('A', 3),
        note('Bb', 3),
        note('C', 4),
        note('Cs', 4),
        note('Ds', 4),
        note('E', 4),
        note('Fs', 4),
        note('G', 4),
        note('A', 4),
        note('Bb', 4),
        note('C', 5),
      ];
    default: // return pentatonic if no scale found
      return [
        note('C', 3),
        note('D', 3),
        note('E', 3),
        note('G', 3),
        note('A', 3),
        note('C', 4),
        note('D', 4),
        note('E', 4),
        note('G', 4),
        note('A', 4),
        note('C', 5),
      ];
  }
}
