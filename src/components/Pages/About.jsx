import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Container>
        <h1>About Page</h1>
        <Link to="/">home</Link>
      </Container>
    </>
  );
};

const Container = styled.div``;

export default About;
