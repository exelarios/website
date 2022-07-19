import React from "react";

import { Container } from "./styles";
interface IMediaProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ComponentType<any>,
  href: string,
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