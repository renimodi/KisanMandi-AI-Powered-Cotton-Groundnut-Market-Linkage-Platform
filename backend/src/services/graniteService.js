require("dotenv").config();

async function askGranite(prompt) {
  if (process.env.DEMO_MODE === "true") {
    return {
      mode: "demo",
      response:
        "Based on the available market information, compare current mandi prices, buyer offers, storage costs, and your expected income before deciding where to sell."
    };
  }

  if (!process.env.IBM_API_KEY || !process.env.IBM_PROJECT_ID) {
    throw new Error(
      "IBM API credentials are missing. Set DEMO_MODE=true or configure IBM credentials."
    );
  }

  return {
    mode: "ibm-granite",
    response:
      "IBM Granite integration is configured but the live API request has not been enabled yet."
  };
}

module.exports = {
  askGranite
};
