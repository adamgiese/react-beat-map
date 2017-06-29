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
