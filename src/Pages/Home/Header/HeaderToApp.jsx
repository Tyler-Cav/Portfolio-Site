import Name from "./header-name";
import Nav from "./nav-bar";
import LongMenu from "./navbarMobile";
import Grid from "@mui/material/Grid";

export default function HeaderSection() {
  return (
    <header>
      <Grid sx={{ backgroundColor: "#373F51", height: "auto", padding: "20px" }} container spacing={0}>
        <Name />
        <Nav />
        <LongMenu />
      </Grid>
    </header>
  );
}
