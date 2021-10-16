import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/home";
import Contribute1 from "./Pages/Contribute/Init/Init";
import Contribute2 from "./Pages/Contribute/Final/Final";
import First from "./Pages/First/first";
import EC from "./Pages/EC/ec";
import CS from "./Pages/CS/cs";
import MECH from "./Pages/MECH/mech";
import EEE from "./Pages/EEE/eee";
import CIVIL from "./Pages/CIVIL/civil";
import Nomatch from "./Pages/Nomatch/Nomatch";
import DisplayNotes from './components/DisplayNotes';
function App() {
  return (
    <Router>
        <Switch>
         <Route exact path = "/" component = {DisplayNotes}/>
          {/* <Route exact path={["/", "/index", "/home"]} component={Home} />
          <Route exact path="/first" component={First} />
          <Route exact path="/cs" component={CS} />
          <Route exact path="/ec" component={EC} />
          <Route exact path="/eee" component={EEE} />
          <Route exact path="/civil" component={CIVIL}/>
          <Route exact path="/mech" component={MECH} />
          <Route exact path="/contribute1" component={Contribute1} />
            <Route exact path="/contribute2" component={Contribute2} />
            <Route path="*" component={Nomatch} /> */}
        </Switch>
      </Router>
  );
}

export default App;
