import "./App.css";
import Footer from "./sections/navigation/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Navbar from "./sections/navigation/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Plans from "./sections/Plans";

import Contact from "./sections/Contact";
import Companys from "./sections/Companys";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Plans />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
