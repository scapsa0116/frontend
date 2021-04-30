import React from "react";
import { Link } from "react-router-dom";

class PictureList extends React.Component {
  constructor() {
    super();

    this.state = {
      search: null
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const items = this.props.pictures
      .filter((picture) => {
        if (this.state.search == null) return picture;
        else if (
          picture.description
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        ) {
          return picture;
        }
      })
      .map((picture) => {
        return (
          <div>
            <li key={picture.id} className='flex items-center justify-center'>
              <div className='rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 m-10'>
                <div className='w-full flex justify-between p-3'>
                  <div className='flex'>
                    <div className='rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden'>
                      <img src={picture.image_url} alt='profilepic' />
                    </div>
                    <Link to={`/users/${picture.user_id}`}>
                      <span className='pt-1 ml-2 font-bold text-sm'>
                        {picture.user_name}
                      </span>
                    </Link>
                  </div>
                  <span className='px-2 hover:bg-gray-300 cursor-pointer rounded'>
                    <i className='fas fa-ellipsis-h pt-2 text-lg'></i>
                  </span>
                </div>
                <Link to={`/pictures/${picture.id}`}>
                  <img
                    className='w-full bg-cover'
                    src={picture.image_url}
                    alt=''
                  />
                </Link>

                <div className='px-3 pb-2'>
                  <div className='pt-2'>
                    <i className='far fa-heart cursor-pointer'></i>
                    <span className='text-sm text-gray-400 font-medium'>
                      12 likes
                    </span>
                  </div>
                  <div className='pt-1'>
                    <span className='font-medium mr-2'>
                      {picture.user_name}
                    </span>
                    {picture.description}
                  </div>
                </div>
                <Link to={`/pictures/${picture.id}`}>
                  <div className='text-sm mb-2 text-gray-400 cursor-pointer font-medium'>
                    View all comments
                  </div>
                </Link>
                <div className='mb-2'>
                  <div className='mb-2 text-sm'></div>
                </div>
              </div>
            </li>
          </div>
        );
      });

    return (
      <div>
        <div className='flex items-center justify-center'>
          <input
            className='search-bar max-w-xs border rounded bg-gray-200 px-4
                               text-center outline-none focus:border-gray-400 '
            type='search'
            placeholder='Search by description'
            onChange={(e) => this.searchSpace(e)}
          />
        </div>
        {items}
      </div>
    );
  }
}

export default PictureList;
