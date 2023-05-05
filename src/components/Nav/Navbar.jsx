import { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import Logo from "../../images/navbar/Logo";
import "./nav.css";
import InputSearch from "../InputSearch/InputSearch";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <nav>
          <span className="logo-container">
            <Link to="/">
              <Logo />
            </Link>

            <span className="title-logo">
              <span className="title-logo black">Sun</span>Set
            </span>
          </span>
          <div className="navbar">
            <ul className={` barra ${open ? "open" : "close"}`}>
              <li>
                <Link onClick={() => setOpen(!open)} to="/">
                  Home
                </Link>
              </li>

              <li>
                <a href="Maps">Maps</a>
              </li>
            </ul>
            <div>
              <InputSearch />
            </div>

            <div onClick={() => setOpen(!open)} className="menu">
              {open ? <IoClose size="26px" /> : <IoMenuOutline size="26px" />}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
