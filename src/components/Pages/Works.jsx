import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import RouteTransition from "../subComponents/RouteTransition";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Works = ({ setViewProject }) => {
  const [projects, setProjects] = useState([
    {
      projectRank: "01",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Chemin Esports",
    },
    {
      projectRank: "02",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/618f3ad5f6c6e05234740557_sarnco-mark.jpg",
      ProjectTitle: "Project Oxygen",
    },
    {
      projectRank: "03",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Lemon Juice",
    },
    {
      projectRank: "04",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Project Width",
    },
    {
      projectRank: "05",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Alive",
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

    // tl.from(".project-card", {
    //   duration: 1.8,
    //   y: 100,
    //   opacity: 0,
    //   ease: "power4.out",
    //   skewY: 7,
    //   stagger: {
    //     amount: 0.3,
    //   },
    // });
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
                  <Link to="/works/54">
                    <img src={item.projectImg} />
                  </Link>
                </ImageHolder>
                <ProjectInfo>
                  <p>{item.projectRank}</p>
                  <h1>{item.ProjectTitle}</h1>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsContainer>
          <ContactContainer>
            <h1>
              Have a <br /> project in mind?
            </h1>
            <p>Lets work To?</p>
          </ContactContainer>
        </Content>
      </Container>
      {/* <Footer setViewProject={setViewProject} /> */}
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
  margin-bottom: 8rem;
  :nth-child(odd) {
    margin-left: auto;
  }
  :last-child {
    margin-bottom: 0;
  }
  @media (max-width: 1024px) {
    width: 100%;
    :nth-child(odd) {
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
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* clip-path: inset(0 100% 0 0);
    transition: all 1.2s cubic-bezier(0.77, 0, 0.175, 1);
    scale: 1.3; */
  }
  /* .is-inview {
    clip-path: inset(0 0 0 0);
    scale: 1;
  } */

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
`;

const ContactContainer = styled.div`
  margin: 0 5rem;
  h1 {
    font-family: "gallientregular";
    font-size: 10rem;
    line-height: 0.8;
  }
  p {
    line-height: 2;
  }
`;

export default Works;
