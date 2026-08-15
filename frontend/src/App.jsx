import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import MarketPage from "./pages/MarketPage";
import BuyersPage from "./pages/BuyersPage";
import AdvisorPage from "./pages/AdvisorPage";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/buyers" element={<BuyersPage />} />
          <Route path="/advisor" element={<AdvisorPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
