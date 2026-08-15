const express = require("express");
const { analyzeCropQuality } = require("../agents/qualityAgent");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { crop, observations } = req.body;

    if (!crop) {
      return res.status(400).json({
        success: false,
        message: "Crop is required."
      });
    }

    const result = analyzeCropQuality(crop, observations);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to analyze crop quality.",
      error: error.message
    });
  }
});

module.exports = router;
