const express = require("express");
const cors = require("cors");
require("dotenv").config();

const marketRoutes = require("./routes/market");
const buyerRoutes = require("./routes/buyers");
const advisorRoutes = require("./routes/advisor");
const qualityRoutes = require("./routes/quality");
const incomeRoutes = require("./routes/income");
const dashboardRoutes = require("./routes/dashboard");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to KisanMandi AI API",
    status: "running"
  });
});

app.use("/api/market", marketRoutes);
app.use("/api/buyers", buyerRoutes);
app.use("/api/advisor", advisorRoutes);
app.use("/api/quality", qualityRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`KisanMandi AI backend running on port ${PORT}`);
});
