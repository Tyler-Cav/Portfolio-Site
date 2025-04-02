import "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";
import {
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
} from "@mui/material/styles";
import { LineWeight } from "@mui/icons-material";

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

export default function Nav({ color }) {
  const linkStyle = { border: "1px black", padding: "5px", LineWeight: '0px' };
  const currentPage = useLocation().pathname;

  return (
    <Grid sx={{ display: { xs: "none", sm: "none", lg: "block" } }} item lg={8}>
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
              <Button sx={headerButtonStyles} variant="contained" color="Grey">
                Who Am I?
              </Button>
            </Link>
            <Link to="/Portfolio" style={linkStyle}>
              <Button sx={headerButtonStyles} variant="contained" color="Grey">
                What Have I Programmed?
              </Button>
            </Link>
            <Link to='/Designs' style={linkStyle}>
              <Button sx={headerButtonStyles} variant="contained" color="Grey">
                What Have I Designed?
              </Button>
            </Link>
            <a href="mailto:tyler.cavanaugh24@gmail.com" style={linkStyle}>
              <Button sx={headerButtonStyles} variant="contained" color="Grey">
                Get In Touch
              </Button>
            </a>
          </ThemeProvider>
        </section>
      </nav>
    </Grid>
  );
}
