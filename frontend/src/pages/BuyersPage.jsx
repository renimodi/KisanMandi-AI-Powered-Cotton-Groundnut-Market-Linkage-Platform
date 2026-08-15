import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BuyerCard from "../components/BuyerCard";
import { getBuyers } from "../services/api";

function BuyersPage() {
  const [crop, setCrop] = useState("cotton");
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadBuyers(selectedCrop) {
    setLoading(true);

    try {
      const result = await getBuyers(selectedCrop);
      setBuyers(result.data || []);
    } catch (error) {
      console.error(error);
      setBuyers([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBuyers(crop);
  }, [crop]);

  return (
    <div>
      <Navbar />

      <main>
        <h1>Buyer Marketplace</h1>

        <label htmlFor="buyer-crop">
          Select Crop:
        </label>

        <select
          id="buyer-crop"
          value={crop}
          onChange={(event) => setCrop(event.target.value)}
        >
          <option value="cotton">Cotton</option>
          <option value="groundnut">Groundnut</option>
        </select>

        {loading ? (
          <p>Finding buyers...</p>
        ) : buyers.length === 0 ? (
          <p>No matching buyers found.</p>
        ) : (
          <div>
            {buyers.map((buyer) => (
              <BuyerCard
                key={buyer.id}
                buyer={buyer}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default BuyersPage;
