import React from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import Quotes from "../subComponents/Quotes";
import { BsArrowRight } from "react-icons/bs";
import ProjectIMG from "../../assets/Test.png";
import ProjectIMG2 from "../../assets/Test-2.webp";

const Works = () => {
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
                <a href="https://www.google.com">
                  <BsArrowRight />
                </a>
              </ProjectInfo>
            </ProjectCard>
            <ProjectCard>
              <ImageHolder>
                <a href="https://www.google.com" target="_blank">
                  <img src={ProjectIMG2} />
                </a>
              </ImageHolder>
              <ProjectInfo>
                <h1>Project 2</h1>
                <a href="https://www.google.com">
                  <BsArrowRight />
                </a>
              </ProjectInfo>
            </ProjectCard>
            <ProjectCard>
              <ImageHolder>
                <a href="https://www.google.com" target="_blank">
                  <img src={ProjectIMG} />
                </a>
              </ImageHolder>
              <ProjectInfo>
                <h1>Project 3</h1>
                <a href="https://www.google.com">
                  <BsArrowRight />
                </a>
              </ProjectInfo>
            </ProjectCard>
          </ProjectsContainer>
        </Content>
      </Container>
      <Quotes />
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
  a {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: 0.5s all ease-in-out;
    svg {
      color: #fff;
      font-size: 2rem;
    }
    &:hover {
      background: #fff;
    }
    &:hover > svg {
      color: #101010;
    }
  }
`;
export default Works;
