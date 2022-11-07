import React, { useEffect, useRef, useState } from "react";
import CustomCursor from "./components/CustomCursor/CursorContext";
import { useLocation, Route, Routes } from "react-router-dom";
import SingleProject from "./components/Pages/SingleProject";
import NavBar from "./components/subComponents/NavBar";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Cursor from "./components/CustomCursor/Cursor";
import ErrorPage from "./components/Pages/ErrorPage";
import Login from "./components/Pages/Admin/Login";
import Admin from "./components/Pages/Admin/Admin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { AnimatePresence } from "framer-motion";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Home from "./components/Pages/Home";
import styled from "styled-components";
import gsap from "gsap";
import "./App.scss";

function App() {
  const [viewProject, setViewProject] = useState("");
  const [scrollbar, setScrollbar] = useState(null);
  const scrollRef = useRef(null);
  const location = useLocation();

  gsap.registerPlugin(ScrollTrigger);

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

    new ResizeObserver(() => LocoScroll.update()).observe(
      document.querySelector("[data-scroll-container]")
    );

    ScrollTrigger.scrollerProxy(".scrollContainer", {
      scrollTop(value) {
        return arguments.length
          ? LocoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : LocoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    setScrollbar(LocoScroll);

    ScrollTrigger.defaults({
      scroller: ".scrollContainer",
      markers: true,
    });

    ScrollTrigger.addEventListener("refresh", () => {
      LocoScroll.update;
    });

    ScrollTrigger.update();
  }, []);

  useEffect(() => {
    if (scrollbar !== null) {
      scrollbar.update();
      setTimeout(() => {
        scrollbar.scrollTo("top", {
          offset: 0,
          duration: 600,
          easing: [0.25, 0.0, 0.35, 1.0],
          disableLerp: true,
        });
      }, 1000);
    }
  }, [location]);

  return (
    <>
      <NavBar setViewProject={setViewProject} />
      <Cursor viewProject={viewProject} />
      <CustomCursor.Provider value={viewProject}>
        <Container
          ref={scrollRef}
          className="scrollContainer"
          data-scroll-container
        >
          <AnimatePresence initial={false} mode={"wait"}>
            <Routes location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                element={<Home setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/about"
                element={<About setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/works"
                element={<Works setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/works/:id"
                element={<SingleProject setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/contact"
                element={<Contact setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/login"
                element={<Login setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/admin"
                element={<Admin setViewProject={setViewProject} />}
              />
              <Route exact path="*" element={<ErrorPage />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </CustomCursor.Provider>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
`;

export default App;
