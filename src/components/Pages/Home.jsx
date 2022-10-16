import React from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import FooterTitle from "../subComponents/FooterTitle";
import Quotes from "../subComponents/Quotes";

const Home = ({ setViewProject }) => {
  return (
    <>
      <Container data-scroll-section>
        <Content>
          <Header>
            <div>CREATIVE</div>
            <div>DESIGNER</div>
            <div>DEVELOPER</div>
          </Header>
          <AboutSection>
            <div>
              <p>
                <span>Hey i'm Aakash</span>
                <span>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s
                </span>
              </p>
            </div>
          </AboutSection>
        </Content>
      </Container>
      <Quotes setViewProject={setViewProject} />
      <FooterTitle titleLink="/works" title="Recent Works" />
      <Footer
        setViewProject={setViewProject}
        FooterTitle="Have a project in mind?"
        FooterLink="/contact"
        FooterLinkTitle="Contact me"
      />
    </>
  );
};

const Container = styled.div`
  margin: 0 6rem;
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
`;

const AboutSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
      }
    }
  }
`;

export default Home;
