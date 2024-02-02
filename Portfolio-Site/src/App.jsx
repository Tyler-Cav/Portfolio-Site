import * as React from "react";
import Name from "./components/header";
import Nav from "./components/nav";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function App() {
  return (
    <>
      <Container>
        <Grid container spacing={0}>
          <Name />
          <Nav />
        </Grid>
      </Container>
    </>
  );
}
