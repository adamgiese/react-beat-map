import { connect } from 'react-redux';
import { toggleTile } from '../actions/index';
import Tile from '../components/Tile.jsx';

const mapStateToProps = (state, ownProps) => ({
  isActive: state.map[ownProps.beatIndex][ownProps.tileIndex],
  resonance: state.resonance,
});

const mapDispatchToProps = dispatch => ({
  onClick: (beatIndex, tileIndex) => {
    dispatch(toggleTile(beatIndex, tileIndex));
  },
});

const TileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);

export default TileContainer;
