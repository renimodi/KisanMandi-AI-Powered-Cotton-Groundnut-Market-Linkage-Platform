const express = require("express");
const { getMarketData } = require("../data/marketData");
const { getBuyers } = require("../data/buyersData");

const router = express.Router();

router.get("/", (req, res) => {
  const cottonMarkets = getMarketData("cotton");
  const groundnutMarkets = getMarketData("groundnut");
  const buyers = getBuyers();

  res.json({
    success: true,
    data: {
      cottonMarkets,
      groundnutMarkets,
      totalMarkets:
        cottonMarkets.length + groundnutMarkets.length,
      totalBuyers: buyers.length
    }
  });
});

module.exports = router;
