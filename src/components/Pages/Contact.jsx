import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../subComponents/Accordion";
import { MagneticButton } from "../subComponents/MagneticButton";
import RouteTransition from "../subComponents/RouteTransition";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import apiRequest from "../../utils/apiRequest";

const Contact = () => {
  const formRef = useRef();
  const socialRef = useRef();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    work: "",
    my_info: "",
    message: "",
  });

  const toastOptions = {
    position: "bottom-right",
    pauseOnHover: true,
    theme: "dark",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  const FaqContent = [
    {
      title: "I want to work with you, how do we get started?",
      content: `To start a new project just fill in the contact form and let me know what you want to get done.`,
    },
    {
      title: "What information do you need from me to get started?",
      content: `I'll need a clear understanding of your goals and objectives, your target audience, your branding, and any content or assets you want to include on your website. We'll work together to create a detailed project brief that outlines your requirements and expectations.`,
    },
    {
      title: "What kind of websites do you create?",
      content: `I can create a wide variety of websites, including business websites, e-commerce sites, blogs, landing pages, and custom web applications.`,
    },
    {
      title: "Will my website be mobile-friendly?",
      content:
        "Yes, I'll ensure that your website is fully mobile-responsive and looks great on all devices, including smartphones, tablets, and desktop computers.",
    },
  ];

  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".contact-title span", {
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
    tl.from(formRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      delay: "-1",
      skewY: 7,
    });
    tl.from(socialRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      skewY: 7,
    });
  }, []);

  const handelChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toastId = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    toastId.current = toast.loading("Sending...", toastOptions);
    apiRequest
      .post("sendemail", {
        inputs,
      })
      .then((res) => {
        toast.update(toastId.current, {
          render: res.data.Message,
          type: "success",
          isLoading: false,
          autoClose: 3000,
          hideProgressBar: true,
        });
        e.target.reset();
      })
      .catch((error) => {
        toast.update(toastId.current, {
          render: "There was an error...",
          type: "error",
          isLoading: "false",
          autoClose: 3000,
          hideProgressBar: true,
        });
      });
  };

  return (
    <RouteTransition>
      <ToastContainer />
      <Container className="scrollContainer" data-scroll-section>
        <Title className="contact-title">
          <span>Let's talk about</span>
          <span>your next project</span>
        </Title>
        <Content>
          <Form ref={formRef} onSubmit={sendEmail}>
            <hr />
            <div className="name-input">
              <Counter>01</Counter>
              <div className="input-content">
                <label>What's your name?</label>
                <input
                  placeholder="Enter your name here"
                  name="name"
                  required
                  onChange={handelChange}
                ></input>
              </div>
            </div>
            <hr />
            <div className="email-input">
              <Counter>02</Counter>
              <div className="input-content">
                <label>What's your email?</label>
                <input
                  placeholder="Enter your email here"
                  name="email"
                  required
                  onChange={handelChange}
                ></input>
              </div>
            </div>
            <hr />
            <div className="subject-input">
              <Counter>03</Counter>
              <div className="input-content">
                <label>What do you want to get done?</label>
                <input
                  placeholder="Web Development?"
                  name="work"
                  onChange={handelChange}
                  required
                ></input>
              </div>
            </div>
            <hr />
            <div className="subject-input">
              <Counter>04</Counter>
              <div className="input-content">
                <label>How did you find me?</label>
                <input
                  placeholder="From google search?"
                  name="my_info"
                  onChange={handelChange}
                  required
                ></input>
              </div>
            </div>
            <hr />
            <div className="message-input">
              <Counter>05</Counter>
              <div className="input-content">
                <label>Your message</label>
                <textarea
                  placeholder="Your message*"
                  name="message"
                  onChange={handelChange}
                  required
                ></textarea>
              </div>
            </div>
            <hr />
            <Button type="submit">
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
            <Socials ref={socialRef}>
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
          <SubTitle className="sub-title">
            <span className="line-1">Frequently</span>
            <span>asked questions</span>
          </SubTitle>
          {FaqContent.map((item, index) => {
            return (
              <Accordion
                key={index}
                title={item.title}
                AccordionContent={item.content}
              />
            );
          })}
        </SubContent>
      </Container>
    </RouteTransition>
  );
};

const Container = styled.div`
  margin: 0 10rem;
  font-family: "Inter", sans-serif;
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
      font-size: 1rem;
    }
  }
`;

const Title = styled.div`
  height: 60vh;
  display: flex;
  justify-content: end;
  flex-direction: column;
  font-size: 6vw;
  font-weight: 600;
  margin-bottom: 6rem;
  width: 50vw;
  font-family: "gallientregular";
  span {
    width: 100%;
    display: block;
    overflow: hidden;
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
    letter-spacing: 2px;
    width: 90vw;
  }
`;
const Content = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  width: 70rem;
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
    input {
      font-size: 0.8rem;
      padding: 0.4rem;
      padding-left: 0;
    }
  }
`;

const Counter = styled.p`
  opacity: 0.5;
  font-size: 1rem;
  font-weight: 600;
  padding-top: 0.2rem;
  padding-right: 1rem;
`;

const Button = styled.button`
  width: 220px;
  margin: 2rem -3.5rem;
  background: none;
  outline: none;
  border: none;
  @media (max-width: 768px) {
    width: 120px;
    margin: 2rem 0rem;
  }
`;

const ContactInfo = styled.div``;

const Socials = styled.div`
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

const SubContent = styled.div`
  padding-bottom: 10rem;
`;

const SubTitle = styled.h1`
  font-family: "gallientregular";
  font-size: 4vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    height: 18vh;
    justify-content: flex-end;
    font-size: 2.5rem;
    margin: 2rem 0;
    letter-spacing: 2px;
    width: 90vw;
  }
`;

export default Contact;
