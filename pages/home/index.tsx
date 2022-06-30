import React, { useMemo } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import {
  Navbar, 
  Media 
} from "../../components";

import {
  Container,
  ContentContainer,
  MediaContainer,
  Content,
  Section,
  ArtworkContainer
} from "./styles";

import {
  useTheme
} from "../../context/themeContext";

import Twitter from "../../assets/tokens/twitter.svg";
import Github from "../../assets/tokens/github.svg";
import Linkedin from "../../assets/tokens/linkedin.svg";
import Spotify from "../../assets/tokens/spotify.svg";

import Lights from "../../assets/images/lights.jpg";
import Skateboarding from "../../assets/images/skateboarding.jpg";

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
              <h1>deric</h1>
              <p>
                a student at <a href="https://www.cpp.edu/">Cal Poly Pomona</a> studying Computer Science with
                interest in front-end engineering.
              </p>
              <p>
                currently a software engineer intern at <a href="https://coinbase.com">Coinbase</a> working on client performance and latency.
                previously a intern at Zendesk worked on <a href="https://garden.zendesk.com/">design system</a>.
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
                src={theme === "dark" ? Skateboarding : Lights}
                alt={theme === "dark" ? "Deric skateboarding in the dark" : "beam of lights"}
                width="450px"
                height="600px"
                objectFit="cover" 
              />
            </ArtworkContainer>
          </Section>
        </Container>
      </main>
    </div>
  );
};

export default Home;
