import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Gif from "./gif";
import styles from "./test.module.scss"

const defaultTheme = createTheme();

export default function Contact() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Gif />
          <h2 className={styles.pstyle}>
            <a className={styles.style} 
              href="mailto:tyler.cavanaugh24@gmail.com">
              Let's Chat!
            </a>
          </h2>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
