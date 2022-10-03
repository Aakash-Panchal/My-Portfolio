import React, { useEffect, useRef, useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import NavBar from "./components/subComponents/NavBar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Contact from "./components/Pages/Contact";
import Project from "./components/Pages/Project";
import styled from "styled-components";
import Cursor from "./components/CustomCursor/Cursor";
import CustomCursor from "./components/CustomCursor/CursorContext";
import ErrorPage from "./components/Pages/ErrorPage";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import "locomotive-scroll/dist/locomotive-scroll.css";
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
        duration: 600,
        easing: [0.25, 0.0, 0.35, 1.0],
        disableLerp: true,
      });
    }
  }, [location]);

  return (
    <>
      <NavBar setViewProject={setViewProject} />
      <Cursor viewProject={viewProject} />
      <CustomCursor.Provider value={viewProject}>
        <Container ref={scrollRef} data-scroll-container>
          <Routes key={location.pathname}>
            <Route
              exact
              path="/"
              element={<Home setViewProject={setViewProject} />}
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/works"
              element={<Works setViewProject={setViewProject} />}
            />
            <Route
              exact
              path="/works/:id"
              element={<Project setViewProject={setViewProject} />}
            />
            <Route
              exact
              path="/contact"
              element={<Contact setViewProject={setViewProject} />}
            />
            <Route
              exact
              path="/register"
              element={<Register setViewProject={setViewProject} />}
            />
            <Route
              exact
              path="/login"
              element={<Login setViewProject={setViewProject} />}
            />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </CustomCursor.Provider>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
`;

export default App;
