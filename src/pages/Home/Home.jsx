import NavBar from "../../components/NavBar";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Headroom from "react-headroom";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="">
      <Headroom>
        <NavBar></NavBar>
      </Headroom>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
