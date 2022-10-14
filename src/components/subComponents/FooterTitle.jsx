import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterTitle = ({ title, titleLink }) => {
  return (
    <Title data-scroll-section>
      <Link
        to={titleLink}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="12"
      >
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
        {title} <span>{title}</span>
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
        {title} <span>{title}</span>
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
      </Link>
      <Link
        to={titleLink}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-6"
      >
        <span>{title} </span>
        {title}
        <span>{title} </span>
        {title} <span>{title} </span>
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
        {title} <span>{title}</span>
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
      </Link>
      <Link
        to={titleLink}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="12"
      >
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
        {title} <span>{title}</span>
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
        {title} <span>{title}</span>
        {title} <span>{title}</span>
        {title}
        <span>{title}</span>
      </Link>
    </Title>
  );
};

const Title = styled.div`
  font-family: "Open Sans", sans-serif;
  margin: 10rem 0;
  min-width: 100%;
  overflow: hidden;
  a {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    justify-content: center;
    align-items: flex-start;
    text-transform: uppercase;
    flex-shrink: 0;
    font-size: 6rem;
    font-weight: 700;
    letter-spacing: 2px;
    display: flex;
    width: 200vw;
    flex-wrap: nowrap;
    white-space: nowrap;
    color: #fff;
    span {
      opacity: 0.3;
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    a {
      font-size: 3rem;
    }
  }
`;

export default FooterTitle;
