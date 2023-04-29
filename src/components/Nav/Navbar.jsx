import Logo from "../../images/navbar/Logo";
import SearchIconNavbar from "../../images/navbar/SearchIconNavbar";
import "./nav.css";
function Navbar() {
  return (
    <>
      <header>
        <nav>
          <span className="logo-container">
            <Logo />
            <span className="title-logo">
              <span className="title-logo black">Sun</span>Set
            </span>
          </span>
          <div className="navbar">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="News">News</a>
              </li>
              <li>
                <a href="Maps">Maps</a>
              </li>
              <li></li>
            </ul>
            <span>
              <div className="search-container">
                <SearchIconNavbar />
                <input type="text" placeholder="Search" />
              </div>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
