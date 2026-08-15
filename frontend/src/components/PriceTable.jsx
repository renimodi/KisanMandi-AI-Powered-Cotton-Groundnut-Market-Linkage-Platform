import { formatCurrency } from "../utils/format";

function PriceTable({ markets = [] }) {
  return (
    <div className="price-table">
      <h2>Mandi Prices</h2>

      {markets.length === 0 ? (
        <p>No market data available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Market</th>
              <th>Crop</th>
              <th>Minimum</th>
              <th>Maximum</th>
              <th>Modal Price</th>
            </tr>
          </thead>

          <tbody>
            {markets.map((market, index) => (
              <tr key={`${market.market}-${index}`}>
                <td>{market.market}</td>
                <td>{market.crop}</td>
                <td>{formatCurrency(market.minPrice)}</td>
                <td>{formatCurrency(market.maxPrice)}</td>
                <td>
                  <strong>
                    {formatCurrency(market.modalPrice)}
                  </strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PriceTable;
