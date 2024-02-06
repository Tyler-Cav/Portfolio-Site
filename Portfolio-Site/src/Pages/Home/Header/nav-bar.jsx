import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Nav() {
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
          <Link to="/" style={linkStyle}>
            <Button variant="contained">Home</Button>
          </Link>
          <Link style={linkStyle}>
            <Button variant="contained">About Me</Button>
          </Link>
          <Link to="/Portfolio" style={linkStyle}>
            <Button variant="contained">Portfolio</Button>
          </Link>
          <Link to="/Contact" style={linkStyle}>
            <Button variant="contained">Contact</Button>
          </Link>
          <div style={linkStyle}>
            <Button variant="contained">Resume</Button>
          </div>
        </section>
      </nav>
    </Grid>
  );
}
