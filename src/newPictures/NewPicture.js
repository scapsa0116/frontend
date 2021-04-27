import React from "react";
import { connect } from "react-redux";
import { fetchNewPicture } from "../actions/pictures";
import { fetchCurrentUserPic } from "../actions/getPictures";

class NewPicture extends React.Component {
  // state = {
  //   image_url: "",
  //   description: ""
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = new FormData();
    body.append("picture[description]", form.description.value);

    // form.image.files[0] &&
    body.append("picture[image]", form.image.files[0], form.image.value);

    // fetch(`http://localhost:3000/pictures`, {
    //   credentials: "include",
    //   method: "POST",

    //   body: body
    // })
    //   .then((res) => res.json())
    //   .then((pictureJson) => {
    //     //    this.props.history.push('/')
    //     console.log(pictureJson);
    //   });

    this.props.dispatchFetchNewPicture(body);
    //   .then(() => {
    //   this.props.history.push(`/pictures`);
    // });
  };

  componentDidMount() {
    this.props.dipatchUserPictures();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'
      >
        <h1 className='text-center text-3xl font-semibold mb-2'>New Post</h1>
        <fieldset>
          <input
            type='file'
            name='image'
            accept='image/*'
            image_url='image'
            id='image'
            className='w-full border p-4 my-4 file-uploader'
          />

          <input
            type='text'
            name='description'
            description='description'
            id='description'
            placeholder='whats on your mind?'
            className='w-full border p-4 my-4'
          />
        </fieldset>
        <button className='w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200'>
          Post It
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPictures: state.pictures.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dipatchUserPictures: () => dispatch(fetchCurrentUserPic()),
    dispatchFetchNewPicture: (picture) => dispatch(fetchNewPicture(picture))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPicture);
