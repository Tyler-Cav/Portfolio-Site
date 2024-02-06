import { Box, ThemeProvider, createTheme } from "@mui/system";
let projects = {
  avengers: "https://rhemlock7.github.io/avenger-initiative/",
  weather: "https://tyler-cav.github.io/WeatherTrackerAPI/ ",
  passGen: "https://tyler-cav.github.io/Password-Generator/",
  SVG: "https://github.com/Tyler-Cav/SVG-Creator",
  ReadMe: "https://github.com/Tyler-Cav/ReadMe-Template-Creator",
  SQL: "https://github.com/Tyler-Cav/Back-End-eCommerce",
};

function ProjectCards() {
  return (
    <div className="projectBox">
      <a className="basicBorder" href={projects.avengers}>
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
      </a>
    </div>
  );
}

export default ProjectCards;
