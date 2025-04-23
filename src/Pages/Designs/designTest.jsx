import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid"
import * as designs from '../../assets/design-exporter.js'
import "./design-styles.css"



export default function testDesign() {
    return (
        <section className="design-container">
            <div>
                <img src={designs.BeGood} alt="" />
            </div>
            <div>
                <img src={designs.HammondsHandywork} alt="" />
            </div>
            <div>
                <img src={designs.Bakery} alt="A partial eaten donut logo that reads courtney's bakery, established in 2021" />
            </div>
            <div>
                <img src={designs.Barber} alt="" />
            </div>
            <div>
                <img src={designs.TestBackground} alt="" />
            </div>
            <div>
                <img src={designs.Glitch} alt="" />
            </div>
            <div>
                <img src={designs.GooglePixelArt} alt="" />
            </div>
            <div>
                <img src={designs.CuteSkull} alt="" />
            </div>
            <div>
                <img src={designs.HellDivers} alt="" />
            </div>
        </section >
    )
}

