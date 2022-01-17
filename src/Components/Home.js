import Same from "./Same";
import kobe from "../Images/kobe.png";

const Home = () => {
  return (
    <Same
      title="Home Ipsum"
      text="Home page ipsum dolor sit amet, consectetur adipiscing elit. Fusce
  lobortis felis sed mi dignissim bibendum. Duis diam enim, volutpat at
  erat at, laoreet eleifend risus."
      imgsrc={kobe}
    />
  );
};

export default Home;
