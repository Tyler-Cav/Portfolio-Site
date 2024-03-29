import Name from "./header-name";
import Nav from "./nav-bar";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function HeaderSection() {
  return (
    <>
      <header>
        <Paper>
          <Grid className="headerbackground" container spacing={0}>
            <Name />
            <Nav />
          </Grid>
        </Paper>
      </header>
    </>
  );
}
