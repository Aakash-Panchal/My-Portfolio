import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = ({ FooterTitle, FooterLinkTitle, FooterLink }) => {
  return (
    <Container data-scroll-section>
      <Content>
        <Title>
          <h1>
            {FooterTitle}
            <Link to={FooterLink}>{FooterLinkTitle}</Link>
          </h1>
        </Title>
        <InfoWrapper>
          <Info>
            <a href="mailto:aakashpanchal7000@gmail.com">
              aakash@cleverstudio.in
              <hr />
            </a>
            <p>Madhya Pradesh, India</p>
          </Info>
          <Socials>
            <a href="https://github.com/Aakash-Panchal" target="_blank">
              Instagram
            </a>
            <a href="https://github.com/Aakash-Panchal" target="_blank">
              Github
            </a>

            <a href="https://github.com/Aakash-Panchal" target="_blank">
              Linkedin
            </a>
          </Socials>
        </InfoWrapper>
      </Content>
      <Credits>
        Made With
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#200E32"
            d="M10.0058871,1.03980787 C11.651114,-0.0121552738 13.6647133,-0.281294363 15.5206268,0.302703921 C17.1348244,0.804692443 18.4770781,1.95774936 19.2353554,3.49382469 C20.1219923,5.35557736 20.2426836,7.50081617 19.5706516,9.45357983 C18.95209,11.2512581 17.9379702,12.8809134 16.6059275,14.2177883 C15.7325447,15.1154628 14.7914198,15.9419939 13.7912044,16.6897833 L13.7912044,16.6897833 L13.7382629,16.7347286 C13.4059656,16.9584358 12.9590989,16.870581 12.7323744,16.536969 C12.617105,16.3758529 12.5708156,16.1740389 12.6040663,15.9775674 C12.6373171,15.7810959 12.7472718,15.6067258 12.9088461,15.4942366 C13.8473867,14.7870592 14.7322531,14.0087967 15.5559211,13.1660668 C16.7421311,11.9987391 17.6479819,10.5683365 18.2029961,8.98614805 C18.7368299,7.40956403 18.6287891,5.68086204 17.9029943,4.18598328 C17.3189465,3.01000293 16.2898617,2.12715196 15.0529769,1.74095554 C13.4753274,1.23837888 11.7565451,1.54304943 10.4382427,2.55896114 C10.1761601,2.75674294 9.81796704,2.75674294 9.55588439,2.55896114 C8.23818512,1.54163638 6.51870049,1.23684134 4.94115025,1.74095554 C3.69596127,2.11862024 2.65663501,2.99880427 2.06466206,4.17699421 C1.35525632,5.67076589 1.25377414,7.38955009 1.78230739,8.95918083 C2.33966594,10.5375734 3.24528608,11.9645363 4.42938241,13.1301105 C6.17900501,14.8392135 8.10832857,16.3465054 10.1823588,17.6246468 C10.4461468,17.8110535 10.5621493,18.1492787 10.469716,18.462486 C10.3772828,18.7756932 10.0974296,18.9926708 9.77647397,18.9999876 C9.63179433,19.000846 9.49026198,18.956963 9.37058913,18.8741279 C7.21006599,17.5429377 5.20076805,15.9722777 3.37937599,14.1908211 C2.03992966,12.8583481 1.02208009,11.2275527 0.405828372,9.42661261 C-0.242988991,7.47654806 -0.109803058,5.34437282 0.776418876,3.49382469 C1.53469617,1.95774936 2.87694983,0.804692443 4.4911475,0.302703921 C6.34706099,-0.281294363 8.36066029,-0.0121552738 10.0058871,1.03980787 Z M13.7760133,3.99695535 L13.8882638,3.99721276 C15.2039401,4.42032783 16.1404227,5.60845276 16.2618078,7.00855208 L16.2618078,7.00855208 L16.2674609,7.12589095 C16.262755,7.28171622 16.2095844,7.43314561 16.1140526,7.55750351 C15.9946378,7.71295088 15.8190122,7.81310929 15.6265098,7.83554676 C15.2224121,7.88874141 14.8519416,7.59965467 14.7970929,7.18833353 C14.7602237,6.35761647 14.2171818,5.63914003 13.4382611,5.39051901 C13.1486596,5.20631763 13.0200318,4.8444108 13.1267392,4.51402149 C13.2334466,4.18363218 13.547881,3.97024126 13.8882638,3.99721276 Z"
            transform="translate(2 2.5)"
          />
        </svg>
        By Aakash
      </Credits>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  height: 65vh;
  width: 100vw;
  color: #101010;
  @media (max-width: 1024px) {
    height: 53vh;
  }
`;
const Content = styled.div`
  padding: 5rem 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 4rem 4rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const Title = styled.div`
  h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 1.2;
    a {
      display: block;
      font-family: "Playfair Display", serif;
      font-weight: 600;
      color: #101010;
      width: max-content;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #101010;
    }
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  font-family: "Inter", sans-serif;
  a {
    color: #101010;
    font-size: 1.2rem;
    hr {
      width: 85%;
      color: #000;
    }
  }
  p {
    padding-top: 0.5rem;
    font-size: 1rem;
  }
  @media (max-width: 1024px) {
    padding-bottom: 3.5rem;
    a {
      font-size: 1rem;
      hr {
        width: 52%;
      }
    }
  }
`;

const Socials = styled.div`
  a {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    padding-left: 1rem;
    color: #101010;
    text-decoration: underline;
    &:first-child {
      padding-left: 0;
    }
  }
  @media (max-width: 1024px) {
    a {
      font-size: 0.8rem;
    }
  }
`;

const Credits = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  svg {
    width: 1rem;
    margin: 0 0.2rem;
  }
  @media (max-width: 1024px) {
    font-size: 0.6rem;
    svg {
      width: 0.8rem;
      margin: 0 0.2rem;
    }
  }
  @media (max-width: 768px) {
  }
`;

export default Footer;
