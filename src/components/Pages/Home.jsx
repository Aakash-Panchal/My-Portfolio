import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import FooterTitle from "../subComponents/FooterTitle";
import ProjectIMG from "../../assets/Test.png";
import { BsArrowRight } from "react-icons/bs";
import Quotes from "../subComponents/Quotes";

const Home = () => {
  return (
    <>
      <Container data-scroll-section>
        <h1>
          Hey I'm fdghfdg. <br /> What is Lorem Ipsum? <br /> text of the
          printing and typesetting industry.
        </h1>

        <Link to="/about">About</Link>
        {/* <ProjectsContainer>
          <ProjectCard>
            <ImageHolder>
              <img src={ProjectIMG} />
              <ProjectInfo>
                <h1>Project 1</h1>
                <BsArrowRight />
              </ProjectInfo>
            </ImageHolder>
          </ProjectCard>
          <ProjectCard>
            <ImageHolder>
              <img src={ProjectIMG} />
              <ProjectInfo>
                <h1>Project 2</h1>
                <BsArrowRight />
              </ProjectInfo>
            </ImageHolder>
          </ProjectCard>
          <ProjectCard>
            <ImageHolder>
              <img src={ProjectIMG} />
              <ProjectInfo>
                <h1>Project 3</h1>
                <BsArrowRight />
              </ProjectInfo>
            </ImageHolder>
          </ProjectCard>
        </ProjectsContainer> */}
      </Container>
      <Quotes />
      {/* <FooterTitle titleLink="/works" title="Recent Works" /> */}
      <Footer />
    </>
  );
};

const Container = styled.div`
  /* width: 80%; */
  margin-left: auto;
  margin-right: auto;
  /* margin-bottom: 50rem; */
  h1 {
    font-family: "VisbyRoundCF-Medium";
  }
`;
// const ProjectsContainer = styled.div`
//   margin: 0 5rem;
//   margin-bottom: 10rem;
//   display: flex;
//   flex-direction: column;
//   :nth-child(even) {
//     margin-left: auto;
//   }
//   @media (max-width: 768px) {
//     margin: 0 2rem;
//   }
// `;
// const ProjectCard = styled.div`
//   margin-bottom: 10rem;
//   :nth-child(even) {
//     margin-left: auto;
//   }
//   @media (max-width: 1024px) {
//     :nth-child(even) {
//       margin-left: 0;
//     }
//   }
// `;

// const ImageHolder = styled.div`
//   width: 60vw;
//   height: 33vw;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
//   @media (max-width: 1024px) {
//     width: 100%;
//     height: 50vh;
//   }
//   @media (max-width: 768px) {
//     width: 100%;
//     height: 40vh;
//   }
// `;

// const ProjectInfo = styled.div`
//   font-family: "Open Sans", sans-serif;
//   display: flex;
//   justify-content: space-between;
//   padding: 1.5rem 0;
//   align-items: center;
//   svg {
//     font-size: 2.5rem;
//   }
// `;

export default Home;
