import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import Quotes from "../subComponents/Quotes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterTitle from "../subComponents/FooterTitle";

const About = ({ setViewProject }) => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".about-title", {
      duration: 1.8,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
    tl.from(".content p p", {
      duration: 1.8,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      // skewY: 7,
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <>
      <Container data-scroll-section>
        <Title className="about-title">About Me</Title>
        <Content className="content">
          <p>
            <p>Sapiente expedita hic obcaecati laboriosa</p>
            <p> architecto ducimus Sapiente expedita </p>
            <p> hic obcaecati, laboriosam s Sapiente </p>
            <p> expedita hic obcaecati, laboriosam </p>
            <p>similique o necessitatibus rem vel</p>
            <p>dignissimos dolor ut Sapiente expedita hic</p>
            <p>obcaecati, laboriosam similique o</p>
          </p>
        </Content>
      </Container>
      <Quotes setViewProject={setViewProject} />
      <FooterTitle titleLink="/works" title="Recent Works" />
      <Footer
        setViewProject={setViewProject}
        FooterTitle="Have a project in mind?"
        FooterLink="/contact"
        FooterLinkTitle="Contact me"
      />
    </>
  );
};

const Container = styled.div`
  margin: 0 10rem;
`;

const Title = styled.div`
  font-family: "gallientregular";
  font-size: 10rem;
  padding: 3rem 0;
  height: 60vh;
  display: flex;
  align-items: flex-end;
`;

const Content = styled.div`
  p {
    user-select: none;
    font-size: 3.5rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    /* margin-bottom: 5rem; */
    overflow: hidden;
    position: relative;
    span {
      position: absolute;
      line-height: 4.2rem;
    }
  }
`;

export default About;
