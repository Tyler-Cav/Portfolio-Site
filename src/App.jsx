import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Home/Footer/Footer";
import HeaderSection from "./Pages/Home/Header/HeaderToApp";

export default function App() {
  return (
    <>
      <HeaderSection />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
