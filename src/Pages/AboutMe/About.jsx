import Bio from "./Components/bio";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import Darkmode from './Components/darkmode'

export default function About() {
  console.log(lightSwitch.mode)
  return (
    <Box component="section">
      <Grid container spacing={0}>
        <Grid item s={12} md={12} lg={4}>
          <Item>
            <Darkmode />
          </Item>
        </Grid>
        <Grid item lg={4}>
          <Bio />
        </Grid>
        <Grid item lg={4}>
          <Bio />
        </Grid>
      </Grid>
    </Box>
  );
}
