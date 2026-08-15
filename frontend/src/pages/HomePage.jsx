import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <header>
        <h1>🌾 KisanMandi AI</h1>
        <p>
          AI-powered market intelligence for cotton and groundnut farmers.
        </p>
      </header>

      <main>
        <section>
          <h2>Make Better Selling Decisions</h2>

          <p>
            Compare mandi prices, find buyers, estimate your income,
            understand crop quality, and get AI-powered recommendations.
          </p>

          <Link to="/dashboard">
            Go to Farmer Dashboard
          </Link>
        </section>

        <section>
          <h2>What KisanMandi AI Offers</h2>

          <ul>
            <li>📊 Mandi price comparison</li>
            <li>🤖 AI farmer advisor</li>
            <li>🤝 Buyer matching</li>
            <li>🌱 Crop quality analysis</li>
            <li>💰 Income estimation</li>
            <li>🏪 Storage recommendations</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
