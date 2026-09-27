import './bio.css'
import './flipdots'

export default function Bio() {
  return (
    <section className="bio-page-container">
      <h1 id='bioHeader'>Who Am I?</h1>
      <ul className="bio-list">
        <div>
          <p>From</p>
          <h3><strong style={{ fontWeight: "600" }}>Account Manager</strong></h3>
          <p>to</p>
          <h3><strong style={{ fontWeight: "600", fontSize: "1.2em", overFlowWrap: "break-word" }}>Designer & Developer</strong></h3>
        </div>
        <div><h3 style={{ fontSize: "40px" }}>Currently a UI Developer at <a href="https://www.onesky.xyz/">One Sky</a></h3></div>
        <h3 style={{ fontSize: "40px" }}>A passion for Frontend, Design, and Data</h3>
      </ul>
    </section >

  );
}
