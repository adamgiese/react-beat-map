import { connect } from 'react-redux';
import { changeDuration, changeResonance, removeBeat, addBeat, changeTone } from '../actions/index';
import Settings from '../components/Settings.jsx';

const mapStateToProps = state => ({
  duration: state.duration,
  resonance: state.resonance,
  tone: state.tone,
});

const mapDispatchToProps = dispatch => ({
  onChange: (duration) => {
    dispatch(changeDuration(duration));
  },
  onChangeTone: (tone) => {
    dispatch(changeTone(tone));
  },
  onChangeResonance: (resonance) => {
    dispatch(changeResonance(resonance));
  },
  onRemoveBeat: () => {
    dispatch(removeBeat());
  },
  onAddBeat: () => {
    dispatch(addBeat());
  },
});

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
