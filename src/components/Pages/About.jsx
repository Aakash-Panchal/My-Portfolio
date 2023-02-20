import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import Quotes from "../subComponents/Quotes";
import gsap from "gsap";
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
    tl.from(".content p ", {
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
            apiente expedita hic obcaecati laboriosa laboriosam architecto
            ducimus Sapiente expedita obcaecati hic obcaecati, laboriosam s
            Sapiente expedita hic expedita hic obcaecati, laboriosam expedita
            hic imilique o necessitatibus rem vel expedita dignissimos dolor ut
            Sapiente hic similique obcaecati, laboriosam similique o
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
                <Line data-scroll data-scroll-class="line" />
                <li>
                  <p>Spline</p>
                  <p>3D</p>
                </li>
                <Line data-scroll data-scroll-class="line" />
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
                <Line data-scroll data-scroll-class="line" />
                <li>
                  <p>SCSS</p>
                  <p>CSS framework</p>
                </li>
                <Line data-scroll data-scroll-class="line" />
                <li>
                  <p>Reactjs</p>
                  <p>Frontend framework</p>
                </li>
                <Line data-scroll data-scroll-class="line" />
                <li>
                  <p>Gsap</p>
                  <p>Frotend animations</p>
                </li>
                <Line data-scroll data-scroll-class="line" />
                <li>
                  <p>Node,Express</p>
                  <p>Backend development</p>
                </li>
                <Line data-scroll data-scroll-class="line" />
                <li>
                  <p>MongoDB</p>
                  <p>Database</p>
                </li>
                <Line data-scroll data-scroll-class="line" />
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
  @media (max-width: 1024px) {
    margin: 0 5rem;
  }
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const Title = styled.div`
  font-size: 10rem;
  padding: 3rem 0;
  height: 60vh;
  display: flex;
  align-items: flex-end;
  @media (max-width: 1024px) {
    font-size: 7rem;
    height: 40vh;
  }
  @media (max-width: 1024px) {
    font-size: 4rem;
    height: 45vh;
  }
`;

const Content = styled.div`
  p {
    user-select: none;
    font-size: 3rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    overflow: hidden;
    position: relative;
    width: 70%;
    span {
      position: absolute;
      line-height: 4.2rem;
    }
  }
  @media (max-width: 1024px) {
    p {
      font-size: 2rem;
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

const Subtitle = styled.h1`
  font-size: 3rem;
  width: 30%;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SkillsTitle = styled.h1`
  margin-top: 10rem;
  font-size: clamp(3rem, 8vw, 6rem);
  @media (max-width: 1024px) {
    margin-top: 6rem;
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const DesignSection = styled.div`
  margin-top: 8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 5rem;
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const DesignTools = styled.div`
  width: 70%;
  margin-left: 1rem;
  ul {
    li {
      display: flex;
      justify-content: space-between;
      padding: 2rem 0;
      p {
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        :last-child {
          text-align: right;
          opacity: 0.5;
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
    ul {
      li {
        padding: 1rem 0;
        p {
          font-size: 1rem;
          :last-child {
            opacity: 0.5;
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;

const DevelopmentSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 6rem;
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #fff;
  /* clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%); */
  width: 0;
  transition: all 1s;
`;

export default About;
