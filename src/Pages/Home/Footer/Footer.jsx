import Github from "../../../assets/github.png";

export default function Footer() {
  return (
    <div className="footer-links">
      <a href="https://github.com/Tyler-Cav">
        <img className="imageLink" src={Github}></img>
      </a>
      <a href="https://www.linkedin.com/in/tylercavanaugh/">
        <svg className="imageLink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 15"><path fill="#171515" fillRule="evenodd" d="M3.494 4.785v9.925H.195V4.785h3.299Zm.217-3.07c0 .952-.716 1.715-1.867 1.715h-.021C.716 3.43 0 2.667 0 1.715 0 .74.738 0 1.866 0 2.995 0 3.69.741 3.711 1.715ZM8.619 14.71H5.32s.044-8.994 0-9.925h3.3V6.19a8.153 8.153 0 0 0-.023.034h.022V6.19c.439-.676 1.223-1.638 2.973-1.638 2.17 0 3.798 1.418 3.798 4.467v5.69h-3.298V9.4c0-1.334-.478-2.244-1.672-2.244-.91 0-1.454.613-1.692 1.206-.087.212-.109.509-.109.805v5.543Z" clipRule="evenodd"></path></svg>
      </a>
    </div>
  );
}
