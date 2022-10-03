import React from "react";
import styled from "styled-components";

const Project = () => {
  const projects = {
    projectTitle: "Chemin Esports",
    projectImg:
      "https://res.cloudinary.com/dzsocqtuc/image/upload/v1664706832/Screenshot_2022-10-02_at_16-03-32_Chemin_Esports_dqmaow.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    review:
      "ly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  };

  return (
    <Container>
      <Title>{projects.projectTitle}</Title>
      <Content>
        <ProjectImage>
          <a>
            <img src={projects.projectImg} />
          </a>
        </ProjectImage>
        <ProjectDesc>
          <p>{projects.desc}</p>
        </ProjectDesc>
        <Review>
          <p>{projects.review}</p>
        </Review>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 5rem;
  font-family: "Inter", sans-serif;
`;
const Title = styled.div`
  height: 40vh;
  display: flex;
  align-items: flex-end;
  font-size: 5rem;
  font-weight: 600;
`;
const Content = styled.div`
  margin-top: 5rem;
`;
const ProjectImage = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
const ProjectDesc = styled.div``;

const Review = styled.div``;

export default Project;
