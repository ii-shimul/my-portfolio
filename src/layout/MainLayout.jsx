import Headroom from "react-headroom";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../pages/Home/Footer";

const MainLayout = () => {
  return (
    <>
      <Headroom>
        <NavBar></NavBar>
      </Headroom>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
