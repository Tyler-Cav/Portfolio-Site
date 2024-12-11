import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"

export default function Skills(props) {
    return (
        <section className={props.classNameChange}>
            <h2 style={{ fontSize: '20px' }}>Skills</h2>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Item>
                        <ul style={{ marginTop: '10px', listStyle: 'none' }}>
                            <li id= 'react' style={{ paddingTop: '15px' }}>React</li>
                            <li style={{ paddingTop: '15px' }}>JavaScript</li>
                            <li style={{ paddingTop: '15px' }}>OOP</li>
                            <li style={{ paddingTop: '15px' }}>NodeJS</li>
                            <li style={{ paddingTop: '15px' }}>HTML</li>
                            <li style={{ paddingTop: '15px' }}>CSS</li>
                            <li style={{ paddingTop: '15px' }}>Tailwind</li>
                            <li style={{ paddingTop: '15px' }}>MongoDB</li>
                            <li style={{ paddingTop: '15px' }}>MySQL</li>
                            <li style={{ paddingTop: '15px' }}>Git</li>
                            <li style={{ paddingTop: '15px' }}>NPM/Yarn</li>
                            <li style={{ paddingTop: '15px' }}>Git</li>
                            <li style={{ paddingTop: '15px' }}>JQuery</li>
                            <li style={{ paddingTop: '15px' }}>Python</li>
                        </ul>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <ul style={{ marginTop: '10px', listStyle: 'none' }}>
                            <li style={{ paddingTop: '15px' }}>React</li>
                            <li style={{ paddingTop: '15px' }}>JavaScript</li>
                            <li style={{ paddingTop: '15px' }}>OOP</li>
                            <li style={{ paddingTop: '15px' }}>NodeJS</li>
                            <li style={{ paddingTop: '15px' }}>HTML</li>
                            <li style={{ paddingTop: '15px' }}>CSS</li>
                            <li style={{ paddingTop: '15px' }}>Tailwind</li>
                            <li style={{ paddingTop: '15px' }}>MongoDB</li>
                            <li style={{ paddingTop: '15px' }}>MySQL</li>
                            <li style={{ paddingTop: '15px' }}>Git</li>
                            <li style={{ paddingTop: '15px' }}>NPM/Yarn</li>
                            <li style={{ paddingTop: '15px' }}>Git</li>
                            <li style={{ paddingTop: '15px' }}>JQuery</li>
                            <li style={{ paddingTop: '15px' }}>Python</li>
                        </ul>
                    </Item>
                </Grid>
            </Grid>
        </section>
    );
}
