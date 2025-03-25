export default function Bio() {
  return (
    <>
      <section className="bio">
        <h1>Who Am I?</h1>
        <ul style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "300px"}}>
          <h3>Account Manager --&gt; Fullstack Web Developer </h3>
          <h3>Recently completed a 6-month Software Engineer Internship at <a href="https://chargeitspot.com/">ChargeItSpot</a>.</h3>
          <h3>Continuous learning is my goal & focus.</h3>
        </ul>
      </section>
    </>
  );
}
