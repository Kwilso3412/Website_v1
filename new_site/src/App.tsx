import { FC, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Experience } from "./components/";
import { Portfolio } from "./components/";
import { Contact } from "./components/";
import { Medium } from "./components/";
import close from "./assets/close.svg";
import menu from "./assets/menu.svg";
import { navLinks } from "./information";

const App: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar
          close={close}
          menu={menu}
          navLinks={navLinks}
          isOpen={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
        />
        <div>
          <div id="hero">
            <Hero />
          </div>
          <div id="experience" className="relative z-30 bg-primary mt-[-2px]">
            <Experience />
          </div>
          <div id="portfolio" className="relative z-30 bg-primary">
            <Portfolio />
          </div>
          <div id="medium" className="relative z-30 bg-primary">
            <Medium />
          </div>
          <div id="contact" className="relative z-30 bg-primary">
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
