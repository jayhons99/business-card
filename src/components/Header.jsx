import personalPic from "/me.png";
import { Button } from "@mui/material";
// import theme from "../Theme";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <div className="--header">
      <img src={personalPic} className="--header-pic" />
      <h1>Jhon Sisneros</h1>
      <h3 className="--header-title">Software Engineer</h3>
      <p className="--header-tag">Hello world!</p>
      <div className="--header-buttton-container">
        <Button
          variant="contained"
          href="mailto: jhonrsisneros@gmail.com"
          className="--header-email"
          sx={{
            backgroundColor: "#a8dadc",
            height: "32px",
            color: "black",
            ":hover": {
              bgcolor: "#f1faee",
              textDecoration: "underline",
            },
          }}
        >
          <EmailIcon className="--header-icons" />
          Email
        </Button>

        <Button
          variant="contained"
          color="secondary"
          href="https://www.linkedin.com/in/jhon-sisneros"
          sx={{
            backgroundColor: "#457b9d",
            height: "32px",
            ":hover": {
              bgcolor: "#1d3557",
              textDecoration: "underline",
            },
          }}
          className="--header-linkedin"
        >
          <LinkedInIcon className="--header-icons" />
          LinkedIn
        </Button>
      </div>
    </div>
  );
};
export default Header;
