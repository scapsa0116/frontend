import React from "react";
import { connect } from "react-redux";
import { fetchPicture } from "../actions/pictures";
import { createReview } from "../actions/reviews";

class OnePicture extends React.Component {
  componentDidMount() {
    const pictureId = this.props.match.params.pictureId;
    this.props.dispatchFetchPicture(pictureId);
    console.log(this.props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();
    formData.append("review[picture_id]", this.props.match.params.pictureId);
    formData.append("review[comment]", form.comment.value);

    // const pictureId = this.props.match.params.pictureId
    this.props.dispatchCreateReview(formData).then(() => {
      this.props.history.push(`/pictures/${this.props.match.params.pictureId}`);
    });
  };

  render() {
    if (this.props.loadingState !== "successful") {
      return <div>Loading Spinner</div>;
    }
    console.log(this.props);

    return (
      <div className='flex items-center justify-center '>
        <div className=' rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 m-20'>
          <div className='w-full flex justify-between p-3'>
            <div className='flex'>
              <div
                className='rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden'
                key={this.props.picture.id}
              >
                <img src={this.props.picture.image_url} alt='profilepic' />
              </div>
              <span className='pt-1 ml-2 font-bold text-sm'>
                {this.props.picture.user_name}
              </span>
            </div>
            <span className='px-2 hover:bg-gray-300 cursor-pointer rounded'>
              <i className='fas fa-ellipsis-h pt-2 text-lg'></i>
            </span>
          </div>

          <img
            className='w-full bg-cover'
            src={this.props.picture.image_url}
            alt='img'
          />

          <div className='px-3 pb-2'>
            <div className='pt-2'>
              <i className='far fa-heart cursor-pointer'></i>
              <span className='text-sm text-gray-400 font-medium'>
                12 likes
              </span>
            </div>
            <div className='pt-1'>
              <span className='font-medium mr-2'>
                {this.props.picture.user_name}
              </span>
              {this.props.picture.description}
            </div>
          </div>
          <div className='text-sm mb-2 text-gray-400 cursor-pointer font-medium'>
            View all 14 comments
          </div>
          {this.props.reviews.map((review) => (
            <div className='mb-2' key={review.id}>
              <div className='mb-2 text-sm'>
                <span className='font-medium mr-2'>{review.user_name}</span>{" "}
                {review.comment}
              </div>
              {/* {this.props.comment.user_name}{this.props.comment} */}
            </div>
          ))}

          <form key={this.props.picture.id} onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='comment'
              className='block w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out'
              placeholder='Add a review'
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const pictureId = match.params.pictureId;
  let loadingState = state.reviews.picturesLoaded[pictureId] || "notStarted";
  console.log(loadingState);

  return {
    picture: state.pictures.list.find((picture) => picture.id == pictureId),
    reviews: state.reviews.list.filter(
      (review) => review.picture_id == pictureId
    ),
    loadingState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchPicture: (pictureId) => dispatch(fetchPicture(pictureId)),
    dispatchCreateReview: (formData) => dispatch(createReview(formData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnePicture);
