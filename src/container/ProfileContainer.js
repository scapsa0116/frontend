import React from "react";
// import NewPicture from '../newPictures/NewPicture.js'
import { connect } from "react-redux";
import { fetchUser } from "../actions/userPictures";

class ProfileContainer extends React.Component {
  // state = {
  //   user: {},
  //   pictures: [],
  //   loading: true
  // }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.dispatchFetchUser(userId);
  }

  render() {
    if (this.props.loadingState !== "successful") {
      return <div>Loading Spinner</div>;
    }

    return (
      <main className='bg-gray-100 bg-opacity-25'>
        <div className='lg:w-8/12 lg:mx-auto mb-8'>
          <header className='flex flex-wrap items-center p-4 md:py-8'>
            <div className='md:w-3/12 md:ml-16'>
              <img
                className='w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1'
                src='https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
                alt='profile'
              />
            </div>

            <div className='w-8/12 md:w-7/12 ml-4'>
              <div className='md:flex md:flex-wrap md:items-center mb-4'>
                <h2 className='text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0'></h2>

                <span
                  className='inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2'
                  aria-hidden='true'
                >
                  <i
                    className='fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px'
                  ></i>
                </span>

                <a
                  href='/nothing/'
                  className='bg-blue-500 px-2 py-1 
                        text-white font-semibold text-sm rounded block text-center 
                        sm:inline-block block'
                >
                  Follow
                </a>
              </div>

              <ul className='hidden md:flex space-x-8 mb-4'>
                <li>
                  <span className='font-semibold'>136</span>
                  posts
                </li>

                <li>
                  <span className='font-semibold'>40.5k</span>
                  followers
                </li>
                <li>
                  <span className='font-semibold'>302</span>
                  following
                </li>
              </ul>
            </div>
            <div className='hidden md:block' key={this.props.user.id}>
              <h1 className='font-semibold'>{this.props.user.name}</h1>
              <span>Travel, Nature and Music</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </header>
        </div>

        <div className='px-px md:px-3'>
          <ul
            className='flex md:hidden justify-around space-x-8 border-t 
          text-center p-2 text-gray-600 leading-snug text-sm'
          >
            <li>
              <span className='font-semibold text-gray-800 block'>136</span>
              posts
            </li>

            <li>
              <span className='font-semibold text-gray-800 block'>40.5k</span>
              followers
            </li>
            <li>
              <span className='font-semibold text-gray-800 block'>302</span>
              following
            </li>
          </ul>

          <div className='flex flex-wrap -mx-px md:-mx-3'>
            <div className='w-1/3 p-px md:px-3'>
              <article className='post bg-gray-100 text-white relative pb-full md:mb-6'>
                <img
                  className='w-full h-full absolute left-0 top-0 object-cover'
                  src='https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                  alt='im'
                />
                <i className='fas fa-square absolute right-0 top-0 m-1'></i>
                <div
                  className='overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden'
                >
                  <div className='flex justify-center items-center space-x-4 h-full'>
                    <span className='p-2'>
                      <i className='fas fa-heart'></i>412K
                    </span>
                    <span className='p-2'>
                      <i className='fas fa-comment'></i>2,909
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className='px-px md:px-3'>
          <ul className='flex items-center justify-around md:justify-center space-x-12  uppercase tracking-widest font-semibold text-xs text-gray-600 border-t'>
            <li className='md:border-t md:border-gray-700 md:-mt-px md:text-gray-700'>
              <i className='fas fa-th-large text-xl md:text-xs'></i>
              <span className='hidden md:inline'>post</span>
            </li>
            <li>
              <a className='inline-block p-3' href='inline'>
                <i className='far fa-square text-xl md:text-xs'></i>
                <span className='hidden md:inline'>igtv</span>
              </a>
            </li>

            <li>
              <a className='inline-block p-3' href='p'>
                <i className='fas fa-user border border-gray-500 px-1 pt-1 rounded text-xl md:text-xs'></i>
                <span className='hidden md:inline'>tagged</span>
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-wrap overflow-hidden'>
          <div className=' card w-full overflow-hidden grid grid-cols-3 flex pt-50'>
            {this.props.pictures.map((picture) => (
              <div
                className='flex-1 text-center px-4 py-2 m-2'
                key={picture.id}
              >
                <img
                  className='w-full sm:h-80 '
                  src={picture.image_url}
                  alt=''
                />
                {picture.description}
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const userId = match.params.userId;
  console.log(userId);
  let loadingState = state.userPictures.usersLoaded[userId] || "notStarted";
  console.log("state", loadingState);
  return {
    user: state.usersList.list.find((user) => user.id == userId),
    pictures: state.pictures.list.filter(
      (picture) => picture.user_id == userId
    ),
    loadingState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
