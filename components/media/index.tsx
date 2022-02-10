import React, { useState } from "react";
import { useTheme } from "../../context/useTheme";

interface IMediaProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ComponentType<any>,
  href: string,
  hoverColor?: string
}

export function Media(props: IMediaProps) {
  const { icon: Icon, href, hoverColor } = props;
  const { theme } = useTheme();
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