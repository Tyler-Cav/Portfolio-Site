import Photo from "./Components/photo";
import Bio from "./Components/bio";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";

export default function About() {
  return (
    <>
      <Box component="section">
        <Grid container spacing={0}>
          <Grid s={12} md={1} lg={1}>
            <Photo />
          </Grid>
          <Grid xs={12} lg={11}>
            <Bio />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
