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
        <Grid item xs={9} s={3} md={3} lg={3}>
          <Item>
            <Bio classNameChange='bioLightChange' />
          </Item>
        </Grid>
        <Grid sx={{ display: { xs: 'block', md: 'none' } }} item xs={3}>
          <Item sx={{ border: '3px white solid' }}>
            xs=3
          </Item>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} item xs={9} s={1} md={1} lg={1}>
          <Item sx={{ color: 'white', display: 'flex' }}>
            <Box>
              _________
            </Box>
          </Item>
        </Grid>
        <Grid item xs={9} s={3} md={3} lg={3}>
          <Item>
            <Bio classNameChange='bioLightChange' />
          </Item>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} item xs={9} s={1} md={1} lg={1}>
          <Item sx={{ color: 'white', display: 'flex' }}>
            <Box>
              _________>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={9} s={3} md={3} lg={3}>
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
        <Grid item xs={9} s={3} md={3} lg={3}>
          <Item>
            <Bio classNameChange='bioDarkChange' />
          </Item>
        </Grid>
        <Grid sx={{ display: { xs: 'block', md: 'none' } }} item xs={3}>
          <Item sx={{ border: '3px white solid' }}>
            xs=3
          </Item>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} item xs={9} s={1} md={1} lg={1}>
          <Item sx={{ color: 'white', display: 'flex' }}>
            <Box>
              _________
            </Box>
          </Item>
        </Grid>
        <Grid item xs={9} s={3} md={3} lg={3}>
          <Bio classNameChange='bioDarkChange' />
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} item xs={9} s={1} md={1} lg={1}>
          <Item sx={{ color: 'white', display: 'flex' }}>
            <Box>
              _________>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={9} s={3} md={3} lg={3}>
          <Bio classNameChange='bioDarkChange' />
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
