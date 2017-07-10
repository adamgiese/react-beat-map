import { connect } from 'react-redux';
import { changeDuration } from '../actions/index';
import Settings from '../components/Settings.jsx';

const mapStateToProps = state => ({
  duration: state.duration,
});

const mapDispatchToProps = dispatch => ({
  onChange: (duration) => {
    dispatch(changeDuration(duration));
  },
});

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
