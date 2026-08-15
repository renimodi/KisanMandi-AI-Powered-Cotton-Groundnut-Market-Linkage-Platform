function getStorageRecommendation(crop, price, storageCostPerMonth = 150) {
  const currentPrice = Number(price) || 0;

  let recommendation;
  let reason;

  if (currentPrice >= 7000) {
    recommendation = "SELL NOW";
    reason = "The current market price is relatively strong, so selling now may be favorable.";
  } else if (currentPrice >= 6000) {
    recommendation = "WAIT AND MONITOR";
    reason = "The price is moderate. Monitor the market before making a final decision.";
  } else {
    recommendation = "CONSIDER STORAGE";
    reason = "The current price is relatively low. Storage may be worth considering if safe storage is available.";
  }

  return {
    agent: "Storage Advisor Agent",
    crop,
    currentPrice,
    storageCostPerMonth,
    recommendation,
    reason
  };
}

module.exports = {
  getStorageRecommendation
};
