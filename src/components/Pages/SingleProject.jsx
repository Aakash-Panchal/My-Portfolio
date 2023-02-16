import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../subComponents/Footer";
import Quotes from "../subComponents/Quotes";
import RouteTransition from "../subComponents/RouteTransition";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdLink } from "react-icons/io";
import { useRef } from "react";
import "swiper/css";

const SingleProject = ({ setViewProject }) => {
  const projects = {
    projectTitle: "Chemin Esports",
    projectImg:
      "https://res.cloudinary.com/dzsocqtuc/image/upload/v1676531319/Project%20Images/cheminHomepage_vnxpsf.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,and scrambled it to make a type specimen book.text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    review:
      "ly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
    siteLink: "https://cheminesports.com",
  };

  const swiperRef = useRef();

  return (
    <RouteTransition>
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
            <ItemWrapper>
              <p>Vist Site :</p>
              <a href={projects.siteLink} target="_blank">
                Click Here <IoMdLink />
              </a>
            </ItemWrapper>
          </Info>
          <ProjectImage>
            <Swiper ref={swiperRef} spaceBetween={50} slidesPerView={1.3}>
              <SwiperSlide>
                <img src={projects.projectImg} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1676533117/Project%20Images/infCHeminHomePage_ucycaz.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={projects.projectImg} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={projects.projectImg} />
              </SwiperSlide>
            </Swiper>
            <SlideButton>
              <div
                className="prev"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <AiOutlineArrowLeft /> Previous
              </div>
              <div
                className="next"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                Next
                <AiOutlineArrowRight />
              </div>
            </SlideButton>
          </ProjectImage>
          <ProjectDesc>
            <p>{projects.desc}</p>
          </ProjectDesc>
          {/* 
          <Review>
            <p>What they think about me</p>
            <p>{projects.review}</p>
          </Review> */}
        </Content>
      </Container>
      {/* <FooterTitle titleLink="/works" title="Recent Works" /> */}
      <Quotes />
      <Footer setViewProject={setViewProject} />
    </RouteTransition>
  );
};

const Container = styled.div`
  margin: 0 6rem;
  font-family: "Inter", sans-serif;
  @media (max-width: 1024px) {
    margin: 0 4rem;
  }
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;
const Title = styled.div`
  height: 40vh;
  display: flex;
  align-items: flex-end;
  font-size: 6rem;
  font-weight: 600;
  font-family: "gallientregular";

  @media (max-width: 768px) {
    height: 35vh;
    font-size: 4rem;
  }
`;
const Content = styled.div`
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const Info = styled.div`
  width: 80%;
  height: 20vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 2rem;
  }
`;

const ItemWrapper = styled.div`
  font-family: "Roboto Mono";
  a,
  p {
    padding: 0.6rem 0;
    :first-child {
      font-size: 1.1rem;
      opacity: 0.6;
    }
    font-size: 1.3rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    svg {
      margin-left: 0.5rem;
      font-size: 1.5rem;
    }
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

  .prev,
  .next {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .prev {
    svg {
      margin-right: 0.5rem;
    }
  }
  .next {
    margin-right: 0;
    svg {
      margin-right: 0;
      margin-left: 0.5rem;
    }
  }
`;

const ProjectDesc = styled.div`
  font-size: 1.6rem;
  opacity: 0.6;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default SingleProject;
