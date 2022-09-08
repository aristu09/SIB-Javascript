//import react router dom
import { Switch, Route } from 'react-router-dom'
//import pages
import Home from "./Pages/home/Home"
import Login from "./Pages/login/login"
import MeetUp from "./Pages/meetup/MeetUp"
import Explore from "./Pages/explore/explore"
//import navigation
import Navigation from "./Component/Navigation"
//import footer
import Footer from "./Component/Footer"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component= {Home}/>
        <Route exact path="/login" component= {Login}/>
        <Route exact path="/create-meetup" component= {MeetUp}/>
        <Route exact path="/explore" component= {Explore}/>
      </Switch>
        
    </div>
  );
}

export default App;
