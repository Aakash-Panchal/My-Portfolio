import React from "react";
import Title from "../subComponents/Title";
import FooterTitle from "../subComponents/FooterTitle";
import styled from "styled-components";
import Quotes from "../subComponents/Quotes";

const Contact = () => {
  return (
    <>
      <Container>
        <Title Title="Contact" />
      </Container>
      <FooterTitle titleLink="/works" title="Recent Works" />
    </>
  );
};

const Container = styled.div``;

export default Contact;
