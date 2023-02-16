import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import Quotes from "../subComponents/Quotes";
import RouteTransition from "../subComponents/RouteTransition";
import gsap from "gsap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ setViewProject }) => {
  const [projects, setProjects] = useState([
    {
      projectNo: "01",
      projectImg:
        "https://res.cloudinary.com/dzsocqtuc/image/upload/v1676531319/Project%20Images/cheminHomepage_vnxpsf.png",
      ProjectTitle: "Chemin Esports",
      projectLink: "/chemin_esports",
    },
    {
      projectNo: "02",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/618f3ad5f6c6e05234740557_sarnco-mark.jpg",
      ProjectTitle: "Univ",
      projectLink: "/",
    },
    {
      projectNo: "03",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Oxygen",
      projectLink: "/",
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
                  Hey i'm Aakash <br />I am a Frontend web developer & UI/UX
                  Designer from India.
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
              <p>Recent</p>
              <p>Projects</p>
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
                  <Link to={"works" + item.projectLink}>
                    <img src={item.projectImg} />
                  </Link>
                </ImageHolder>
                <ProjectInfo>
                  <p>{item.projectNo}</p>
                  <h1>{item.ProjectTitle}</h1>
                  <a href="https://www.google.com"></a>
                </ProjectInfo>
              </ProjectCard>
            ))}
            <ViewAllBtn>
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
                to="/works"
              >
                <span>View All</span>
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
            </ViewAllBtn>
          </ProjectsSection>
        </Content>
      </Container>
      <Quotes setViewProject={setViewProject} />
      {/* <FooterTitle titleLink="/works" title="Recent Works" /> */}
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
    height: 90vh;

    font-size: 15vw;
    div {
      text-align: center;
      :nth-child(2) {
        text-align: center;
      }
    }
  }
`;

const AboutSection = styled.section`
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
    height: 100%;
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
        font-size: clamp(1rem, 5vw, 3.5rem);
      }
    }
  }
  @media (max-width: 1024px) {
    margin-bottom: 5rem;
    height: 40vh;
    width: 90%;
    .imageHolder {
      display: none;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
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
    width: 100%;
    margin: 2rem 0rem;
  }
`;

const ProjectsSection = styled.section``;

const ProjectTitle = styled.div`
  font-size: clamp(5rem, 15vw, 13rem);
  font-family: "gallientregular";
  line-height: 1;
  padding-bottom: 15vh;
  p {
    :last-child {
      padding-left: 20vw;
    }
  }
`;

const ProjectCard = styled.div`
  width: 60vw;
  margin-bottom: 8rem;
  :nth-child(even) {
    margin-left: auto;
  }
  /* :nth-last-child(2) {
    margin-bottom: 0;
  } */
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
  border-radius: 15px;
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
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const ViewAllBtn = styled.div`
  font-family: "gallientregular";
  font-size: 10rem;
  display: flex;
  align-items: center;
  margin-top: 10rem;
  a {
    color: #fff;
  }
  span {
    padding-right: 3rem;
  }
  svg {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 1024px) {
    font-size: 5rem;
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
    font-size: 2.5rem;
  }
`;

export default Home;
