/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
/* eslint-ensable no-unused-vars */

const Settings = props => (
  <div className='settings'>
    <label className='settings--label' title='In milliseconds'>
      Duration
      <input
        type='number'
        min='50'
        max='3000'
        step='25'
        defaultValue={props.duration}
        onChange={event => props.onChange(Number(event.target.value))}
      />
    </label>
    <label className='settings--label' title='Multiplier'>
      Resonance
      <input
        type='number'
        min='.1'
        max='10'
        step='.1'
        defaultValue={props.resonance}
        onChange={event => props.onChangeResonance(Number(event.target.value))}
      />
    </label>
    <select className='settings--select' onChange={event => props.onChangeTone(event.target.value)} defaultValue={props.tone}>
      <option value='sine'>Sine</option>
      <option value='sawtooth'>Sawtooth</option>
      <option value='square'>Square</option>
      <option value='triangle'>Triangle</option>
    </select>
    <button className='settings--button' onClick={() => props.onRemoveBeat()}>
      Remove Beat
    </button>
    <button className='settings--button' onClick={() => props.onAddBeat()}>
      Add Beat
    </button>
  </div>
);

export default Settings;

Settings.propTypes = {
  duration: PropTypes.number.isRequired,
};
