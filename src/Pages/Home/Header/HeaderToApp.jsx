import Name from "./header-name";
import Nav from "./nav-bar";
import LongMenu from "./navbarMobile";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function HeaderSection() {
  return (
    <>
      <header>
        <Paper>
          <Grid className="headerbackground" container spacing={0}>
            <Name />
            <Nav />
            <LongMenu />
          </Grid>
        </Paper>
      </header>
    </>
  );
}
