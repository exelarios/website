import React, { useState, useContext } from "react";
import styled from "styled-components";

import { ThemeContext, IThemeContext } from "../../context/useTheme";

interface IMediaProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ReactNode,
  href: string,
  hoverColor?: string
}

export function Media(props: IMediaProps) {
  const { icon: Icon, href, hoverColor } = props;
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a href={href}>
      <Icon 
        fill={isHovering ? hoverColor: theme.color}
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
      />
    </a>
  );
}