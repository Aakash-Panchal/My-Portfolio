import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return (
    <Container>
      <h1>{props.Title}</h1>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    opacity: 0.7;
  }
`;

export default Title;
