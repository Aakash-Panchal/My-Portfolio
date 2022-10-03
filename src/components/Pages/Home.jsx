import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import FooterTitle from "../subComponents/FooterTitle";
import Quotes from "../subComponents/Quotes";

const Home = ({ setViewProject }) => {
  return (
    <>
      <Container data-scroll-section>
        <h1>Home Page</h1>
        <Link to="/login">About</Link>
      </Container>
      <Quotes setViewProject={setViewProject} />
      <FooterTitle titleLink="/works" title="Recent Works" />
      <Footer
        FooterTitle="Have a project in mind?"
        FooterLink="/contact"
        FooterLinkTitle="Contact me"
      />
    </>
  );
};

const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export default Home;
