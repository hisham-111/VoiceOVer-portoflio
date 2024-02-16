import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../logo.svg";
import "./index.css";
function Nav() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [pageLoaded, setIspageLoaded] = useState(false);

  const menuButton = (e) => {
    const navContainer = document.getElementsByClassName("nav-container")[0];
    const navNavigation = document.getElementsByClassName("nav-navigation")[0];
    const navWholeNav = document.getElementsByClassName("nav-whole-nav")[0];

    navContainer.classList.toggle("nav-change");
    navNavigation.classList.toggle("nav-show");
    navWholeNav.classList.toggle("nav-vertical");

    if (navWholeNav.classList.contains("nav-vertical")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  };
  return (
    <nav className="nav-whole-nav">
      <section className="navBox-section">
        <div className="nav-logo">
          <Link className="nav-logo-title nav-link" to="/">
            {/* <img className="img-nav" src={Logo} alt="Logo" /> */}M
          </Link>
        </div>

        <div className="nav-menu ">
          <div className="nav-container " onClick={menuButton}>
            <div className="nav-bar1"></div>
            <div className="nav-bar2"></div>
            <div className="nav-bar3"></div>
          </div>

          <div className="nav-navigation">
            <Link to="/" className="nav-link" onClick={menuButton}>
              Home
            </Link>
            <Link to="/" className="nav-link" onClick={menuButton}>
              About
            </Link>

            <Link to="/" className="nav-link" onClick={menuButton}>
              Projects
            </Link>

            <Link to="/" className="nav-link" onClick={menuButton}>
              Contact me
            </Link>
          </div>
          <div className={`search-icon-nav`}>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
