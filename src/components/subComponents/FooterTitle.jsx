import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterTitle = ({ title, titleLink }) => {
  return (
    <Title data-scroll-section>
      <Link
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
        to={titleLink}
      >
        {title}
      </Link>
      <Link
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
        to={titleLink}
      >
        {title}
      </Link>
      <Link
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
        to={titleLink}
      >
        {title}
      </Link>
      <Link
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
        to={titleLink}
      >
        {title}
      </Link>
      <Link
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
        to={titleLink}
      >
        {title}
      </Link>
      <Link
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
        to={titleLink}
      >
        {title}
      </Link>
      <Link
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
        to={titleLink}
      >
        {title}
      </Link>
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
    padding: 0 10rem;
    &:first-letter {
      font-style: italic;
    }
  }
  @media screen and (max-width: 768px) {
    height: 10rem;
    a {
      font-size: 3rem;
      padding: 0 2rem;
    }
  }
`;

export default FooterTitle;
