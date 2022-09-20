import React, { useEffect } from "react";
import styled from "styled-components";
import ProjectIMG from "../../assets/Test.png";
import Footer from "../subComponents/Footer";
import FooterTitle from "../subComponents/FooterTitle";
import Quotes from "../subComponents/Quotes";
import { BsArrowRight } from "react-icons/bs";
import gsap from "gsap";

const Works = ({ setViewProject }) => {
  // onMouseEnter={() => {
  //   setViewProject(true);
  // }}
  // onMouseLeave={() => {
  //   setViewProject(false);
  // }}

  const tl = gsap.timeline({ paused: true });

  useEffect(() => {}, []);

  return (
    <>
      <Container data-scroll-section>
        <Title>
          <span>W</span>ORKS
        </Title>
        <Content>
          <ProjectsContainer>
            <ProjectCard>
              <ImageHolder>
                <a href="https://www.google.com" target="_blank">
                  <img src={ProjectIMG} />
                </a>
              </ImageHolder>
              <ProjectInfo>
                <h1>Project 1</h1>
                <BsArrowRight />
              </ProjectInfo>
            </ProjectCard>
            <ProjectCard>
              <ImageHolder>
                <a href="https://www.google.com" target="_blank">
                  <img src={ProjectIMG} />
                </a>
              </ImageHolder>
              <ProjectInfo>
                <h1>Project 1</h1>
                <BsArrowRight />
              </ProjectInfo>
            </ProjectCard>
            <ProjectCard>
              <ImageHolder>
                <a href="https://www.google.com" target="_blank">
                  <img src={ProjectIMG} />
                </a>
              </ImageHolder>
              <ProjectInfo>
                <h1>Project 1</h1>
                <BsArrowRight />
              </ProjectInfo>
            </ProjectCard>
          </ProjectsContainer>
        </Content>
      </Container>
      <Quotes />
      <FooterTitle titleLink="/contact" title="Contact me" />
      <Footer />
    </>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const Title = styled.div`
  font-family: "Inter", sans-serif;
  height: 40vh;
  display: flex;
  align-items: end;
  margin: 0 5rem;
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 8rem;
  span {
    padding-right: 0.6rem;
    font-style: italic;
  }
  @media (max-width: 1024px) {
    font-size: 5rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-left: 2rem;
    margin-bottom: 4rem;
    height: 30vh;
  }
`;

const Content = styled.div``;
const ProjectsContainer = styled.div`
  margin: 0 5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  :nth-child(even) {
    margin-left: auto;
  }
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;
const ProjectCard = styled.div`
  width: 60vw;
  margin-bottom: 10rem;
  :nth-child(even) {
    margin-left: auto;
  }
  @media (max-width: 1024px) {
    width: 100%;
    :nth-child(even) {
      margin-left: 0;
    }
    margin-bottom: 4rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const ImageHolder = styled.div`
  height: 33vw;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 40vh;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 25vh;
  }
`;

const ProjectInfo = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  align-items: center;
  svg {
    font-size: 2.5rem;
  }
`;
export default Works;
