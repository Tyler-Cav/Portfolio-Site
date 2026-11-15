import "@mui/material";
import Button from "@mui/material/Button";
import {
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
} from "@mui/material/styles";
import scrollToSection from "../../../Utils/scrollToSection";

const greyBase = "#A9BCD0";
const greyMain = alpha(greyBase, 0.7);

const theme = createTheme({
  palette: {
    Grey: {
      main: greyMain,
      light: alpha(greyBase, 0.5),
      dark: alpha(greyBase, 0.9),
      contrastText: getContrastRatio(greyMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

const headerButtonStyles = {
  height: "fit-content",
  fontSize: "15px"
}

const sections = [
  { id: "about", label: "Who Am I?" },
  { id: "programmed", label: "What Have I Programmed?" },
  { id: "designs", label: "What Have I Designed?" },
];

export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px", LineWeight: '0px' };

  return (
    <nav className="main-header-menu">
      <section className="nav-buttons">
        <ThemeProvider theme={theme}>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              style={linkStyle}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(id);
              }}
            >
              <Button sx={headerButtonStyles} variant="contained" color="Grey" tabIndex={-1}>
                {label}
              </Button>
            </a>
          ))}
          <a href="mailto:tyler.cavanaugh24@gmail.com" style={linkStyle}>
            <Button sx={headerButtonStyles} variant="contained" color="Grey" tabIndex={-1}>
              Get In Touch
            </Button>
          </a>
        </ThemeProvider>
      </section>
    </nav>
  );
}
