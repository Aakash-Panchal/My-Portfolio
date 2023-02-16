import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import RouteTransition from "../subComponents/RouteTransition";
import Quotes from "../subComponents/Quotes";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Works = ({ setViewProject, setWorkCursor }) => {
  const [projects, setProjects] = useState([
    {
      projectNo: "01",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Chemin Esports",
      projectLink: "",
    },
    {
      projectNo: "02",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/618f3ad5f6c6e05234740557_sarnco-mark.jpg",
      ProjectTitle: "Project Oxygen",
      projectLink: "",
    },
    {
      projectNo: "03",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Lemon Juice",
      projectLink: "",
    },
    {
      projectNo: "04",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Project Width",
      projectLink: "",
    },
    {
      projectNo: "05",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Alive",
      projectLink: "",
    },
  ]);

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
  }, []);

  return (
    <RouteTransition>
      <Container data-scroll-section>
        <Title className="works-title">
          <span>selected</span>
          <span>projects</span>
        </Title>
        <Content>
          <ProjectsContainer>
            {projects.map((item, index) => (
              <ProjectCard
                onMouseEnter={() => {
                  setWorkCursor(item.projectImg);
                }}
                onMouseLeave={() => {
                  setWorkCursor(false);
                }}
                key={index}
                className="project-card"
              >
                <ImageHolder>
                  <img src={item.projectImg} />
                </ImageHolder>
                <ProjectInfo>
                  <div>
                    <p>{item.projectNo}</p>
                    <h1>{item.ProjectTitle}</h1>
                  </div>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsContainer>
        </Content>
      </Container>
      <Quotes />
      <Footer setViewProject={setViewProject} />
    </RouteTransition>
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

const Content = styled.div`
  margin-top: 10rem;
`;
const ProjectsContainer = styled.div`
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;
const ProjectCard = styled.div`
  width: 100%;
  height: 70vh;
  margin-bottom: 2rem;
  display: flex;
`;

const ImageHolder = styled.div`
  width: 65%;
  z-index: 5;
  img {
    width: 100%;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 35%;
  div {
    width: 100%;
    position: absolute;
    left: -20%;
    /* z-index: 5; */
    h1 {
      font-size: 8rem;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #fff;
      -webkit-text-fill-color: transparent;
      background-color: transparent;
      color: #fff;
      position: relative;
      z-index: 2;
    }
  }
`;

export default Works;
