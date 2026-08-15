function analyzeCropQuality(crop, observations = {}) {
  const moisture = Number(observations.moisture || 0);
  const damage = Number(observations.damage || 0);

  let grade = "A";
  let score = 90;

  if (moisture > 12 || damage > 10) {
    grade = "B";
    score = 75;
  }

  if (moisture > 16 || damage > 20) {
    grade = "C";
    score = 60;
  }

  return {
    agent: "Quality Grading Agent",
    crop,
    qualityGrade: grade,
    qualityScore: score,
    observations: {
      moisture,
      damage
    },
    recommendation:
      grade === "A"
        ? "Good quality. The produce may attract better buyers."
        : "Consider improving drying, cleaning, or storage conditions before selling."
  };
}

module.exports = {
  analyzeCropQuality
};
