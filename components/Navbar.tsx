import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { useTheme } from "../context/themeContext";

import Moon from "../assets/tokens/moon.svg";
import Sun from "../assets/tokens/sun.svg";

interface INavbarProps {
  location: string
}

export function Navbar(props: INavbarProps) {
  const { location } = props;
  const [time, setTime] = useState(new Date());
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  const handleChangeTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light")
  }, [theme, setTheme]);

  const themeIcon = useMemo(() => {
    if (theme == "light") {
      return <Moon width="18" height="18" fill="black"/>;
    } else {
      return <Sun width="18" height="18" fill="white"/>;
    }
  }, [theme]);

  return (
    <Container>
      <Section>
        {time.getHours().toString().padStart(2, "0")}
        :{time.getMinutes().toString().padStart(2, "0")}, {location}
      </Section>
      <Section>
        <StyledButton onClick={handleChangeTheme}>
          {themeIcon}
        </StyledButton>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5%;
  }
`;

const Section = styled.div`
  font-family: "led";
`;

const StyledButton = styled.button`
  outline: none;
  border: 0;
  background: none;
`;