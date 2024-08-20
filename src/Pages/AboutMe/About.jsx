import { useState } from 'react';
import Bio from "./Components/bio";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import DarkModeButton from './Components/darkmode'
import { Padding } from '@mui/icons-material';

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
        <Grid item s={3} md={3} lg={3}>
          <Bio classNameChange='bioDarkChange' />
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} item s={1} md={1} lg={1}>
          <Box sx={{ color: 'white' }} >
            psum dolor, sit amet consei magnam quas perspiciatis commodi?
          </Box>
        </Grid>
        <Grid item s={3} md={3} lg={3}>
          <Bio classNameChange='bioDarkChange' />
        </Grid>
        <Grid item s={1} md={1} lg={1}>
          <h1>INSERT Arrow</h1>
        </Grid>
        <Grid item s={3} md={3} lg={3}>
          <Bio classNameChange='bioDarkChange' />
        </Grid>
        <Grid item s={1} md={1} lg={1}>
          <h1>INSERT Arrow</h1>
        </Grid>
      </Grid >
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
