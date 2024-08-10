import { useState } from 'react';
import Bio from "./Components/bio";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import DarkModeButton from './Components/darkmode'

function AboutMeWithDarkMode() {
  const [isActive, setIsActive] = useState(false);
  if (isActive === false) {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Item>
            <DarkModeButton classNameChange='lightModeStyle' value={isActive} setActive={setIsActive} />
          </Item>
        </Grid>
        <Grid item s={6} md={6} lg={6}>
          <Bio classNameChange='bioLightChange' />
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Item>
            <DarkModeButton classNameChange='darkModeStyle' value={isActive} setActive={setIsActive} />
          </Item>
        </Grid>
        <Grid item s={6} md={6} lg={6}>
          <Bio classNameChange='bioDarkChange' />
        </Grid>
      </Grid>
    )
  }
}

export default function About() {


  return (
    <Box component="section">
      <AboutMeWithDarkMode />
    </Box>
  );
}
