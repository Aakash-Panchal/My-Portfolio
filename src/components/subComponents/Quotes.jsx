import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Quotes = () => {
  const [data, setData] = useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      console.error(error);
      setData({
        content:
          "It is important to our friends to believe that we are unreservedly frank with them, and important to friendship that we are not.",
      });
    }
  }

  useEffect(() => {
    updateQuote();
  }, []);

  if (!data) return null;

  return (
    <Container data-scroll-section>
      {data.content.length > 140 ? (
        <Quote>
          It is important to our friends to believe that we are unreservedly
          frank with them, and important to friendship that we are not."
        </Quote>
      ) : (
        <div>
          <Quote>{data.content}</Quote>
          {data.author && <Author title="Source Title">- {data.author}</Author>}
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
const Quote = styled.p`
  font-size: 2.5rem;
  text-align: center;
  font-style: italic;
  width: 800px;
  &::before {
    content: "❝ ";
    font-size: 2.5rem;
  }
  &::after {
    content: "❞";
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    width: 600px;
    &::before {
      font-size: 2rem;
    }
    &::after {
      font-size: 2rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
    width: 320px;
    &::before {
      font-size: 1rem;
    }
    &::after {
      font-size: 1rem;
    }
  }
`;
const Author = styled.p`
  text-align: center;
  padding-top: 1.5rem;
  opacity: 0.6;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export default Quotes;
