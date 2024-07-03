import Github from "../../../assets/github.png";
import LinkedIn from "../../../assets/LinkedIn.png";

export default function Footer() {
  return (
    <>
      <div>
        <a href="https://github.com/Tyler-Cav">
          <img className="imageLink" src={Github}></img>
        </a>
        <a href="https://www.linkedin.com/in/tylercavanaugh/">
          <img className="imageLink" src={LinkedIn}></img>
        </a>
      </div>
    </>
  );
}
