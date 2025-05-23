import * as ProjectImage from '../.././../assets/portfolio-images'

let projects = [
  {
    link: "https://reaction-simulator.netlify.app/",
    picture: ProjectImage.ReactLogo,
    alt: "",
    header: "REACTion",
    description:
      "A group created game site that tests someones reaction speed by clicking targets.",
  },
  {
    link: "https://tyler-cav.github.io/Wordle/",
    picture: ProjectImage.WordleCloneLogo,
    alt: "",
    header: "Wordle Clone",
    description:
      "A wordle clone that allows you to play the game in your browser.",
  },
  {
    link: "https://github.com/Tyler-Cav/HangmanGame",
    picture: ProjectImage.HangmanLogo,
    alt: "",
    header: "Command Line Hangman",
    description:
      "Test your guessing skills through hangman in your terminal.",
  },
  {
    link: "https://tyler-cav.github.io/CoffeeShopCheckout/",
    picture: ProjectImage.CoffeeCupLogo,
    alt: "",
    header: "Coffee Company Checkout",
    description:
      "A simple coffee brand checkout page using pure HTML/CSS.",
  },
  {
    link: "https://github.com/Tyler-Cav/JobScraper",
    picture: ProjectImage.JobScraperLogo,
    alt: "",
    header: "Job Scraper",
    description: "A python job scraper using a Listrak API.",
  },
  {
    link: "https://rhemlock7.github.io/avenger-initiative/",
    picture: ProjectImage.Avengers,
    alt: "Marvel Avengers Comic Book Photo including Captain America, Thor, Black Panther, and Iron Man",
    header: "Avengers Initiative",
    description:
      "A personal custom workout trainer built around Marvel character physique.",
  },
  {
    link: "https://tyler-cav.github.io/WeatherTrackerAPI/ ",
    picture: ProjectImage.WeatherSVG,
    alt: "",
    header: "Weather Tracker",
    description:
      "A weather tracker in which you can input any city and recieve live weather information.",
  },
  {
    link: "https://tyler-cav.github.io/Password-Generator/",
    picture: ProjectImage.PasswordSVG,
    alt: "",
    header: "Password Generator",
    description: "A randomized password generator using custom alert prompts.",
  },
  {
    link: "https://github.com/Tyler-Cav/SVG-Creator",
    picture: ProjectImage.ShapeSVG,
    alt: "",
    header: "SVG Shape Creator",
    description:
      "An SVG Logo Creator that uses CLI prompts with node to create SVG images.",
  },
  {
    link: "https://github.com/Tyler-Cav/ReadMe-Template-Creator",
    picture: ProjectImage.MarkdownSVG,
    alt: "",
    header: "ReadMe Creator",
    description: "ReadMe template creator that can auto compile a readme.md.",
  },
  {
    link: "https://github.com/Tyler-Cav/Back-End-eCommerce",
    picture: ProjectImage.SqlSVG,
    alt: "",
    header: "SQL",
    description:
      "A backend Ecommerce application using ExpressJS, MySQL, and Sequelize.",
  },

];

const mapProjectCards = projects.map((project, key) => {
  return (
    <a className='cardFrame' href={project.link} key={project.key}>
      <img id="portfolio-image" src={project.picture} alt={project.alt} />
      <div className="cardFrameTextBox">
        <h2 id="cardMobileTextHeader">{project.header}</h2>
        <p id="cardMobileDescription">{project.description}</p>
      </div>
    </a>
  );
});

function ProjectCards() {

  return (
    <>
      <div className="projectBox">{mapProjectCards}</div>;
    </>
  )
}

export default ProjectCards;
