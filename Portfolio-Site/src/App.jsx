import * as React from "react";
import Name from "./components/header";
import Nav from "./components/nav";
import ProjectCards from "./components/Project-Cards";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function App() {
  return (
    <>
      <Container>
        <Paper>
          <Grid container spacing={0}>
            <Name />
            <Nav />
          </Grid>
        </Paper>
      </Container>
      <ProjectCards />
    </>
  );
}
