function findBestBuyers(crop, quantity, location) {
  const buyers = [
    {
      name: "Gujarat Cotton Traders",
      crop: "cotton",
      location: "Rajkot",
      price: 7100
    },
    {
      name: "Saurashtra Agro Buyers",
      crop: "cotton",
      location: "Gondal",
      price: 7000
    },
    {
      name: "Gujarat Groundnut Exports",
      crop: "groundnut",
      location: "Junagadh",
      price: 6050
    },
    {
      name: "Saurashtra Oil Mills",
      crop: "groundnut",
      location: "Jamnagar",
      price: 5900
    }
  ];

  const matchingBuyers = buyers
    .filter((buyer) => buyer.crop === crop.toLowerCase())
    .sort((a, b) => b.price - a.price);

  return {
    agent: "Buyer Matching Agent",
    crop,
    quantity,
    farmerLocation: location || "Gujarat",
    recommendedBuyers: matchingBuyers
  };
}

module.exports = {
  findBestBuyers
};
