const express = require("express");
const { calculateIncome } = require("../agents/incomeAgent");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const {
      crop,
      quantity,
      price,
      costs
    } = req.body;

    if (!crop || !quantity || !price) {
      return res.status(400).json({
        success: false,
        message: "Crop, quantity and price are required."
      });
    }

    const result = calculateIncome(
      crop,
      quantity,
      price,
      costs
    );

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to calculate income.",
      error: error.message
    });
  }
});

module.exports = router;
