import styled from "styled-components";

interface IContainerProps {
  hoverColor?: string
}

export const Container = styled.a<IContainerProps>`
  & > svg {
    fill: ${p => p.theme.color};
    &:hover {
      fill: ${p => p.hoverColor};
    }
  }
`;