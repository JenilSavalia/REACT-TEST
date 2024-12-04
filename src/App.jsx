import './App.css';

function App() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="left">
            <img
              src="https://cdn.prod.website-files.com/660b8797bc7ef434f6a3c823/665045f549c1b05d22def462_90094708_616730092236724_3189855640755372032_n.jpg"
              alt=""
            />
          </div>
          <div className="mid">
            <div className="nav_links">
              <li>Who</li>
              <li>What</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Free Assets</li>
              <li>Hire From Us</li>
            </div>
          </div>
          <div className="right">
            <a className="primary_btn" href="./login.html">
              <span>Join now</span>
              <img
                src="https://cdn.prod.website-files.com/660b8797bc7ef434f6a3c823/662b19fd4bcac95951b2d27b_Vector.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
