import React, { useEffect, useRef, useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import NavBar from "./components/subComponents/NavBar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Contact from "./components/Pages/Contact";
import styled from "styled-components";
import Cursor from "./components/CustomCursor/Cursor";
import ViewProject from "./components/CustomCursor/CursorContext";
import PageTransition from "./components/PageTransition";
import ErrorPage from "./components/Pages/ErrorPage";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Quotes from "./components/subComponents/Quotes";
import "./App.scss";

function App() {
  const [viewProject, setViewProject] = useState("");
  const [scrollbar, setScrollbar] = useState(null);
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const LocoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      scrollFromAnywhere: true,
      reloadOnContextChange: true,
      smartphone: {
        smooth: true,
      },
      tablet: { smooth: true },
      repeat: true,
    });
    setScrollbar(LocoScroll);
  }, []);

  useEffect(() => {
    if (scrollbar !== null) {
      scrollbar.update();
      scrollbar.scrollTo("top", {
        offset: 0,
        callback: function () {
          // do something...
        },
        duration: 600,
        easing: [0.25, 0.0, 0.35, 1.0],
        disableLerp: true,
      });
    }
  }, [location]);

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

const BgNoise = styled.div``;

export default App;
