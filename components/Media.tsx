import React from "react";
import styled from "styled-components";

interface IMediaProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ComponentType<any>,
  href: string,
  hoverColor?: string
}

interface IContainerProps {
  hoverColor?: string
}

export function Media(props: IMediaProps) {
  const { icon: Icon, href, hoverColor } = props;
  return (
    <Container 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      hoverColor={hoverColor}>
      <Icon/>
    </Container>
  );
}

const Container = styled.a<IContainerProps>`
  & > svg {
    fill: ${p => p.theme.color};
    &:hover {
      fill: ${p => p.hoverColor};
    }
  }
`;