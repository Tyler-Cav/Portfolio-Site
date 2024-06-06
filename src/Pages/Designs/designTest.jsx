import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"

export default function testDesign() {
    return (
        <>
            <Grid container spacing={1}>
                <Grid container spacing={1} item xs={6}>
                    <Item xs={6} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>
                        <img style={{ height: '100px' }} src="/Helldiver-Tyler.png" alt="" />
                    </Item>
                    <Item xs={6} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}>Space 2
                        <img style={{ height: '100px' }} src="/Helldiver-Tyler.png" alt="" />
                    </Item>
                </Grid>
                <Grid container spacing={1} item xs={6}>
                    <Item xs={6} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}> Space 3</Item>
                    <Item xs={6} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(250,250,250, 70%)', marginTop: '25px', height: "450px", border: "1px solid", borderRadius: '5px' }}> Space 4</Item>
                </Grid>
            </Grid>
        </>
    )
}

