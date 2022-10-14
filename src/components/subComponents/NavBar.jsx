import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import "./Navbar.scss";
import { MagneticButton } from "./MagneticButton";

const NavBar = ({ setViewProject }) => {
  var tl = gsap.timeline({ paused: true });

  const OpenMenu = () => {
    tl.play();
  };

  const CloseMenu = () => {
    tl.reverse();
  };

  useEffect(() => {
    tl.to(".nav-container", {
      left: "0%",
      ease: "Expo.easeInOut",
    });
    tl.to(".menu__item", {
      y: "0",
      opacity: 1,
      ease: "Expo.easeOut",
      stagger: 0.1,
    });
    tl.to(".socials", {
      opacity: 1,
      ease: "Expo.easeOut",
      stagger: 0.1,
    });
  });

  return (
    <>
      <NavHeader>
        <MagneticButton
          className="logo"
          scale={2}
          tollerance={0.8}
          speed={0.3}
          borderRadius="50%"
        >
          <Link
            onMouseEnter={() => {
              setViewProject("invert-cursor");
            }}
            onMouseLeave={() => {
              setViewProject(false);
            }}
            to="/"
          >
            Aakash.
          </Link>
        </MagneticButton>
        <MagneticButton
          className="nav-btn"
          scale={2}
          tollerance={0.8}
          speed={0.3}
          borderRadius="50%"
          onClick={OpenMenu}
        >
          Menu
        </MagneticButton>
      </NavHeader>
      <div className="nav-container">
        <div className="menu-close" onClick={CloseMenu}>
          <MagneticButton
            className="nav-btn-close"
            scale={2}
            tollerance={0.8}
            speed={0.3}
            borderRadius="50%"
          >
            Close
          </MagneticButton>
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
              src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1664346118/WorksPage_deckgq.png"
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
              src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1664346117/ContactPage_xwgc4u.png"
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
        <Socials>
          <a
            className="socials"
            href="https://github.com/Aakash-Panchal"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="socials"
            href="https://github.com/Aakash-Panchal"
            target="_blank"
          >
            Github
          </a>
          <a
            className="socials"
            href="https://github.com/Aakash-Panchal"
            target="_blank"
          >
            Linkedin
          </a>
        </Socials>
      </div>
    </>
  );
};

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 999999999;
  .logo {
    height: 100px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    font-family: "Roboto Mono";
    a {
      color: #fff;
      font-size: 1.2rem;
      font-family: "Roboto Mono";
      position: relative;
      left: -34px;
    }
  }
`;

const Socials = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 2rem;
  margin-bottom: 6rem;
  .socials {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    padding-left: 1rem;
    color: #101010;
    position: relative;
    opacity: 0;
    text-decoration: underline;
    &:first-child {
      padding-left: 0;
    }
  }
  @media (max-width: 1024px) {
    a {
      font-size: 0.8rem;
    }
  }
`;

export default NavBar;
