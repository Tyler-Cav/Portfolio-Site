import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import * as designs from '../../assets/design-exporter.js'

export default function testDesign() {
    return (
        // First Row
        <>
            <Grid container spacing={2}>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', height: 'auto' }} src={designs.HellDivers} alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', height: 'auto' }} src={designs.Glitch} alt="" />
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ height: '400px', maxWidth: '400px', borderRadius: '2%' }} src={designs.TestBackground} alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', height: 'auto', margin: '1px' }} src={designs.CuteSkull} alt="" />
                        </Item>
                    </Grid>
                </Grid>
            </Grid >
            {/* Second Row */}
            <Grid container spacing={2}>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', height: 'auto' }} src={designs.GooglePixelArt} alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxHeight: '500px' }} src={designs.Bakery} alt="A partial eaten donut logo that reads courtney's bakery, established in 2021" />
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', maxHeight: '450px' }} src={designs.BeGood} alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ width: '90%', maxHeight: '450px' }} src={designs.HammondsHandywork} alt="" />
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

