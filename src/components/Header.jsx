import reactLogo from "/react.svg";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="/">
          <img className="header-logo" src={reactLogo} alt="React Logo" />
        </a>
      </nav>
      <h1 className="header-title">React State Management</h1>
    </header>
  );
};

export default Header;
