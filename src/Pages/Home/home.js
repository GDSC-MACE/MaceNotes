import "./Home.css";

function Home() {
  return (
    <>
      <div className="Home">
        <div className="home-container">
          <h1 id="heythere">HEY THERE,</h1>
          <p id="p1">
            hitting the books last minute?
            <br />
            We got you!
          </p>
          <button id="btn1">Go to Shelf</button>
          <p id="p2">
            Remember to pay it forward too,
            <br />
            You can share your notes here :)
          </p>
          <button id="btn2">Contribute</button>
        </div>

        <div id="about-us">
          <p id="about-p">
            <p id="about-title">ABOUT US</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
