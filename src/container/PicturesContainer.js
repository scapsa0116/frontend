import React from "react";
import PictureList from "../container/PictureList";
import { connect } from "react-redux";
import { fetchPictures } from "../actions/pictures";
class PicturesContainer extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchPictures();
  }

  render() {
    if (this.props.loadingState === "notStarted") {
      return null;
    }
    return (
      <div className='max-w-6xl mx-auto mt-20'>
        <input
          className='search-bar max-w-xs border rounded bg-gray-200 px-4
            text-center outline-none focus:border-gray-400'
          type='search'
          placeholder='Search'
        />
        {this.props.loadingState === "inProgress" ? (
          "animate-spin"
        ) : (
          <PictureList pictures={this.props.pictures} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingState: state.pictures.loadingState,
    pictures: state.pictures.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchPictures: () => dispatch(fetchPictures())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PicturesContainer);
