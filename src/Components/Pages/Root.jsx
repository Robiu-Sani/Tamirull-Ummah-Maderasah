import { Outlet } from "react-router-dom";
import Navbar from "../Default/Navbar";
import Footer from "../Default/Footer";

export default function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
