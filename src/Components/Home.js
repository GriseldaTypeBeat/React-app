import { NavLink } from "react-router-dom";
import kobe from "../Images/kobe.png";
import PagesStyle from "../CSS/PagesStyle.css";

const Home = () => {
  return (
    <div className="mainSection">
      <div className="contentBox">
        <h1> Lorem ipsum </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis felis sed mi dignissim bibendum. Duis diam enim, volutpat at
          erat at, laoreet eleifend risus.
        </p>
        <div className="btnBox"></div>
      </div>
      <div className="imgContainer">
        <img src={kobe} alt="homeImg"></img>
      </div>
    </div>
  );
};

export default Home;
