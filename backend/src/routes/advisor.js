const express = require("express");
const { runFarmerAdvisor } = require("../agents/orchestrator");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const {
      crop,
      quantity,
      location,
      price,
      costs,
      observations
    } = req.body;

    if (!crop || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Crop and quantity are required."
      });
    }

    const result = runFarmerAdvisor({
      crop,
      quantity,
      location,
      price,
      costs,
      observations
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to generate advisor recommendation.",
      error: error.message
    });
  }
});

module.exports = router;
