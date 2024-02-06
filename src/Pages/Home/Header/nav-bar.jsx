import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
} from "@mui/material/styles";

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

export default function Nav({ color }) {
  const linkStyle = { border: "1px black", padding: "5px" };
  const currentPage = useLocation().pathname;

  return (
    <Grid item xs={8}>
      <nav className="main-header-menu">
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <ThemeProvider theme={theme}>
            <Link to="/" style={linkStyle}>
              <Button variant="contained" color="Grey">
                AboutMe
              </Button>
            </Link>
            <Link to="/Portfolio" style={linkStyle}>
              <Button variant="contained" color="Grey">
                Portfolio
              </Button>
            </Link>
            <Link to="/Contact" style={linkStyle}>
              <Button variant="contained" color="Grey">
                Contact
              </Button>
            </Link>
            <div style={linkStyle}>
              <Button variant="contained" color="Grey">
                Resume
              </Button>
            </div>
          </ThemeProvider>
        </section>
      </nav>
    </Grid>
  );
}
