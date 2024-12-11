import { useState } from 'react';
import Bio from "./Components/bio";
import Skills from "./Components/skills"
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import DarkModeButton from './Components/darkmode'
import Arrow from '../../assets/ArrowWhite.png'
import ArrowGray from '../../assets/ArrowGray.png'
import DownwardArrowWhite from '../../assets/downwardArrowWhite.svg'
import DownwardArrowGray from '../../assets/downwardArrowGray.svg'

function AboutMeWithDarkMode() {
  const [isActive, setIsActive] = useState(false);
  if (isActive === false) {
    return (
      <>
        <Grid style={{ display: 'flex', justifyContent: 'space-between' }} container spacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <Item>
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
                <Grid sx={{ display: 'flex', display: { xs: 'block', md: 'none' }, marginTop: '10px' }} item xs={12}>
                  <Box sx={{ height: '100px', width: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Item>
                      <img style={{ height: '100px', width: 'auto' }} src={DownwardArrowWhite} alt="" />
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
                <Grid sx={{ display: 'flex', display: { xs: 'block', md: 'none' }, marginTop: '10px' }} item xs={12}>
                  <Box sx={{ height: '100px', width: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Item>
                      <img style={{ height: '100px', width: 'auto' }} src={DownwardArrowWhite} alt="" />
                    </Item>
                  </Box>
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
            </Item>
          </Grid>
          {/*TODO: I STOPPED HERE 8/29. NEED TO FIGURE OUT FORMATTING FOR THE SIDE SKILL MOBILE COMPONENT */}
          {/* <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex start', display: { xs: 'block', md: 'none' } }} item xs={4}>
            <Item>
              <Skills classNameChange='skillsChange' />
            </Item>
          </Grid> */}
        </Grid>
      </>
    )
  } else {
    return (
      <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', marginBottom: '10px' }}>
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
          <Grid sx={{ display: 'flex', display: { xs: 'block', md: 'none' }, marginTop: '10px' }} item xs={12}>
            <Box sx={{ height: '100px', width: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Item>
                <img style={{ height: '100px', width: 'auto' }} src={DownwardArrowGray} alt="" />
              </Item>
            </Box>
          </Grid>
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
          <Grid sx={{ display: 'flex', display: { xs: 'block', md: 'none' }, marginTop: '10px' }} item xs={12}>
            <Box sx={{ height: '100px', width: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Item>
                <img style={{ height: '100px', width: 'auto' }} src={DownwardArrowGray} alt="" />
              </Item>
            </Box>
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
