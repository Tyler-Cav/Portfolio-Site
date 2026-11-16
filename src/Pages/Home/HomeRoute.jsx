import RevealSection from "./RevealSection";
import Bio from "../AboutMe/Bio.jsx";
import Portfolio from "../Portfolio/PortfolioRoute";
import Designs from "../Designs/Design.jsx";

export default function HomeRoute() {
  return (
    <>
      <RevealSection id="about">
        <Bio />
      </RevealSection>
      <RevealSection id="programmed">
        <h1 className="section-header">What Have I Programmed?</h1>
        <Portfolio />
      </RevealSection>
      <RevealSection id="designs">
        <h1 className="section-header">What Have I Designed?</h1>
        <Designs />
      </RevealSection>
    </>
  );
}
