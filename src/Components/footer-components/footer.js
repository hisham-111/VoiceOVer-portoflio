import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsSoundwave,
  BsTiktok,
  BsLinkedin,
} from "react-icons/bs";
import "./index.css";

function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <footer className="footer-container  ">
      <div className="footer  ">
        <div className="footer-heading">
          <h3 className="title-footer-head">Lets Connect</h3>
          <p className="text-footer-head">
            Feel free to contact for collaborations and working of Projects
          </p>
          <span className="emailBox">
            Email:
            <Link className="email" href="" target="_blank">
              voice-over@gmail.com
            </Link>
          </span>
        </div>

        <div className="footer-social">
          <Link className="social" to="/" target="_blank">
            <BsInstagram className="icon-" />
          </Link>
          <Link className="social" to="/" target="_blank">
            <BsFacebook className="icon-" />
          </Link>
          <Link className="social" to="/" target="_blank">
            <BsYoutube className="icon-" />
          </Link>
          <Link className="social" to="/" target="_blank">
            <BsSoundwave className="icon-" />
          </Link>
          <Link className="social" to="/" target="_blank">
            <BsTiktok className="icon-" />
          </Link>
          <Link className="social" to="/" target="_blank">
            <BsLinkedin className="icon-" />
          </Link>
        </div>

        <span className="right-reserved">All Right Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
