import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import {
  Navbar, 
  Media 
} from "@components";

import {
  useTheme
} from "../context/themeContext";

import Twitter from "../assets/tokens/twitter.svg";
import Github from "../assets/tokens/github.svg";
import Linkedin from "../assets/tokens/linkedin.svg";
import Spotify from "../assets/tokens/spotify.svg";

import Lights from "../assets/images/lights.jpg";
import DericStanding from "../assets/images/deric_standing.jpg";

const Home: NextPage = () => {

  const { theme } = useTheme();

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
              <Heading>deric</Heading>
              <Paragraph>
                a student at Cal Poly Pomona studying Computer Science with
                interest in front-end software engineering.
              </Paragraph>
              <Paragraph>
                previously a software engineer intern at <Anchor href="https://coinbase.com">Coinbase</Anchor> worked on client performance & latency 
                and  <Anchor href="https://zendesk.com">Zendesk</Anchor> for <Anchor href="https://garden.zendesk.com/">design system</Anchor>.
              </Paragraph>
              <Paragraph>
                also a tech enthusiast, esk8er, graphic design hobbyist, amateur
                photographer, and a walking meme. always looking for new
                challenges to learn more about my field of study.
              </Paragraph>
              <Paragraph>
                feel free to reach out if you just wanna chat or grab boba.
              </Paragraph>
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
              <Media 
                icon={Spotify}
                href="https://open.spotify.com/user/urg0ynqt900kvykk1or129aqc"
                hoverColor="#1DB954"
              />
            </MediaContainer>
          </ContentContainer>
          <Section>
            <ArtworkContainer>
              <Image
                src={theme === "dark" ? DericStanding : Lights}
                alt={theme === "dark" ? "Deric standing in the dark" : "beam of lights"}
                layout="fill"
                objectFit="cover"
              />
            </ArtworkContainer>
          </Section>
        </Container>
      </main>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

const Heading = styled.h1`
  mix-blend-mode: difference;
  font-family: "led";
`

const Paragraph = styled.p`
  mix-blend-mode: difference;
`;

const Section = styled.div`
  width: 50%;
  padding: 2rem;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5%;
    padding-top: 0;
  };
`;

const ContentContainer = styled(Section)`
  z-index: 1;
  @media (max-width: 1000px) {
    transform: translate(0, -192px);
  }
`;

const Content = styled.div`
  margin: auto;
  min-height: 300px;
  mix-blend-mode: difference;
  color: ${p => p.theme.color};
  width: 100%;
`;

const ArtworkContainer = styled.div`
  background-color: black;
  filter: opacity(${p => p.theme.color == "white" ? 0.8 : 1});
  margin: auto;
  position: relative;
  width: min(100%, 450px);
  height: 600px;
`;

const MediaContainer = styled.div`
  display: flex;
  & > a {
    margin-right: 30px;
  }
`;

const Anchor = styled.a.attrs(props => ({
  target: "_blank",
  rel: "noopener noreferrer"
}))`
  font-family: "led";
  &:hover {
    color: ${p => p.theme.anchor.color};
    background-color: ${p => p.theme.anchor.background};
  }
`;

export default Home;
