import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import AffiliateDashboard from "./pages/AffiliateDashboard";
import FinanceMonitoring from "./pages/FinanceMonitoring";
import AdminPanel from "./pages/AdminPanel";
import Checkout from "./pages/Checkout";
import Policies from "./pages/Policies";
import Cookies from "./pages/Cookies";
import AITraining from "./pages/AITraining";
import Marketplace from "./pages/Marketplace";
import FreeUserManagement from "./pages/FreeUserManagement";
import RewardsManagement from "./pages/RewardsManagement";
import Pricing from "./pages/Pricing";
import ReferralBonuses from "./pages/ReferralBonuses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AntiHackSecurity from "./utils/AntiHackSecurity";
import WelcomeUser from "./components/WelcomeUser";
import Notifications from "./components/Notifications";
import SocialMediaSharing from "./components/SocialMediaSharing";
import AffiliateRankSystem from "./components/AffiliateRankSystem";
import FraudDetection from "./utils/FraudDetection";
import TwoFactorAuth from "./components/TwoFactorAuth";
import LiveChatSupport from "./components/LiveChatSupport";
import Leaderboards from "./components/Leaderboards";
import RewardsSystem from "./components/RewardsSystem";
import AffiliateInsights from "./components/AffiliateInsights";
import CryptoPayments from "./components/CryptoPayments";
import MultiLanguageSupport from "./components/MultiLanguageSupport";
import ReferralTiers from "./components/ReferralTiers";
import AutomatedPayouts from "./components/AutomatedPayouts";
import AdminApprovalPayouts from "./components/AdminApprovalPayouts";
import CustomizableLandingPages from "./components/CustomizableLandingPages";
import UrgencyTimers from "./components/UrgencyTimers";
import LoyaltySystem from "./components/LoyaltySystem";
import AdminActivityLogs from "./components/AdminActivityLogs";
import DarkModeToggle from "./components/DarkModeToggle";
import SEOTags from "./components/SEOTags";
import PerformanceOptimizer from "./utils/PerformanceOptimizer";
import AccessibilityFeatures from "./components/AccessibilityFeatures";
import LinkShortener from "./components/LinkShortener";
import "./styles/colors.css";
import Logo from "./assets/Screenshot 2025-02-11 220338.png";

function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear user session data (if any)
    localStorage.removeItem("userToken");
    navigate("/");
  };
  return (
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <img src={Logo} alt="DigiNexus Logo" className="logo" />
          <LogoutButton />
        </header>
        <DarkModeToggle />
        <WelcomeUser />
        <Notifications />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/affiliate-dashboard" element={<AffiliateDashboard />} />
          <Route path="/finance-monitoring" element={<FinanceMonitoring />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/ai-training" element={<AITraining />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/free-user-management" element={<FreeUserManagement />} />
          <Route path="/rewards-management" element={<RewardsManagement />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/referral-bonuses" element={<ReferralBonuses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} DigiNexus Affiliates. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
