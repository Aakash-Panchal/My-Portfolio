import React from "react";
import styled from "styled-components";
import Footer from "../subComponents/Footer";
import FooterTitle from "../subComponents/FooterTitle";
import Quotes from "../subComponents/Quotes";

const Contact = () => {
  return (
    <>
      <Container data-scroll-section>
        <Title>Let’s collaborate</Title>
        <Content>
          <Form>
            <hr />
            <div className="name-input">
              <span>01</span>
              <div className="input-content">
                <label>What's your name?</label>
                <input placeholder="Your name" required></input>
              </div>
            </div>
            <hr />
            <div className="email-input">
              <span>02</span>
              <div className="input-content">
                <label>What's your email?</label>
                <input placeholder="example@example.com*" required></input>
              </div>
            </div>
            <hr />
            <div className="subject-input">
              <span>03</span>
              <div className="input-content">
                <label>Subject</label>
                <input
                  placeholder="I want a full stack web developer"
                  required
                ></input>
              </div>
            </div>
            <hr />
            <div className="message-input">
              <span>04</span>
              <div className="input-content">
                <label>Your message</label>
                <textarea placeholder="Your message*" required></textarea>
              </div>
            </div>
            <hr />

            <Button>
              <button>Send</button>
            </Button>
          </Form>
          <ContactInfo>
            <ContactEmail>
              <h1>Email</h1>
              <a href="mailto:aakash@cleverstudio.in">aakash@cleverstudio.in</a>
            </ContactEmail>
            <Socials>
              <h1>Socials</h1>
              <a href="/" target="_blank">
                Instagram
              </a>
              <a href="/" target="_blank">
                Github
              </a>
              <a href="/" target="_blank">
                Twitter
              </a>
              <a href="/" target="_blank">
                Discord
              </a>
            </Socials>
          </ContactInfo>
        </Content>
      </Container>
      {/* <Quotes /> */}
      <FooterTitle title="Works" />
      <Footer
        FooterTitle="Love Projects?"
        FooterLink="/works"
        FooterLinkTitle="Have a look on mine"
      />
    </>
  );
};

const Container = styled.div`
  margin: 0 8rem;
  font-family: "Inter", sans-serif;
  span {
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
    font-size: 1rem;
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
    font-size: 1.6rem;
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
  height: 40vh;
  display: flex;
  align-items: end;
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 6rem;
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
    height: 30vh;
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
  padding: 3rem;
  padding-left: 0;
  button {
    color: #fff;
    background: transparent;
    border-radius: 50%;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    padding: 0.5rem 3rem;
    font-weight: 600;
    border: 1px solid #fff;
  }
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

export default Contact;
