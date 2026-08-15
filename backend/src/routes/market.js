const express = require("express");
const { getMarketData } = require("../data/marketData");

const router = express.Router();

router.get("/", (req, res) => {
  const { crop } = req.query;

  const data = getMarketData(crop);

  res.json({
    success: true,
    count: data.length,
    data
  });
});

module.exports = router;
