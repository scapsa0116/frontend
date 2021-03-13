import React from 'react'

class Home extends React.Component {



   

        componentDidMount(){
            fetch("http://localhost:3000/", {
            method: 'GET'
          })
          .then(res => res.json())
          .then(pictures =>  {
              pictures.forEach(picture => {
                //   debugger;
                  console.log(picture)
              })
          })
    
        }
        



   
    render(){
        return(
            <div> im Home</div>
        )
    }
        
}

export default Home;