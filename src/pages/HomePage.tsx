import Footer from "../sections/navigation/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import Navbar from "../sections/navigation/Navbar";
import Services from "../sections/Services";
import About from "../sections/about/About";
import Plans from "../sections/Plans";
import Hero from "../sections/Hero";
import Contact from "../sections/contact/Contact";
import CookieBanner from "../components/legal/Cookie";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Plans />
      <Contact />
    </>
  );
};

export default HomePage;
