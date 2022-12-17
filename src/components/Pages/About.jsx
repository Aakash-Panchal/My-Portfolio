import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import Quotes from "../subComponents/Quotes";
import gsap from "gsap";
import FooterTitle from "../subComponents/FooterTitle";
import RouteTransition from "../subComponents/RouteTransition";

const About = ({ setViewProject }) => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".about-title", {
      duration: 1,
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
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <RouteTransition>
      <Container data-scroll-section>
        <Title className="about-title">About Me</Title>
        <Content className="content">
          <p>
            <p>Sapiente expedita hic obcaecati laboriosa laboriosam</p>
            <p> architecto ducimus Sapiente expedita obcaecati</p>
            <p> hic obcaecati, laboriosam s Sapiente expedita hic</p>
            <p> expedita hic obcaecati, laboriosam expedita hic</p>
            <p>similique o necessitatibus rem vel expedita</p>
            <p>dignissimos dolor ut Sapiente hic similique</p>
            <p>obcaecati, laboriosam similique o</p>
          </p>
        </Content>
        <SkillsTitle>Tools that i use</SkillsTitle>
        <Content>
          <DesignSection>
            <Subtitle>Design</Subtitle>
            <DesignTools>
              <ul>
                <li>
                  <p>Figma</p>
                  <p>UI design</p>
                </li>
                <li>
                  <p>Spline</p>
                  <p>3D</p>
                </li>
              </ul>
            </DesignTools>
          </DesignSection>
          <DevelopmentSection>
            <Subtitle>Development</Subtitle>
            <DesignTools>
              <ul>
                <li>
                  <p>HTML,CSS,JS</p>
                  <p>Frontend development</p>
                </li>
                <li>
                  <p>SCSS</p>
                  <p>CSS framework</p>
                </li>
                <li>
                  <p>Reactjs</p>
                  <p>Frontend framework</p>
                </li>
                <li>
                  <p>Gsap</p>
                  <p>Frotend animations</p>
                </li>
                <li>
                  <p>Node,Express</p>
                  <p>Backend development</p>
                </li>
                <li>
                  <p>MongoDB</p>
                  <p>Database</p>
                </li>
              </ul>
            </DesignTools>
          </DevelopmentSection>
        </Content>
      </Container>
      <Quotes setViewProject={setViewProject} />
      {/* <FooterTitle titleLink="/works" title="Recent Works" /> */}
      <Footer setViewProject={setViewProject} />
    </RouteTransition>
  );
};

const Container = styled.div`
  margin: 0 10rem;
  font-family: "gallientregular";
`;

const Title = styled.div`
  font-size: 10rem;
  padding: 3rem 0;
  height: 60vh;
  display: flex;
  align-items: flex-end;
`;

const Content = styled.div`
  p {
    user-select: none;
    font-size: 3rem;
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

const Subtitle = styled.h1`
  font-size: 3rem;
`;

const DesignSection = styled.div`
  margin-top: 8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DesignTools = styled.div`
  width: 70%;
  ul {
    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #fff;
      padding: 2rem 0;
      p {
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        :last-child {
          opacity: 0.5;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

const SkillsTitle = styled.h1`
  margin-top: 10rem;
  font-size: clamp(3rem, 8vw, 6rem);
`;

const DevelopmentSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

export default About;
