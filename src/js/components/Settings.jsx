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
