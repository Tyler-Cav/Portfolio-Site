import Name from "./header-name";
import Nav from "./nav-bar";
import MobileNav from "./navbarMobile";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function HeaderSection() {
  return (
    <>
      <header>
          <Grid sx={{ backgroundColor: "#373F51", height:"auto", padding: "20px"}} container spacing={0}>
            <Name />
            <Nav />
            <MobileNav />
          </Grid>
      </header>
    </>
  );
}
