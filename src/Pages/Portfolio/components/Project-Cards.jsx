import avengersPic from "../../../assets/avengersAsset.png";

let projects = [
  {
    link: "https://rhemlock7.github.io/avenger-initiative/",
    picture: avengersPic,
    alt: "Marvel Avengers Comic Book Photo including Captain America, Thor, Black Panther, and Iron Man",
    header: "Avengers Initiative",
    description:
      "A personal custom workout trainer built around Marvel character physique.",
  },
  {
    link: "https://tyler-cav.github.io/WeatherTrackerAPI/ ",
    picture: "",
    alt: "",
    header: "Weather Tracker",
    description:
      "A weather tracker in which you can input any city and recieve live weather information.",
  },
  {
    link: "https://tyler-cav.github.io/Password-Generator/",
    picture: "",
    alt: "",
    header: "Password Generator",
    description: "A randomized password generator using custom alert prompts.",
  },
  {
    link: "https://github.com/Tyler-Cav/SVG-Creator",
    picture: "",
    alt: "",
    header: "SVG Shape Creator",
    description:
      "An SVG Logo Creator that uses CLI prompts with node to create SVG images.",
  },
  {
    link: "https://github.com/Tyler-Cav/ReadMe-Template-Creator",
    picture: "",
    alt: "",
    header: "ReadMe Creator",
    description: "ReadMe template creator that can auto compile a readme.md.",
  },
  {
    link: "https://github.com/Tyler-Cav/Back-End-eCommerce",
    picture: "",
    alt: "",
    header: "SQL",
    description:
      "A backend created Ecommerce application using ExpressJS, MySQL, and Sequelize.",
  },
  {
    link: "https://reaction-simulator.netlify.app/",
    picture: "",
    alt: "",
    header: "REACTion",
    description:
      "A group created game site that tests someones reaction speed by clicking targets.",
  },
  {
    link: "https://github.com/Tyler-Cav/JobScraper",
    picture: "",
    alt: "",
    header: "Job Scraper",
    description: "A python job scraper using a Listrak API.",
  },
];

const mapProjectCards = projects.map((project, key) => {
  return (
    <>
      <a id="aTag" href={project.link} key={project.key}>
        <div className="cardFrame">
          <img id="portfolioImage" src={project.picture} alt={project.alt} />
          <div className="cardFrameTextBox">
            <p id="cardMobileTextHeader">{project.header}</p>
            <p id="cardMobileDescription">{project.description}</p>
          </div>
        </div>
      </a>
    </>
  );
});

function ProjectCards() {
  return <div className="projectBox">{mapProjectCards}</div>;
}

export default ProjectCards;
