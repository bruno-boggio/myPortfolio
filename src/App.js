import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contato from "./components/Contato";
import Footer from "./components/Footer";


function App() {
  return (
 <div>
   <Navbar />
   <Home />
   <About />
   <Skills />
   <Work />
   <Contato />
   <Footer />
 </div>
  );
}

export default App;
