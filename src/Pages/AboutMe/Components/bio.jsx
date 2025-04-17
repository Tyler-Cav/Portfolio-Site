import './bio.css'

export default function Bio() {
  return (
    <section className="bio-page-container">
      <h1 id='bioHeader'>Who Am I?</h1>
      <ul className="bio-list">
        <div>
          <p>From</p>
          <h3><strong style={{ fontWeight: "600" }}>Account Manager</strong></h3>
          <p>to</p>
          <h3><strong style={{ fontWeight: "600", fontSize: "1.2em", overFlowWrap: "break-word" }}>Fullstack Web Developer</strong></h3>
        </div>
        <div><h3 style={{ fontSize: "40px" }}>Recently completed a 6-month Software Engineer Internship at <a href="https://chargeitspot.com/">ChargeItSpot</a></h3></div>
        <h3 style={{ fontSize: "40px" }}>A passion for Frontend, UX/UI, and Data</h3>
      </ul>
    </section >
  );
}
