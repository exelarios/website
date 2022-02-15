import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import {
  useTheme
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
  transition: all 1s;
  width: 100%;
`;

interface IArtworkProps
  extends React.HTMLAttributes<HTMLElement> {
  mode?: string;
}

const Artwork = styled.div<IArtworkProps>`
  width: 450px;
  height: 600px;
  margin: auto;
  background-image: ${p => p.mode === "dark" 
    ? `url("/images/skateboarding.jpg")` 
    : `url("/images/lights.jpg")`};

  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  transition: all 1s;
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

  const { mode } = useTheme();

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
        <Navbar location="los angeles" />
        <Container>
          <ContentContainer>
            <Content>
              <h1>deric</h1>
              <p>
                a student at Cal Poly Pomona studying Computer Science with
                interest in frontend software engineering.
              </p>
              <p>
                currently an intern at Zendesk; part of Team Garden working on design system.
              </p>
              <p>
                also a tech enthusiast, esk8er, graphic design hobbyist, amateur
                photographer, and a walking meme. always looking for new
                challenges to learn more about my field of study.
              </p>
              <p>
                feel free to reach me if you just wanna chat or grab boba.
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
                href="https://linkedin.com/in/derickwok"
                hoverColor="#4078c0"
              />
            </MediaContainer>
          </ContentContainer>
          <Section>
            <Artwork mode={mode}/>
          </Section>
        </Container>
      </main>
    </div>
  );
};

export default Home;
