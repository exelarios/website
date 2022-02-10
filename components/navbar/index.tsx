import { 
  useContext, 
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
  ThemeContext, 
  IThemeContext 
} from "../../context/useTheme";

import Moon from "../../assets/tokens/moon.svg";
import Sun from "../../assets/tokens/sun.svg";

interface INavbarProps {
  location: string
}

export function Navbar(props: INavbarProps) {
  const { location } = props;
  const { mode, setTheme, theme } = useContext<IThemeContext>(ThemeContext);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  const handleChangeTheme = () => {
    if (mode == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const themeIcon = useMemo(() => {
    if (mode == "light") {
      return <Moon width="18" height="18" fill="black"/>;
    } else {
      return <Sun width="18" height="18" fill="white"/>;
    }
  }, [mode]);

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