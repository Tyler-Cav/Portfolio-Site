import HeaderSection from "../Home/Header/HeaderToApp";
import Photo from "./Components/photo";
import Bio from "./Components/bio";

export default function About() {
  return (
    <>
      <HeaderSection />
      <main>
        <Photo />
        <Bio />
      </main>
    </>
  );
}
