import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import styled from "styled-components";
import Data from "./Data";

const Accordion = () => {
  const [active, setActive] = useState(false);

  const toggle = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

  return (
    <AccordionSection>
      <Container>
        {Data.map((item, index) => {
          return (
            <Content key={index}>
              <Wrapper onClick={() => toggle(index)}>
                <h1>{item.title}</h1>
                <span>{active === index ? <FiMinus /> : <FiPlus />}</span>
              </Wrapper>
              <DropDown
                style={
                  active === index
                    ? { maxHeight: "fit-content" }
                    : { maxHeight: "" }
                }
              >
                {/* {active === index ? <p> */}
                {item.content}
                {/* </p> : null} */}
              </DropDown>
            </Content>
          );
        })}
      </Container>
    </AccordionSection>
  );
};

const AccordionSection = styled.div``;
const Container = styled.div``;
const Content = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const DropDown = styled.div`
  overflow: hidden;
  transition: 1s all ease-in-out;
  height: 0px;
`;

export default Accordion;
