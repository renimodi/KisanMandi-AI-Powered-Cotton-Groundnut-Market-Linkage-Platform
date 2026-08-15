import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Navbar />

      <header>
        <h1>🌾 KisanMandi AI</h1>

        <p>
          AI-powered cotton and groundnut market linkage platform
          for farmers.
        </p>

        <Link to="/dashboard">
          Open Farmer Dashboard
        </Link>
      </header>

      <main>
        <section>
          <h2>Why KisanMandi AI?</h2>

          <p>
            KisanMandi AI helps farmers make better selling decisions
            using market information, buyer matching and AI-powered
            recommendations.
          </p>
        </section>

        <section>
          <h2>🚜 What You Can Do</h2>

          <ul>
            <li>
              📊 Compare cotton and groundnut mandi prices
            </li>

            <li>
              🤝 Find potential buyers
            </li>

            <li>
              🤖 Get AI-powered selling recommendations
            </li>

            <li>
              🌱 Analyze crop quality
            </li>

            <li>
              💰 Estimate your income and profit
            </li>

            <li>
              🏪 Get storage recommendations
            </li>
          </ul>
        </section>

        <section>
          <h2>Start Here</h2>

          <p>
            Select an option to explore the platform.
          </p>

          <Link to="/market">
            Mandi Prices
          </Link>

          {"  "}

          <Link to="/buyers">
            Find Buyers
          </Link>

          {"  "}

          <Link to="/advisor">
            AI Advisor
          </Link>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
