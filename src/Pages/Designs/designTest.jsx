import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import HellDivers from '../../assets/Helldiver-Tyler.png'
import Glitch from '../../assets/GlitchyText.svg'
import TestBackground from '../../assets/Test-Portfolio-BackGround.svg'
import CuteSkull from '../../assets/CuteSkull.png'
import GooglePixelArt from '../../assets/GoogleBlockPixel.svg'
import Bakery from '../../assets/bakery.svg'
import BeGood from '../../assets/Be-Good.svg'
import HammondsHandywork from '../../assets/HammondsHandywork.svg'

export default function testDesign() {
    return (
        // First Row
        <>
            <Grid container spacing={2}>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', height: 'auto' }} src={HellDivers} alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', height: 'auto' }} src={Glitch} alt="" />
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ height: '400px', maxWidth: '400px', borderRadius: '2%' }} src={TestBackground} alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', height: 'auto', margin: '1px' }} src={CuteSkull} alt="" />
                        </Item>
                    </Grid>
                </Grid>
            </Grid >
            {/* Second Row */}
            <Grid container spacing={2}>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', height: 'auto' }} src={GooglePixelArt} alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxHeight: '500px' }} src={Bakery} alt="A partial eaten donut logo that reads courtney's bakery, established in 2021" />
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ maxWidth: '90%', maxHeight: '450px' }} src={BeGood} alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "500px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ width: '90%', maxHeight: '450px' }} src={HammondsHandywork} alt="" />
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

