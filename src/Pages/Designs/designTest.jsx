import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import HellDivers from '../../assets/Helldiver-Tyler.png'
import Glitch from '../../assets/GlitchyText.svg'
import TestBackground from '../../assets/Test-Portfolio-BackGround.svg'
import CuteSkull from '../../assets/CuteSkull.png'

export default function testDesign() {
    return (
        <Grid container spacing={2}>
            <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                <Grid item lg={6} sm={12} xs={12}>
                    <Item sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>
                        <img style={{ maxWidth: '90%', height: 'auto' }} src={HellDivers} alt="" />
                    </Item>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                    <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>
                        <img style={{ maxWidth: '90%', height: 'auto' }} src={Glitch} alt="" />
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                <Grid item lg={6} sm={12} xs={12}>
                    <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>
                        <img style={{ height: '400px', maxWidth: '400px', borderRadius: '2%' }} src={TestBackground} alt="" />
                    </Item>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                    <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>
                        <img style={{ maxWidth: '90%', height: 'auto', margin: '1px' }} src={CuteSkull} alt="" />
                    </Item>
                </Grid>
            </Grid>
        </Grid >
    )
}

