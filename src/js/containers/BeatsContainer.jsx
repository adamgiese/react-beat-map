import { connect } from 'react-redux';
import { changeScale, changeDuration } from '../actions/index';
import Beats from '../components/Beats.jsx';

const mapStateToProps = state => ({
  scale: state.scale,
  duration: state.duration,
  map: state.map,
});

const mapDispatchToProps = dispatch => ({
  onScaleChange: (scale) => {
    dispatch(changeScale(scale));
  },
  onDurationChange: (duration) => {
    dispatch(changeDuration(duration));
  },
});

const BeatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beats);

export default BeatsContainer;
