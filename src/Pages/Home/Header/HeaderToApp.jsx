import Name from "./header-name";
import Nav from "./nav-bar";
import MobileNav from "./navbarMobile";
import FlipDots from "../../AboutMe/flipdots";

import Grid from "@mui/material/Grid";

export default function HeaderSection() {
  return (
    <>
      <header>
        <Grid sx={{ backgroundColor: "#373F51", height: "auto", paddingBottom: "20px", width: "100%" }} container spacing={0}>
          <FlipDots />
          <Nav />
          <MobileNav />
        </Grid>
      </header>
    </>
  );
}
