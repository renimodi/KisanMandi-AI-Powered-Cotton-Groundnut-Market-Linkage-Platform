function getMandiRecommendation(crop, quantity) {
  const markets = [
    {
      market: "Rajkot",
      price: crop.toLowerCase() === "cotton" ? 7200 : 6100
    },
    {
      market: "Gondal",
      price: crop.toLowerCase() === "cotton" ? 7050 : 6000
    },
    {
      market: "Junagadh",
      price: crop.toLowerCase() === "cotton" ? 6900 : 5950
    },
    {
      market: "Jamnagar",
      price: crop.toLowerCase() === "cotton" ? 6800 : 5850
    }
  ];

  markets.sort((a, b) => b.price - a.price);

  return {
    agent: "Mandi Price Agent",
    crop,
    quantity,
    bestMarket: markets[0].market,
    bestPrice: markets[0].price,
    markets
  };
}

module.exports = {
  getMandiRecommendation
};
