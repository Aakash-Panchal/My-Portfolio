import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./style.scss";

const NavBar = () => {
  function OpenMenu() {
    console.log("open");
    tl.play();
  }
  function CloseMenu() {
    console.log("close");
    tl.reverse();
  }

  var tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.to(".nav-container", {
      left: 0,
      ease: "Expo.easeInOut",
    });

    tl.to(".menu__item", {
      y: "0",
      opacity: 1,
      ease: "Expo.easeOut",
      stagger: 0.1,
    });
  });

  return (
    <>
      <div className="menu-open" onClick={OpenMenu}>
        menu
      </div>
      <div className="nav-container">
        <div className="menu-close" onClick={CloseMenu}>
          close
        </div>
        <nav className="menu">
          <div className="menu__item">
            <Link to="/" onClick={CloseMenu} className="menu__item-link">
              Home
            </Link>
            <img
              className="menu__item-img"
              alt="failed to loads"
              src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1658564329/menu-img-three_oqghif.jpg"
            />
            <div className="marquee">
              <div className="marquee__inner">
                <span>Home - Home - Home - Home - Home - Home - Home</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <Link to="/about" onClick={CloseMenu} className="menu__item-link">
              About Me
            </Link>
            <img
              className="menu__item-img"
              alt="failed to loads"
              src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1658564329/menu-img-one_f0gtga.jpg"
            />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  About Me - About Me - About Me - About Me - About Me - About
                  Me - About Me
                </span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <Link to="/works" onClick={CloseMenu} className="menu__item-link">
              Works
            </Link>
            <img
              className="menu__item-img"
              alt="failed to loads"
              src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1658564329/menu-img-two_fgoplb.jpg"
            />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Works - Works - Works - Works - Works - Works - Works
                </span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <Link to="/contact" onClick={CloseMenu} className="menu__item-link">
              Contact
            </Link>
            <img
              className="menu__item-img"
              alt="failed to loads"
              src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1658564329/menu-img-four_sjhxti.jpg"
            />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Contact - Contact - Contact - Contact - Contact - Contact -
                  Contact
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
