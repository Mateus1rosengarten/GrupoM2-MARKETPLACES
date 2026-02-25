import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage";
import MainLayout from "./layouts/MainLayout";
import DataProtectionPage from "./pages/DataProtectionPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="politica-de-cookies" element={<CookiesPolicyPage />} />
        <Route path="protecao-de-dados" element={<DataProtectionPage />} />
        <Route path="termos-de-uso" element={<TermsOfUsePage />} />
      </Route>
    </Routes>
  );
}

export default App;
