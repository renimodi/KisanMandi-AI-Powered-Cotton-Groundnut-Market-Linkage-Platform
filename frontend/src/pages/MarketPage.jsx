import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PriceTable from "../components/PriceTable";
import DemoDataBanner from "../components/DemoDataBanner";
import { getMarketData } from "../services/api";

function MarketPage() {
  const [crop, setCrop] = useState("cotton");
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadMarketData(selectedCrop) {
    setLoading(true);

    try {
      const result = await getMarketData(selectedCrop);
      setMarkets(result.data || []);
    } catch (error) {
      console.error(error);
      setMarkets([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMarketData(crop);
  }, [crop]);

  return (
    <div>
      <Navbar />

      <main>
        <h1>Mandi Market Prices</h1>

        <DemoDataBanner />

        <label htmlFor="crop">
          Select Crop:
        </label>

        <select
          id="crop"
          value={crop}
          onChange={(event) => setCrop(event.target.value)}
        >
          <option value="cotton">Cotton</option>
          <option value="groundnut">Groundnut</option>
        </select>

        {loading ? (
          <p>Loading market prices...</p>
        ) : (
          <PriceTable markets={markets} />
        )}
      </main>
    </div>
  );
}

export default MarketPage;
