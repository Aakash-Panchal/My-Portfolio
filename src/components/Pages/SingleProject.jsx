import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import FooterTitle from "../subComponents/FooterTitle";
import Footer from "../subComponents/Footer";
import Quotes from "../subComponents/Quotes";

const SingleProject = () => {
  const projects = {
    projectTitle: "Chemin Esports",
    projectImg:
      "https://res.cloudinary.com/dzsocqtuc/image/upload/v1664706832/Screenshot_2022-10-02_at_16-03-32_Chemin_Esports_dqmaow.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,and scrambled it to make a type specimen book.text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    review:
      "ly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  };

  return (
    <>
      <Container data-scroll-section>
        <Title>{projects.projectTitle}</Title>
        <Content>
          <Info>
            <ItemWrapper>
              <p>Service :</p>
              <p>Web Development</p>
            </ItemWrapper>
            <ItemWrapper>
              <p>Started :</p>
              <p>10 Sep 2022</p>
            </ItemWrapper>
            <ItemWrapper>
              <p>Completed :</p>
              <p>10 Oct 2022</p>
            </ItemWrapper>
          </Info>
          <ProjectDesc>
            <p>{projects.desc}</p>
          </ProjectDesc>
          <ProjectImage>
            <a>
              <img src={projects.projectImg} />
            </a>
            <SlideButton>
              <Prev>
                <AiOutlineArrowLeft /> Previous
              </Prev>
              <Next>
                Next
                <AiOutlineArrowRight />
              </Next>
            </SlideButton>
          </ProjectImage>

          <Review>
            <p>What they think about me</p>
            <p>{projects.review}</p>
          </Review>
        </Content>
      </Container>
      <Quotes />
      <FooterTitle titleLink="/works" title="Recent Works" />
      <Footer
        FooterTitle="Have a project in mind?"
        FooterLink="/contact"
        FooterLinkTitle="Contact me"
      />
    </>
  );
};

const Container = styled.div`
  margin: 0 10rem;
  font-family: "Inter", sans-serif;
`;
const Title = styled.div`
  height: 40vh;
  display: flex;
  align-items: flex-end;
  font-size: 4rem;
  font-weight: 600;
  font-family: "Roboto Mono";
`;
const Content = styled.div`
  margin-top: 5rem;
`;

const Info = styled.div`
  width: 80%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  font-family: "Roboto Mono";
  p {
    padding: 0.6rem 0;
    :first-child {
      font-size: 1.1rem;
      opacity: 0.6;
    }
    font-size: 1.3rem;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const SlideButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
`;
const Prev = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
`;
const Next = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
  svg {
    margin-right: 0;
    margin-left: 0.5rem;
  }
`;
const ProjectDesc = styled.div`
  font-size: 1.6rem;
  opacity: 0.6;
  margin-bottom: 5rem;
`;

const Review = styled.div`
  p {
    opacity: 0.6;
    font-size: 3rem;
    &:nth-child(1) {
      opacity: 1;
      font-size: 2rem;
    }
  }
`;

export default SingleProject;
