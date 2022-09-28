import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import "./Navbar.scss";

const NavBar = () => {
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

const Logo = styled.div``;

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
