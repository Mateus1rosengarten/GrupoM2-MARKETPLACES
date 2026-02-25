import { Outlet } from "react-router-dom";
import Navbar from "../sections/navigation/Navbar";
import Footer from "../sections/navigation/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import CookieBanner from "../components/legal/Cookie";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CookieBanner />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
