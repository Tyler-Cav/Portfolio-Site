import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Home/Footer/Footer";

export default function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
