import PagesStyle from "../CSS/PagesStyle.css";

const Same = (props) => {
  return (
    <div className="mainSection">
      <div className="contentBox">
        <h1> {props.title} </h1>
        <p>{props.text}</p>
      </div>
      <div className="imgContainer">
        <img src={props.imgsrc} alt="homeImg"></img>
      </div>
    </div>
  );
};

export default Same;
