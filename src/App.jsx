import * as React from "react";
import { Outlet } from "react-router-dom";
import './assets/Test-Portfolio-BackGround.svg'
import Footer from "./Pages/Home/Footer/Footer";
import HeaderSection from "./Pages/Home/Header/HeaderToApp";
import Nav from "./Pages/Home/Header/NavBar.jsx";

export default function App() {
  return (
    <>
      <HeaderSection />
      {/* Pinned to the top of the viewport while scrolling */}
      <div className="site-nav">
        <Nav />
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
