import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./Data";
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ isAuth }) {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div>
      <div>
        <nav>
          <div className="nav-center">
            <div className="nav-header">
              <h4 className="nav__logo">w.rite</h4>

              <button className="nav-toggle" onClick={toggleLinks}>
                <FaBars />
              </button>
            </div>
            <div className="links-container" ref={linksContainerRef}>
              <ul className="links" ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id} className="navLinks">
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
                <div className="cta-icons">
                  <Link to="/">
                    <button className="logout">
                      Sign Out <BiLogOut />
                    </button>
                  </Link>

                  <Link to="/login">
                    <button className="login">
                      Sign In <FiLogIn />
                    </button>
                  </Link>
                  {isAuth ? (
                    <Link to="/createpost">
                      <button className="login">Create Post</button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
