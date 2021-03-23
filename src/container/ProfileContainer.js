import React from 'react';


class ProfileContainer extends React.Component {

    state={
      user: {},
      pictures: [],
      loading: true
    }

 

    componentDidMount(){
      const userId = this.props.user.id
      console.log(this.props)
      fetch(`http://localhost:3000/users/${userId}`)
        .then(res => res.json()) 
        // .then(({user, pictures})=>{
        //   console.log(user, pictures)
        //   this.setState({
        //     user: user,
        //     pictures: pictures,
        //     loading: false
        //   })
          
        // })
        
      
    }

    render(){
      if(this.state.user.id){
        return (
          
        <main className="bg-gray-100 bg-opacity-25" >

        <div className="lg:w-8/12 lg:mx-auto mb-8">
        <header className="flex flex-wrap items-center p-4 md:py-8">
        <div className="md:w-3/12 md:ml-16">
        <img className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile"/>
        </div>
           {this.state.user.name}
        <div className="w-8/12 md:w-7/12 ml-4">
        <div className="md:flex md:flex-wrap md:items-center mb-4">
          <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
           
          </h2>

          <span className="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2" aria-hidden="true">
            <i className="fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px"></i>
          </span>

          <a href="/nothing/" className="bg-blue-500 px-2 py-1 
                        text-white font-semibold text-sm rounded block text-center 
                        sm:inline-block block" >Follow</a>
           
        </div>


        <ul className="hidden md:flex space-x-8 mb-4">
          <li>
            <span className="font-semibold">136</span>
            posts
          </li>

          <li>
            <span className="font-semibold">40.5k</span>
            followers
          </li>
          <li>
            <span className="font-semibold">302</span>
            following
          </li>
        </ul>

        <div className="hidden md:block">
          <h1 className="font-semibold">Mr Travlerrr...</h1>
          <span>Travel, Nature and Music</span>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

      </div>
      <div className="md:hidden text-sm my-2">
        <h1 className="font-semibold">Mr Travlerrr...</h1>
        <span>Travel, Nature and Music</span>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>

    </header>
    </div>


    <div className="px-px md:px-3">

<ul className="flex md:hidden justify-around space-x-8 border-t 
          text-center p-2 text-gray-600 leading-snug text-sm">
  <li>
    <span className="font-semibold text-gray-800 block">136</span>
    posts
  </li>

  <li>
    <span className="font-semibold text-gray-800 block">40.5k</span>
    followers
  </li>
  <li>
    <span className="font-semibold text-gray-800 block">302</span>
    following
  </li>
</ul>

<div className="flex flex-wrap -mx-px md:-mx-3">
<div className="w-1/3 p-px md:px-3">

<article className="post bg-gray-100 text-white relative pb-full md:mb-6">
<img className="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="im"/>
<i className="fas fa-square absolute right-0 top-0 m-1"></i>
<div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
<div className="flex justify-center items-center space-x-4 h-full">
<span className="p-2">
<i className="fas fa-heart"></i>412K
</span>
<span className="p-2">
<i className="fas fa-comment"></i>2,909
</span>
</div>
</div>
</article>
</div>
</div>
</div>






{/* <div class="w-1/3 p-px md:px-3">
          <a href="#">
            <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
              <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image"/>

              <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                <div class="flex justify-center items-center 
                                    space-x-4 h-full">
                  <span class="p-2">
                    <i class="fas fa-heart"></i>
                    412K
                  </span>

                  <span class="p-2">
                    <i class="fas fa-comment"></i>
                    1,993
                  </span>
                </div>
              </div>

            </article>
          </a>
        </div> */}
    

</main>
       
        
        
        )
      }
    }
}

export default ProfileContainer