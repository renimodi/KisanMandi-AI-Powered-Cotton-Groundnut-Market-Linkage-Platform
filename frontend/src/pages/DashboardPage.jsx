import Navbar from "../components/Navbar";

function DashboardPage() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Farmer Dashboard</h1>

        <p>
          Welcome to your KisanMandi AI dashboard.
        </p>

        <div>
          <h2>🌾 Market Intelligence</h2>
          <p>
            Check current cotton and groundnut market prices.
          </p>
        </div>

        <div>
          <h2>🤖 AI Advisor</h2>
          <p>
            Get personalized recommendations about selling your produce.
          </p>
        </div>

        <div>
          <h2>🤝 Buyer Matching</h2>
          <p>
            Find buyers interested in cotton and groundnut.
          </p>
        </div>

        <div>
          <h2>💰 Income Calculator</h2>
          <p>
            Estimate your revenue and profit.
          </p>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
