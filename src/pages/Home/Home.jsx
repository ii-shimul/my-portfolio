import NavBar from "../../components/NavBar";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {

  return (
    <div className="">
      
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;