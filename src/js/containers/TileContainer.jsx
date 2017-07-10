import { connect } from 'react-redux';
import { toggleTile } from '../actions/index';
import Tile from '../components/Tile.jsx';

const mapDispatchToProps = dispatch => ({
  onClick: (beatIndex, tileIndex) => {
    dispatch(toggleTile(beatIndex, tileIndex));
  },
});

const TileContainer = connect(
  null,
  mapDispatchToProps,
)(Tile);

export default TileContainer;
