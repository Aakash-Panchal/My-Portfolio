import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterTitle from "../subComponents/FooterTitle";

const About = () => {
  return (
    <>
      <Container data-scroll-section>
        <HeaderImg>
          <img src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1665474643/New_Project_bogkmq.png" />
        </HeaderImg>
        <Title>about Me</Title>
        <Content className="test">
          <p>
            <span>Sapiente expedita hic obcaecati</span>
          </p>
          <p>
            <span>laboriosam similique omnis architecto ducimus</span>
          </p>
          <p>
            <span>Sapiente expedita hic obcaecati, laboriosam s</span>
          </p>
          <p>
            <span>Sapiente expedita hic obcaecati, laboriosam similique o</span>
          </p>
          <p>
            <span>necessitatibus rem vel dignissimos dolor ut</span>
          </p>
          <p>
            <span>Sapiente expedita hic obcaecati, laboriosam similique o</span>
          </p>
        </Content>
      </Container>

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
`;
const HeaderImg = styled.div`
  width: 100%;
  height: 85vh;
  padding-top: 7rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  font-family: "Roboto Mono";
  font-size: 2rem;
  padding: 3rem 0;
`;

const Content = styled.div`
  p {
    width: 100%;
    height: 80px;
    user-select: none;
    font-size: 3.5rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    /* margin-bottom: 5rem; */
    overflow: hidden;
    position: relative;
    span {
      position: absolute;
      line-height: 4.2rem;
    }
  }
`;

export default About;
