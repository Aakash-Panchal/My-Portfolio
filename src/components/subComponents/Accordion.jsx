import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import styled from "styled-components";
import Data from "./TempData";

const Accordion = () => {
  const [active, setActive] = useState(false);

  const toggle = (index) => {
    if (active == index) {
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
                    ? { maxHeight: "999999px" }
                    : { maxHeight: "" }
                }
              >
                <p>
                  {/* {active === index ? <p> */}
                  {item.content}
                  {/* </p> : null} */}
                </p>
              </DropDown>
            </Content>
          );
        })}
      </Container>
    </AccordionSection>
  );
};

const AccordionSection = styled.div`
  width: 60%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Container = styled.div``;
const Content = styled.div`
  border-bottom: 1px solid #fff;
  padding: 1.5rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;
const DropDown = styled.div`
  overflow: hidden;
  height: auto;
  max-height: 0px;
  transition: 0.5s max-height ease-in-out;
`;

export default Accordion;
