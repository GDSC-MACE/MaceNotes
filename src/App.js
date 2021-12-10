import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contribute1 from "./Pages/Contribute/Init/Init";
import Contribute2 from "./Pages/Contribute/Final/Final";
import First from "./Pages/First/first";
import EC from "./Pages/EC/ec";
import MECH from "./Pages/MECH/mech";
import EEE from "./Pages/EEE/eee";
import CIVIL from "./Pages/CIVIL/civil";
import Nomatch from "./Pages/Nomatch/Nomatch";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import CS from "./Pages/CS/CS";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Main-container">
        <Router>
          <Switch>
            <Route exact path={["/", "/index", "/home"]} component={Home} />
            <Route exact path="/cs" component={CS} />
            <Route exact path="/first" component={First} />
            <Route exact path="/ec" component={EC} />
            <Route exact path="/eee" component={EEE} />
            <Route exact path="/civil" component={CIVIL} />
            <Route exact path="/mech" component={MECH} />
            <Route exact path="/contribute1" component={Contribute1} />
            <Route exact path="/contribute2" component={Contribute2} />
            <Route path="*" component={Nomatch} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
