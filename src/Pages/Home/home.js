import React, {Component} from 'react';
import './home.css';
import { history } from 'react';
import { withRouter } from 'react-router';

class Home extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="container">
                <h1 id="heythere">HEY THERE,</h1>

                <div id="p1">
                    <p>hitting the books last minute? We got you!</p>
                </div>

                <button id="btn1" onClick={() => this.props.history.push("/cs")}>
                    Go to Shelf
                </button>

                <div id="p2">
                    <p>
                        Remember to pay it forward too, You can share your notes here :)
                    </p>
                </div>

                <button id="btn2" onClick={() => history.push("/contribute1")}>
                    Contribute
                </button>

                <div id="about-us">
                    <p id="about-title">ABOUT US</p>
                    <p id="about-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/* <a href="#" id="instagram">logo-instagram</a>

        <a href="#" id="linkedin">logo-linkedin</a>

        <a href="#" id="twitter">logo-twitter</a>

        <a href="#" id="github">logo-github</a>

        <a href="#" id="mail">mail-open</a> */}

                <p id="footer-p">
                    This is an open-source porject Developed by students of Mar Athanasius
                    College of Engineering
                </p>
            </div>
        );
    }


}
export default Home;