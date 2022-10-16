import React from "react";
import styled from "styled-components";
import Accordion from "../subComponents/Accordion";
import Footer from "../subComponents/Footer";
import FooterTitle from "../subComponents/FooterTitle";
import { MagneticButton } from "../subComponents/MagneticButton";
import Quotes from "../subComponents/Quotes";

const Contact = ({ setViewProject }) => {
  return (
    <>
      <Container data-scroll-section>
        <Title>Let's talk about your next project</Title>
        <Content>
          <Form>
            <hr />
            <div className="name-input">
              <p>01</p>
              <div className="input-content">
                <label>What's your name?</label>
                <input placeholder="Enter your name here" required></input>
              </div>
            </div>
            <hr />
            <div className="email-input">
              <p>02</p>
              <div className="input-content">
                <label>What's your email?</label>
                <input placeholder="Enter your email here" required></input>
              </div>
            </div>
            <hr />
            <div className="subject-input">
              <p>03</p>
              <div className="input-content">
                <label>What do you want to get done?</label>
                <input placeholder="Enter your ..." required></input>
              </div>
            </div>
            <hr />
            <div className="subject-input">
              <p>04</p>
              <div className="input-content">
                <label>How did you find me?</label>
                <input
                  placeholder="I want a full stack web developer"
                  required
                ></input>
              </div>
            </div>
            <hr />
            <div className="message-input">
              <p>05</p>
              <div className="input-content">
                <label>Your message</label>
                <textarea placeholder="Your message*" required></textarea>
              </div>
            </div>
            <hr />
            <Button>
              <MagneticButton
                className="button-1"
                style={{ backgroundColor: "transparent" }}
                scale={2}
                tollerance={0.8}
                speed={0.3}
                borderRadius="50%"
              >
                <MagneticButton
                  className="button-1"
                  scale={4}
                  tollerance={1}
                  speed={0.5}
                  borderRadius="50%"
                >
                  Send
                </MagneticButton>
              </MagneticButton>
            </Button>
          </Form>
          <ContactInfo>
            <ContactEmail>
              <h1>Email</h1>
              <a href="mailto:aakash@cleverstudio.in">aakash@cleverstudio.in</a>
            </ContactEmail>
            <Socials>
              <h1>Socials</h1>
              <a href="https://www.instagram.com/ig__drew/" target="_blank">
                Instagram
              </a>
              <a href="https://github.com/Aakash-Panchal" target="_blank">
                Github
              </a>
              <a href="https://twitter.com/AakashPanchal__" target="_blank">
                Twitter
              </a>
              <a href="https://twitter.com/AakashPanchal__" target="_blank">
                Linkedin
              </a>
              <a
                href="https://discordapp.com/users/501734272328007681"
                target="_blank"
              >
                Discord
              </a>
            </Socials>
          </ContactInfo>
        </Content>
        <SubContent>
          <SubTitle>Frequently asked questions</SubTitle>
          <Accordion />
        </SubContent>
      </Container>
      <Quotes setViewProject={setViewProject} />
      <FooterTitle title="Works" titleLink="/works" />
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
  p {
    opacity: 0.5;
    font-size: 1rem;
    font-weight: 600;
    padding-top: 0.2rem;
    padding-right: 1rem;
  }
  input,
  textarea {
    width: 100%;
    resize: none;
    padding: 1rem;
    padding-left: 0;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
    background: none;
    color: #fff;
    border: none;
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }
  label {
    display: flex;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .input-content {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin: 0 6rem;
    label {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 768px) {
    margin: 0 2rem;
    label {
      font-size: 1.1rem;
    }
  }
`;

const Title = styled.div`
  height: 60vh;
  display: flex;
  align-items: end;
  font-size: 6vw;
  font-weight: 600;
  margin-bottom: 6rem;
  width: 50vw;
  font-family: "gallientregular";
  span {
    padding-right: 0.6rem;
    font-style: italic;
  }
  @media (max-width: 1024px) {
    height: 30vh;
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-left: 0rem;
    margin-bottom: 4rem;
    height: 40vh;
  }
`;
const Content = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  width: 60rem;
  padding-right: 5rem;
  padding-bottom: 1rem;
  .name-input,
  .email-input,
  .subject-input,
  .message-input {
    display: flex;
    padding: 2.3rem 0;
    padding-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding-right: 0;
  }
`;

const Button = styled.div`
  width: 220px;
  margin: 2rem -3.5rem;
`;

const ContactInfo = styled.div``;
const ContactEmail = styled.div`
  h1 {
    font-size: 1.5rem;
  }
  a {
    display: block;
    font-weight: 600;
    opacity: 0.6;
    letter-spacing: 1px;
    padding: 0.6rem 0;
    padding-top: 0.4rem;
    color: #fff;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 1.3rem;
    }
  }
`;
const Socials = styled.div`
  margin-top: 1rem;
  h1 {
    font-size: 1.4rem;
  }
  a {
    display: block;
    color: #fff;
    padding: 0.4rem 0;
    font-weight: 600;
    opacity: 0.6;
    &:nth-child(2) {
      padding-top: 0.8rem;
    }
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;

const SubContent = styled.div``;

const SubTitle = styled.h1`
  font-family: "gallientregular";
  font-size: 4vw;
  height: 25vh;
  display: flex;
  align-items: center;
  width: 40vw;
  margin-bottom: 3rem;
`;

export default Contact;
