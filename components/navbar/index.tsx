import { 
  useEffect, 
  useMemo, 
  useState 
} from "react";

import {
  Container,
  Section,
  StyledButton
} from "./styles";

import {
  useTheme
} from "../../context/themeContext";

import Moon from "../../assets/tokens/moon.svg";
import Sun from "../../assets/tokens/sun.svg";

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

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

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