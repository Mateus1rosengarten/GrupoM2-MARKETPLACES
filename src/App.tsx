import "./App.css";
import "./index.css";
import Footer from "./sections/navigation/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Navbar from "./sections/navigation/Navbar";
import Services from "./sections/Services";
import About from "./sections/about/About";
import Plans from "./sections/Plans";
import Hero from "./sections/Hero";
import Contact from "./sections/contact/Contact";
import CookieBanner from "./components/ui/Cookie";

function App() {
  return (
    <>
      <CookieBanner />
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
