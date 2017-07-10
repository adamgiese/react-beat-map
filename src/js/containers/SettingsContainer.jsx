import { connect } from 'react-redux';
import { changeDuration, removeBeat, addBeat } from '../actions/index';
import Settings from '../components/Settings.jsx';

const mapStateToProps = state => ({
  duration: state.duration,
});

const mapDispatchToProps = dispatch => ({
  onChange: (duration) => {
    dispatch(changeDuration(duration));
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
