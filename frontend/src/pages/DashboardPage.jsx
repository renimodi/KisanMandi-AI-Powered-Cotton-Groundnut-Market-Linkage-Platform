import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>🌾 Farmer Dashboard</h1>

        <p>
          Welcome to your KisanMandi AI dashboard.
        </p>

        <section>
          <h2>📊 Mandi Market Prices</h2>
          <p>
            Compare cotton and groundnut prices across different markets.
          </p>

          <Link to="/market">
            View Mandi Prices
          </Link>
        </section>

        <section>
          <h2>🤖 AI Farmer Advisor</h2>
          <p>
            Get an AI-powered recommendation about where and when to sell.
          </p>

          <Link to="/advisor">
            Ask AI Advisor
          </Link>
        </section>

        <section>
          <h2>🤝 Buyer Marketplace</h2>
          <p>
            Find buyers interested in your crop.
          </p>

          <Link to="/buyers">
            Find Buyers
          </Link>
        </section>

        <section>
          <h2>💰 Income Estimation</h2>
          <p>
            Calculate your estimated income and profit from your harvest.
          </p>
        </section>

        <section>
          <h2>🏪 Storage Recommendation</h2>
          <p>
            Get guidance on whether selling now or storing your produce
            may be better.
          </p>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
