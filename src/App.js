import React from 'react'
import { Route, Switch} from "react-router-dom";
import Home from './Home'
import Profile from './Profile'
class App extends React.Component {




  
render(){
  console.log("Im here")
  return (
    <Switch>
    <Route exact path= '/' component={Home}/>
    <Route to= '/pictures/:id' component = {Profile}/>
    </Switch>
    
  )
}
  
}

export default App;
