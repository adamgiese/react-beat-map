export default function note(name, octave) {
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
