import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/home";
import Contribute from "./Pages/Contribute/contribute";
import First from "./Pages/First/first";
import EC from "./Pages/EC/ec";
import CS from "./Pages/CS/cs";
import MECH from "./Pages/MECH/mech";
import EEE from "./Pages/EEE/eee";
import CIVIL from "./Pages/CIVIL/civil";
import Nomatch from "./Pages/Nomatch/Nomatch";
function App() {
  return (
    <Router>
        <Switch>
         
          <Route exact path={["/", "/index", "/home"]} component={Home} />
          <Route exact path="/first" component={First} />
          <Route exact path="/cs" component={CS} />
          <Route exact path="/ec" component={EC} />
          <Route exact path="/eee" component={EEE} />
          <Route exact path="/civil" component={CIVIL}/>
          <Route exact path="/mech" component={MECH} />
          <Route exact path="/contribute" component={Contribute} />
            <Route path="*" component={Nomatch} />
        </Switch>
      </Router>
  );
}

export default App;
