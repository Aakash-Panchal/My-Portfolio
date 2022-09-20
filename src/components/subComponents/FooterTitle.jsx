import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterTitle = ({ title, titleLink }) => {
  return (
    <Title data-scroll-section>
      <Link to={titleLink}>{title}</Link>
      <Link to={titleLink}>{title}</Link>
      <Link to={titleLink}>{title}</Link>
      <Link to={titleLink}>{title}</Link>
      <Link to={titleLink}>{title}</Link>
      <Link to={titleLink}>{title}</Link>
      <Link to={titleLink}>{title}</Link>
    </Title>
  );
};

const Title = styled.div`
  min-width: 100%;
  height: 25rem;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  a {
    color: #fff;
    font-size: 8rem;
    animation: slide-left 5s linear infinite;
    padding: 0 10rem;
    &:first-letter {
      font-style: italic;
    }
  }

  @keyframes slide-left {
    from {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    to {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;

export default FooterTitle;
