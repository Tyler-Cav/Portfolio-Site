import * as React from "react";
import { Outlet } from "react-router-dom";
import './assets/Test-Portfolio-BackGround.svg'
import Footer from "./Pages/Home/Footer/Footer";
import HeaderSection from "./Pages/Home/Header/HeaderToApp";

export default function App() {
  return (
    <>
      <HeaderSection />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
