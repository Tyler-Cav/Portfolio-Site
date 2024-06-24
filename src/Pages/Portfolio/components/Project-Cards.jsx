import avengersPic from '../../../assets/avengersAsset.png'

let projects = {
  avengers: "https://rhemlock7.github.io/avenger-initiative/",
  weather: "https://tyler-cav.github.io/WeatherTrackerAPI/ ",
  passGen: "https://tyler-cav.github.io/Password-Generator/",
  SVG: "https://github.com/Tyler-Cav/SVG-Creator",
  ReadMe: "https://github.com/Tyler-Cav/ReadMe-Template-Creator",
  SQL: "https://github.com/Tyler-Cav/Back-End-eCommerce",
  reaction: "https://reaction-simulator.netlify.app/",
  scraper: "https://github.com/Tyler-Cav/JobScraper"
};

function ProjectCards() {
  return (
    <div className="projectBox">
      {/* <a className="basicBorder" href={projects.avengers}>
        Avengers Initiative
      </a>
      <a className="basicBorder" href={projects.weather}>
        Weather Tracker
      </a>
      <a className="basicBorder" href={projects.passGen}>
        Password Generator
      </a>
      <a className="basicBorder" href={projects.SVG}>
        SVG Shape Creator
      </a>
      <a className="basicBorder" href={projects.ReadMe}>
        Read-Me Generator
      </a>
      <a className="basicBorder" href={projects.SQL}>
        SQL
      </a> */}
      <a id="aTag" href={projects.avengers}>
        <div className="cardFrame">
          <img id="portfolioImage" src={avengersPic} alt="Marvel Avengers Comic Book Photo including Captain America, Thor, Black Panther, and Iron Man" />
          <div className="cardFrameTextBox">
            <p id="cardMobileTextHeader">Avengers Initiative</p>
            <p id="cardMobileDescription">A personal custom workout trainer built around Marvel character physique.</p>
          </div>
        </div>
      </a>
      <a id="aTag" href={projects.weather}>
        <div className="cardFrame">
          {/* <img id="portfolioImage" src={avengersPic} alt=""/> */}
          <div className="cardFrameTextBox">
            <p id="cardMobileTextHeader">Weather Tracker</p>
            <p id="cardMobileDescription">A weather tracker in which you can input any city and recieve live weather information.</p>
          </div>
        </div>
      </a>
      <a id="aTag" href={projects.passGen}>
        <div className="cardFrame">
          {/* <img id="portfolioImage" src={avengersPic}*/}
          <div className="cardFrameTextBox">
            <p id="cardMobileTextHeader">Password Generator</p>
            <p id="cardMobileDescription">A randomized password generator using custom alert prompts.</p>
          </div>
        </div>
      </a>
      <a id="aTag" href={projects.SVG}>
        <div className="cardFrame">
          {/* <img id="portfolioImage" src={avengersPic}  */}
          <div className="cardFrameTextBox">
            <p id="cardMobileTextHeader">SVG Shape Creator</p>
            <p id="cardMobileDescription">An SVG Logo Creator that uses CLI prompts with node to create SVG images.</p>
          </div>
        </div>
      </a>
      <a id="aTag" href={projects.ReadMe}>
        <div className="cardFrame">
          {/* <img id="portfolioImage" src={avengersPic}  */}
          <div className="cardFrameTextBox">
            <p id="cardMobileTextHeader">ReadMe Creator</p>
            <p id="cardMobileDescription">ReadMe template creator that can auto compile a readme.md.</p>
          </div>
        </div>
      </a>
      <a id="aTag" href={projects.SQL}>
        <div className="cardFrame">
          {/* <img id="portfolioImage" src={avengersPic} */}
          <div className="cardFrameTextBox">
            <p id="cardMobileTextHeader">SQL</p>
            <p id="cardMobileDescription">A backend created Ecommerce application using ExpressJS, MySQL, and Sequelize.</p>
          </div>
        </div>
      </a>
      <a id="aTag" href={projects.reaction}>
        <div className="cardFrame">
          {/* <img id="portfolioImage" src={avengersPic} */}
          <div className="cardFrameTextBox">
            <p id="cardMobileTextHeader">REACTion</p>
            <p id="cardMobileDescription">A group created game site that tests someones reaction speed by clicking targets.</p>
          </div>
        </div>
      </a>
      <a id="aTag" href={projects.scraper}>
        <div className="cardFrame">
          {/* <img id="portfolioImage" src={avengersPic} */}
          <div className="cardFrameTextBox">
            <p id="cardMobileTextHeader">Job Scraper</p>
            <p id="cardMobileDescription">A python job scraper using a Listrak API.</p>
          </div>
        </div>
      </a>
    </div>

  );
}

export default ProjectCards;
