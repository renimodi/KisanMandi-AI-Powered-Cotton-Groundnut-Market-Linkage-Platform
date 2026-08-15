const { getMandiRecommendation } = require("./mandiAgent");
const { findBestBuyers } = require("./buyerAgent");
const { getStorageRecommendation } = require("./storageAgent");
const { analyzeCropQuality } = require("./qualityAgent");
const { calculateIncome } = require("./incomeAgent");

function runFarmerAdvisor({
  crop,
  quantity,
  location,
  price,
  costs,
  observations
}) {
  const mandi = getMandiRecommendation(crop, quantity);

  const currentPrice = Number(price) || mandi.bestPrice;

  const buyers = findBestBuyers(
    crop,
    quantity,
    location
  );

  const storage = getStorageRecommendation(
    crop,
    currentPrice
  );

  const quality = analyzeCropQuality(
    crop,
    observations
  );

  const income = calculateIncome(
    crop,
    quantity,
    currentPrice,
    costs
  );

  return {
    success: true,
    advisor: "KisanMandi AI Advisor",
    recommendation: {
      crop,
      quantity,
      location,
      recommendedMarket: mandi.bestMarket,
      recommendedPrice: mandi.bestPrice,
      suggestedAction: storage.recommendation
    },
    agents: {
      mandi,
      buyers,
      storage,
      quality,
      income
    }
  };
}

module.exports = {
  runFarmerAdvisor
};
