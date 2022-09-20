import { useEffect, useRef, useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import LocoMotiveScroll from "./components/Hooks/LocoMotiveScroll.ts";
import NavBar from "./components/subComponents/NavBar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Contact from "./components/Pages/Contact";
import styled from "styled-components";
import Cursor from "./components/CustomCursor/Cursor";
import ViewProject from "./components/CustomCursor/CursorContext";
import "./App.scss";
import PageTransition from "./components/PageTransition";
import ErrorPage from "./components/Pages/ErrorPage";
import Quotes from "./components/subComponents/Quotes";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });
// console.log("hello");

function App() {
  const [viewProject, setViewProject] = useState(false);
  const scrollRef = useRef(null);
  const location = useLocation();

  LocoMotiveScroll(
    {
      ref: scrollRef,
      smooth: true,
      scrollFromAnywhere: true,
      smartphone: {
        smooth: true,
      },
      tablet: { smooth: true },
    },
    [location]
  );

  return (
    <>
      <NavBar />
      <BgNoise />
      {/* <PageTransition /> */}
      <Cursor viewProject={viewProject} />
      <ViewProject.Provider value={viewProject}>
        <Container ref={scrollRef} data-scroll-container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/works"
              element={<Works setViewProject={setViewProject} />}
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="*" element={<ErrorPage />} />
            <Route exact path="/quotes" element={<Quotes />} />
          </Routes>
        </Container>
      </ViewProject.Provider>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
`;

const BgNoise = styled.div`
  background: #101010;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  &:before {
    position: absolute;
    content: "";
    top: -10rem;
    left: -10rem;
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    z-index: -1;
    pointer-events: none;
    touch-action: none;
    background-image: url("https://res.cloudinary.com/dbov4oeyp/image/upload/v1663052723/Portfolio/bg-noise_x8xg7l.png");
    background-position: 50%;
    animation: BgNoise 1s steps(2) infinite;
  }
  @keyframes BgNoise {
    0% {
      transform: translate3d(0, 9rem, 0);
    }
    10% {
      transform: translate3d(-1rem, -4rem, 0);
    }
    20% {
      transform: translate3d(-8rem, 2rem, 0);
    }
    30% {
      transform: translate3d(9rem, -9rem, 0);
    }
    40% {
      transform: translate3d(-2rem, 7rem, 0);
    }
    50% {
      transform: translate3d(-9rem, -4rem, 0);
    }
    60% {
      transform: translate3d(2rem, 6rem, 0);
    }
    70% {
      transform: translate3d(7rem, -8rem, 0);
    }
    80% {
      transform: translate3d(-9rem, 1rem, 0);
    }
    90% {
      transform: translate3d(6rem, -5rem, 0);
    }
    100% {
      transform: translate3d(-7rem, 0, 0);
    }
  }
`;

export default App;
