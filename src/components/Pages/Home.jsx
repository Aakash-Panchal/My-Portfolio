import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import FooterTitle from "../subComponents/FooterTitle";
import Quotes from "../subComponents/Quotes";
import RouteTransition from "../subComponents/RouteTransition";
import gsap from "gsap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ setViewProject }) => {
  const [projects, setProjects] = useState([
    {
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Project 1",
    },
    {
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/618f3ad5f6c6e05234740557_sarnco-mark.jpg",
      ProjectTitle: "Project 2",
    },
    {
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Project 3",
    },
  ]);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".hero-title div", {
      duration: 1.8,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.4,
      },
    });
  }, []);

  return (
    <RouteTransition>
      <Container data-scroll-section>
        <Content>
          <Header className="hero-title" data-scroll data-scroll-speed="2">
            <div>CREATIVE</div>
            <div>DESIGNER</div>
            <div>DEVELOPER</div>
          </Header>
          <AboutSection>
            <div className="imageHolder" data-scroll>
              <img
                data-scroll
                data-scroll-speed="3"
                className="image one"
                src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1668070795/Portfolio/index_ph3l7j.jpg"
              />
              <img
                data-scroll
                data-scroll-speed="1"
                className="image two"
                src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1668070794/Portfolio/indexs_ksz2lr.jpg"
              />
              <img
                data-scroll
                data-scroll-speed="3  "
                className="image three"
                src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1668070794/Portfolio/insdex_z7ewkd.jpg"
              />
            </div>
            <div>
              <p>
                <span>
                  Hey i'm Aakash <br />I am a full stack web developer & UI/UX
                  Designer from India, dummy text of the printing and
                </span>
              </p>
              <Button>
                <Link
                  onMouseEnter={() => {
                    setViewProject("invert-cursor");
                  }}
                  onMouseLeave={() => {
                    setViewProject(false);
                  }}
                  onClick={() => {
                    setViewProject(false);
                  }}
                  to="/about"
                >
                  <span>About Me</span>
                  <svg
                    width="37"
                    height="17"
                    viewBox="0 0 37 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z"
                      fill="#b3cc6d"
                    ></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </AboutSection>
          <ProjectsSection>
            <ProjectTitle>
              <p data-scroll data-scroll-speed="1">
                Recent
              </p>
              <p data-scroll data-scroll-speed="2">
                Projects
              </p>
            </ProjectTitle>
            {projects.slice(0, 3).map((item, index) => (
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
                    <Filter />
                    <img src={item.projectImg} />
                  </Link>
                </ImageHolder>
                <ProjectInfo>
                  <h1>{item.ProjectTitle}</h1>
                  <a href="https://www.google.com">
                    <svg
                      width="37"
                      height="17"
                      viewBox="0 0 37 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z"
                        fill="#b3cc6d"
                      ></path>
                    </svg>
                  </a>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsSection>
        </Content>
      </Container>
      <Quotes setViewProject={setViewProject} />
      <FooterTitle titleLink="/works" title="Recent Works" />
      <Footer setViewProject={setViewProject} />
    </RouteTransition>
  );
};

const Container = styled.div`
  margin: 0 6rem;
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const Content = styled.div`
  padding-top: 2.5rem;
`;
const Header = styled.div`
  height: 100vh;
  user-select: none;
  font-family: "gallientregular";
  font-size: 13vw;
  line-height: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  div {
    :nth-child(2) {
      text-align: right;
    }
  }
  @media (max-width: 768px) {
    font-size: 15vw;
    div {
      text-align: center;
      :nth-child(2) {
        text-align: center;
      }
    }
  }
`;

const AboutSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "gallientregular";
  text-align: center;
  width: 60%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 10rem;
  .imageHolder {
    width: 80vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
    .image {
      display: block;
      position: absolute;
      width: 15rem;
      opacity: 0.5;
      rotate: 10deg;
    }
    .two {
      top: 25%;
      rotate: -10deg;
      right: 0;
    }
    .three {
      bottom: 0;
    }
  }
  div {
    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-weight: 600;
        font-size: 3.5rem;
      }
    }
  }
`;

const Button = styled.div`
  margin: 0 auto;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  a {
    color: #fff;
    svg {
      margin-left: 1rem;
    }
  }
  @media (max-width: 768px) {
    width: 120px;
    margin: 2rem 0rem;
  }
`;

const ProjectsSection = styled.div``;
const ProjectTitle = styled.div`
  font-size: clamp(5rem, 15vw, 13rem);
  font-family: "gallientregular";
  line-height: 1;
  padding-bottom: 10vh;
  p {
    :last-child {
      padding-left: 20vw;
    }
  }
`;

const ProjectCard = styled.div`
  width: 60vw;
  margin-bottom: 6rem;
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
  position: relative;
  a {
    display: block;
  }
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

const Filter = styled.div`
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(1, 1, 1, 0.06) 48%,
    #0b0b0b
  );
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`;

const ProjectInfo = styled.div`
  font-family: "gallientregular";
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  padding-bottom: 0;
  align-items: center;
  color: #b3cc6d;
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

export default Home;
