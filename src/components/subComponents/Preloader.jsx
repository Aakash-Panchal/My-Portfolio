import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Preloader = () => {
  const tl = gsap.timeline({ paused: true });

  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  useEffect(() => {
    tl.from(".loader-wrap-heading h1", {
      delay: 1,
      y: 200,
      skewY: 10,
    }).to(".loader-wrap-heading h1", {
      delay: 1.5,
      y: -200,
      skewY: 10,
    });
    tl.to(".svgPath", {
      duration: 0.8,
      attr: { d: curve },
      ease: "power2.easeIn",
    }).to(".svgPath", {
      duration: 0.8,
      attr: { d: flat },
      ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
      y: -1500,
    });
    tl.to(".loader-wrap", {
      zIndex: -1,
      display: "none",
    });
  }, []);

  useEffect(() => {
    tl.play();
  }, []);
  return (
    <Container className="loader-wrap">
      <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path
            className="svgPath"
            id="svg"
            d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
          ></path>
        </svg>

        <div className="loader-wrap-heading">
          <span>
            <h1>Loading</h1>
          </span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  font-family: "gallientregular";
  span {
    overflow: hidden;
    display: block;
  }
  .loader-wrap {
    position: absolute;
    z-index: 10;
    height: 100vh;
    width: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
  .loader-wrap svg {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 110vh;
    fill: #fff;
  }
  .loader-wrap .loader-wrap-heading h1 {
    font-size: 120px;
    z-index: 20;
    color: #e0e0e0;
    text-transform: uppercase;
    font-weight: lighter;
    color: #101010;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  }
  .container h1 {
    font-weight: lighter;
    font-size: 100px;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    .loader-wrap svg {
      width: 200vw;
      margin-left: -50vw;
    }
    .loader-wrap .loader-wrap-heading,
    .container h1 {
      font-size: 60px;
    }
    .loader-wrap .loader-wrap-heading h1 {
      font-size: 3rem;
    }
  }
`;

export default Preloader;
