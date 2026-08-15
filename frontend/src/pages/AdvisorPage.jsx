import { useState } from "react";
import Navbar from "../components/Navbar";
import AgentActivity from "../components/AgentActivity";
import { getAdvisorRecommendation } from "../services/api";

function AdvisorPage() {
  const [form, setForm] = useState({
    crop: "cotton",
    quantity: 25,
    location: "Rajkot",
    price: 7200
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await getAdvisorRecommendation({
        crop: form.crop,
        quantity: Number(form.quantity),
        location: form.location,
        price: Number(form.price)
      });

      setResult(response);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />

      <main>
        <h1>🤖 KisanMandi AI Advisor</h1>

        <p>
          Enter your crop details to receive a market recommendation.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Crop</label>
            <select
              name="crop"
              value={form.crop}
              onChange={handleChange}
            >
              <option value="cotton">Cotton</option>
              <option value="groundnut">Groundnut</option>
            </select>
          </div>

          <div>
            <label>Quantity (quintals)</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              min="1"
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Current Price (₹/quintal)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Analyzing..." : "Get AI Recommendation"}
          </button>
        </form>

        {result && (
          <section>
            <h2>AI Recommendation</h2>

            <p>
              <strong>Recommended Market:</strong>{" "}
              {result.recommendation.recommendedMarket}
            </p>

            <p>
              <strong>Recommended Price:</strong> ₹
              {result.recommendation.recommendedPrice}
            </p>

            <p>
              <strong>Suggested Action:</strong>{" "}
              {result.recommendation.suggestedAction}
            </p>

            <AgentActivity agents={result.agents} />
          </section>
        )}
      </main>
    </div>
  );
}

export default AdvisorPage;
