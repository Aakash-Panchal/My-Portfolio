import gsap from "gsap";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Container>
      <div className="errorDiv">
        <span>PAGE</span>
        <span>
          <div className="span404">404</div>NOT
        </span>
        <span>FOUND</span>
      </div>
      <HomeBTN className="homeBtn">
        <Link to="/">Take Me Home</Link>
      </HomeBTN>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  .errorDiv {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-left: 100px;
    opacity: 0.4;
    span {
      font-size: 250px;
      font-family: "bigillabold";
      line-height: 89%;
      overflow: hidden;
    }
    .span404 {
      display: inline-block;
      width: max-content;
      font-size: 200px;
      text-align: center;
      padding: 5px 50px;
      border-radius: 300px;
      border: 2px solid #fff;
    }
  }
`;
const HomeBTN = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 5rem;
  font-family: "bigillabold";
  a {
    font-size: 1.5rem;
    color: #fff;
    background: none;
    border-bottom: 2px solid #fff;
  }
`;
const Button = styled.button``;

export default ErrorPage;
