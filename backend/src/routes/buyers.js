const express = require("express");
const { getBuyers } = require("../data/buyersData");

const router = express.Router();

router.get("/", (req, res) => {
  const { crop } = req.query;

  const data = getBuyers(crop);

  res.json({
    success: true,
    count: data.length,
    data
  });
});

module.exports = router;
