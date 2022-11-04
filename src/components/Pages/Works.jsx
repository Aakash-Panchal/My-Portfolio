import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import Quotes from "../subComponents/Quotes";
import { BsArrowRight } from "react-icons/bs";
import FooterTitle from "../subComponents/FooterTitle";
import gsap from "gsap";

const Works = ({ setViewProject }) => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".works-title span", {
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

    tl.from(".project-card", {
      duration: 1.8,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  return (
    <>
      <Container data-scroll-section>
        <Title className="works-title">
          <span>selected</span>
          <span>project</span>
        </Title>
        <Content>
          <ProjectsContainer>
            <ProjectCard className="project-card">
              <ImageHolder
                onMouseEnter={() => {
                  setViewProject("View-Project");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
              >
                <a href="https://www.google.com" target="_blank">
                  <img src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1664346123/Test_yeulvv.png" />
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
              <ImageHolder
                onMouseEnter={() => {
                  setViewProject("View-Project");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
              >
                <a href="https://www.google.com" target="_blank">
                  <img src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1664346117/test-2_eir7n7.webp" />
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
              <ImageHolder
                onMouseEnter={() => {
                  setViewProject("View-Project");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
              >
                <a href="https://www.google.com" target="_blank">
                  <img src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1664346123/Test_yeulvv.png" />
                </a>
              </ImageHolder>
              <ProjectInfo>
                <h1>Project 3</h1>
                <a href="https://www.google.com">
                  <BsArrowRight />
                </a>
              </ProjectInfo>
            </ProjectCard>
            <ProjectCard>
              <ImageHolder
                onMouseEnter={() => {
                  setViewProject("View-Project");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
              >
                <a href="https://www.google.com" target="_blank">
                  <img src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1664346123/Test_yeulvv.png" />
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
      <Quotes setViewProject={setViewProject} />
      <FooterTitle title="Contact" titleLink="/contact" />
      <Footer
        FooterTitle="Have a project in mind?"
        FooterLink="/contact"
        FooterLinkTitle="Contact me"
      />
    </>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const Title = styled.div`
  font-family: "gallientregular";
  height: 70vh;
  display: flex;
  justify-content: end;
  flex-direction: column;
  margin: 0 5rem;
  font-size: 10vw;
  font-weight: 600;
  margin-bottom: 8rem;
  line-height: 0.9;
  span {
    :nth-child(2) {
      margin-left: 15rem;
    }
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
  margin-bottom: 4rem;
  :nth-child(even) {
    margin-left: auto;
  }
  :last-child {
    margin-bottom: 0;
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
  -webkit-user-drag: none;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* clip-path: inset(0 100% 0 0);
    transition: all 1.2s cubic-bezier(0.77, 0, 0.175, 1);
    scale: 1.3; */
    :hover {
      /* scale: 1.1; */
    }
  }
  .is-inview {
    clip-path: inset(0 0 0 0);
    scale: 1;
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
