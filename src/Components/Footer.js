import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../CSS/FooterStyle.css";

const Footer = () => {
  return (
    <footer>
      <div className="container container-flex">
        <div className="icons">
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
          <FacebookIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
        <div className="line">
          <hr />
          <hr />
        </div>
        <div className="copyright">
          <p>All rights reserved &copy;</p>
          <p>Made by the Mita</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
