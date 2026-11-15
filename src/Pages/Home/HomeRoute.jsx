import RevealSection from "./RevealSection";
import Bio from "../AboutMe/bio";
import Portfolio from "../Portfolio/PortfolioRoute";
import Designs from "../Designs/designTest";

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
