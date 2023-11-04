// import logo from './logo.svg';
import './App.css';
import './Pages/Contribute/Init/Init.css';
import {BrowserRouter,  Routes, Route,} from "react-router-dom";
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

import Navbar from "./components/Navbar/Navbar"

function App() {
    return (
        <div>
            <Navbar />
            <div style={{'marginLeft': "8%"}}>

                <Routes>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/first" component={First} />
                        <Route exact path="/cs" component={CS} />
                        <Route exact path="/ec" component={EC} />
                        <Route exact path="/eee" component={EEE} />
                        <Route exact path="/civil" component={CIVIL}/>
                        <Route exact path="/mech" component={MECH} />
                        <Route exact path="/contribute1" component={Contribute1} />

                        <Route exact path="/contribute2" component={Contribute2} />

                </Routes>
            </div>

        </div>

    );
}

export default App;