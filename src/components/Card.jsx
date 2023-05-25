/* eslint-disable react/prop-types */
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import logo from "/aws-logo.png";

const Card = ({ count }) => {
  return (
    <div className="--card">
      <Header />
      <MainContent />
      <h1 className="aws-stats"># of visitors: {count}</h1>
      <p className="aws-stats p">
        Powered by <img className="logo" src={logo}></img>
      </p>
      <Footer />
    </div>
  );
};
export default Card;
