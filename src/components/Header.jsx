import personalPic from "/me.png";

const Header = () => {
  return (
    <div className="--header">
      <img src={personalPic} className="header--picture" />
      <h1>Jhon Sisneros</h1>
      <h3>Software Engineer</h3>
    </div>
  );
};
export default Header;
