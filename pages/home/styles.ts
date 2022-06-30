import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

export const Section = styled.div`
  width: 50%;
  padding: 2rem;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5%;
    padding-top: 0;
  }
`;

export const ContentContainer = styled(Section)`
  z-index: 1;
  @media (max-width: 1000px) {
    transform: translate(0, -192px);
  }
`;

export const Content = styled.div`
  margin: auto;
  min-height: 300px;
  mix-blend-mode: difference;
  color: ${p => p.theme.color};
  transition: all 1s;
  width: 100%;
`;

export const ArtworkContainer = styled.div`
  background-color: black;
  margin: auto;
  width: 450px;
  height: 600px;
`;

export const MediaContainer = styled.div`
  display: flex;
  & > a {
    margin-right: 30px;
  }
`;