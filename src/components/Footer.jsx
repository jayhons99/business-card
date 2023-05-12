import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="--footer">
      <a href="https://github.com/jayhons99">
        <GitHubIcon className="--footer-icon" fontSize="large" />
      </a>
      <InstagramIcon className="--footer-icon" fontSize="large" />
      <TwitterIcon className="--footer-icon" fontSize="large" />
    </div>
  );
};
export default Footer;
