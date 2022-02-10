import { useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import {
  ThemeContext, 
} from "../context/useTheme";

import {
  Navbar, 
  Media 
} from "../components";

import Twitter from "../assets/tokens/twitter.svg";
import Github from "../assets/tokens/github.svg";
import Linkedin from "../assets/tokens/linkedin.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

const Section = styled.div`
  width: 50%;
  padding: 2rem;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5%;
    padding-top: 0;
  }
`;

const ContentContainer = styled(Section)`
  @media (max-width: 1000px) {
    transform: translate(0, -192px);
  }
`;

const Content = styled.div`
  margin: auto;
  min-height: 300px;
  width: 100%;
`;

const Artwork = styled.div<{ theme: string }>`
  width: 450px;
  height: 600px;
  margin: auto;
  background-image: ${p => p.theme === "dark" 
    ? `url("/images/skateboarding.jpg")` 
    : `url("/images/lights.jpg")`};

  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const MediaContainer = styled.div`
  display: flex;
  & > a {
    margin-right: 30px;
  }
`;

const Home: NextPage = () => {

  const { mode } = useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>deric</title>
        <meta 
          name="description" 
          content="A student at Cal Poly Pomona studying Computer Science with interest in frontend software engineering."
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main>
        <Navbar location="Los Angeles" />
        <Container>
          <ContentContainer>
            <Content>
              <h1>deric</h1>
              <p>
                A student at Cal Poly Pomona studying Computer Science with
                interest in frontend software engineering.
              </p>
              <p>
                Currently an intern at Zendesk; part of Team Garden working on design system.
              </p>
              <p>
                Also a tech enthusiast, esk8er, graphic design hobbyist, amateur
                photographer, and a walking meme. Always looking for new
                challenges to learn more about my field of study.
              </p>
              <p>
                Feel free to contact me if you just wanna chat or grab boba.
              </p>
            </Content>
            <MediaContainer>
              <Media 
                icon={Twitter} 
                href="https://twitter.com/notderic" 
                hoverColor="#1DA1F2"
              />
              <Media 
                icon={Github}
                href="https://github.com/exelarios"
                hoverColor="#6e5494"
              />
              <Media 
                icon={Linkedin} 
                href="https://linkedin.com/derickwok"
                hoverColor="#4078c0"
              />
            </MediaContainer>
          </ContentContainer>
          <Section>
            <Artwork theme={mode}/>
          </Section>
        </Container>
      </main>
    </div>
  );
};

export default Home;
