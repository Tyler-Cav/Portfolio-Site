import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"

export default function testDesign() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ height: '100px' }} src="../../../public/Helldiver-Tyler.png" alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ height: '100px' }} src="../../../public/Helldiver-Tyler.png" alt="" />
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2} item lg={6} sm={12} xs={12}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ height: '100px' }} src="../../../public/Helldiver-Tyler.png" alt="" />
                        </Item>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Item style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>
                            <img style={{ height: '100px' }} src="../../../public/Helldiver-Tyler.png" alt="" />
                        </Item>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

