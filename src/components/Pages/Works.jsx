import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import RouteTransition from "../subComponents/RouteTransition";
import Quotes from "../subComponents/Quotes";
import { Link } from "react-router-dom";
import gsap from "gsap";
import apiRequest from "../../utils/apiRequest";
import { MediaUrl } from "../../utils/MediaUrl";

const Works = ({ setViewProject, setWorkCursor }) => {
  const [projects, setProjects] = useState([]);

  const tl = gsap.timeline();

  useEffect(() => {
    apiRequest.get("projects").then((res) => {
      setProjects(res.data);
    });

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
              <ProjectCard key={index} className="project-card">
                <ImageHolder
                  onMouseEnter={() => {
                    setViewProject("View-Project");
                  }}
                  onMouseLeave={() => {
                    setViewProject(false);
                  }}
                  onClick={() => {
                    setViewProject(false);
                  }}
                >
                  <Link to={`/works/${item.url}`}>
                    <img src={MediaUrl + item.ProjectThumbnail[0].img} />
                  </Link>
                </ImageHolder>
                <ProjectInfo>
                  <h1>{item.projectTitle}</h1>
                  <a href="https://www.google.com"></a>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsContainer>
        </Content>
      </Container>
      <Quotes setWorkCursor={setWorkCursor} />
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
  width: 60vw;
  margin-bottom: 8rem;
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
  position: relative;
  border-radius: 10px;
  a {
    display: block;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    height: 35vh;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 25vh;
  }
`;

const ProjectInfo = styled.div`
  font-family: "gallientregular";
  display: flex;
  padding: 1.5rem 0;
  padding-bottom: 0;
  color: #b3cc6d;
  p {
    font-family: "Open Sans", sans-serif;
    padding: 0 0.5rem;
    opacity: 0.5;
    font-size: 1.5rem;
  }
  h1 {
    font-size: 5rem;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 1rem;
    }
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

export default Works;
