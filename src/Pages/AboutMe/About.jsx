import { useState } from 'react';
import Bio from "./Components/bio";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import DarkModeButton from './Components/darkmode'
import Arrow from '../../assets/ArrowWhite.png'
import ArrowGray from '../../assets/ArrowGray.png'

//!UPDATED TO HAVE FLEX ON INITIAL DIV IN LIGHT MODE. NEED TO CHANGE DARK MODE WITH FORMATTING. CHECK SOURCE CONTROL
function AboutMeWithDarkMode() {
  const [isActive, setIsActive] = useState(false);
  if (isActive === false) {
    return (
      <div style={{ display: 'flex', marginLeft: '50px', marginRight: '50px' }}>
        <Grid style={{ display: 'flex', justifyContent: 'space-between' }} container spacing={0}>
          <Grid item xs={12}>
            <Item>
              <DarkModeButton classNameChange='lightModeStyle' value={isActive} setActive={setIsActive} />
            </Item>
          </Grid>
          <Grid item xs={12} s={3} md={3} lg={3}>
            <Item>
              <Bio classNameChange='bioLightChange'
                title='West Chester University'
                status='Student'
                date='2015 - 2018'
                description='Business Management (B.S)'
                descriptionTwo='Graduated with a 3.7 GPA'
              />
            </Item>
          </Grid>
          <Grid sx={{ display: 'flex', display: { xs: 'block', md: 'none' }, border: '3px white solid' }} item xs={12}>
            <Box sx={{ height: '100px', width: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Item sx={{ color: 'white' }}>
                Downward arrow here
              </Item>
            </Box>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} item xs={9} s={1} md={1} lg={1}>
            <Item sx={{ color: 'white', display: 'flex', display: { xs: 'none', md: 'block' } }}>
              <img style={{ maxWidth: '100%' }} src={Arrow} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} s={3} md={3} lg={3}>
            <Item>
              <Bio classNameChange='bioLightChange'
                title='QVC'
                status='Account Manager'
                date='2018 - 2023'
                description='TBD'
                descriptionTwo='TBD'
              />
            </Item>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} item xs={9} s={1} md={1} lg={1}>
            <Item sx={{ color: 'white', display: 'flex', display: { xs: 'none', md: 'block' } }}>
              <img style={{ maxWidth: '100%' }} src={Arrow} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} s={3} md={3} lg={3}>
            <Bio classNameChange='bioLightChange'
              title='University of Penn'
              status='Student'
              date='2023 - 2024'
              description='Full Stack Web Developement '
              descriptionTwo='Graduated with a 3.6 GPA'
            />
          </Grid>
        </Grid>
      </div>
    )
  } else {
    return (
      <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px' }}>
        <Grid style={{ display: 'flex', justifyContent: 'space-between' }} container spacing={0}>
          <Grid item xs={12}>
            <Item>
              <DarkModeButton classNameChange='darkModeStyle' value={isActive} setActive={setIsActive} />
            </Item>
          </Grid>
          <Grid item xs={12} s={3} md={3} lg={3}>
            <Item>
              <Bio classNameChange='bioDarkChange'
                title='West Chester University'
                status='Student'
                date='2015 - 2018'
                description='Business Management (B.S)'
                descriptionTwo='Graduated with a 3.7 GPA'
              />
            </Item>
          </Grid>
          <Grid sx={{ display: 'flex', display: { xs: 'block', md: 'none' }, border: '3px white solid' }} item xs={12}>
            <Box sx={{ height: '100px', width: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Item sx={{ color: 'white' }}>
                Downward arrow here
              </Item>
            </Box>
          </Grid>
          {/* Below grid was testing out MUI hidden vs. block at different media query sizes */}
          {/* <Grid sx={{ display: { xs: 'block', md: 'none' } }} item xs={3}>
          <Item sx={{ border: '3px white solid' }}>
            xs=3
          </Item>
        </Grid> */}
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} item xs={9} s={1} md={1} lg={1}>
            <Item sx={{ color: 'white', display: 'flex', display: { xs: 'none', md: 'block' } }}>
              <img style={{ maxWidth: '100%', height: 'auto' }} src={ArrowGray} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} s={3} md={3} lg={3}>
            <Bio classNameChange='bioDarkChange'
              title='QVC'
              status='Account Manager'
              date='2018 - 2023'
              description='TBD'
              descriptionTwo='TBD'
            />
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} item xs={9} s={1} md={1} lg={1}>
            <Item sx={{ color: 'white', display: 'flex', display: { xs: 'none', md: 'block' } }}>
              <img style={{ maxWidth: '100%', height: 'auto' }} src={ArrowGray} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} s={3} md={3} lg={3}>
            <Bio classNameChange='bioDarkChange'
              title='University of Penn'
              status='Student'
              date='2023 - 2024'
              description='Full Stack Web Developement '
              descriptionTwo='Graduated with a 3.6 GPA'
            />
          </Grid>
        </Grid >
      </div>
    )
  }
}
export default function About() {


  return (
    <Box component="section">
      <AboutMeWithDarkMode />
    </Box >

  );
}
