
import NavBar from "../component/NavBar";
import Banner from "../component/Banner";
import About from "../component/About";
import Project from "../component/Project";
import Contact from "../component/Contact";
import Skills from "../component/Skills";
import { Toaster } from "react-hot-toast";
import Footer from "../component/Footer";


const LayOut = () => {
    return (
        <div className="max-w-7xl mx-auto">
              <Toaster />
            <NavBar></NavBar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default LayOut;