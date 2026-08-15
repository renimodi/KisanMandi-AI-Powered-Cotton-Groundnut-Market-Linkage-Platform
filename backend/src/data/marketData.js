const marketData = [
  {
    market: "Rajkot",
    district: "Rajkot",
    crop: "cotton",
    variety: "Cotton",
    minPrice: 6800,
    maxPrice: 7400,
    modalPrice: 7200
  },
  {
    market: "Gondal",
    district: "Rajkot",
    crop: "cotton",
    variety: "Cotton",
    minPrice: 6700,
    maxPrice: 7300,
    modalPrice: 7050
  },
  {
    market: "Junagadh",
    district: "Junagadh",
    crop: "cotton",
    variety: "Cotton",
    minPrice: 6600,
    maxPrice: 7200,
    modalPrice: 6900
  },
  {
    market: "Jamnagar",
    district: "Jamnagar",
    crop: "cotton",
    variety: "Cotton",
    minPrice: 6500,
    maxPrice: 7100,
    modalPrice: 6800
  },
  {
    market: "Junagadh",
    district: "Junagadh",
    crop: "groundnut",
    variety: "Groundnut",
    minPrice: 5700,
    maxPrice: 6300,
    modalPrice: 6100
  },
  {
    market: "Rajkot",
    district: "Rajkot",
    crop: "groundnut",
    variety: "Groundnut",
    minPrice: 5600,
    maxPrice: 6200,
    modalPrice: 6000
  },
  {
    market: "Gondal",
    district: "Rajkot",
    crop: "groundnut",
    variety: "Groundnut",
    minPrice: 5500,
    maxPrice: 6150,
    modalPrice: 5950
  },
  {
    market: "Jamnagar",
    district: "Jamnagar",
    crop: "groundnut",
    variety: "Groundnut",
    minPrice: 5400,
    maxPrice: 6050,
    modalPrice: 5850
  }
];

function getMarketData(crop) {
  if (!crop) {
    return marketData;
  }

  return marketData.filter(
    (item) => item.crop.toLowerCase() === crop.toLowerCase()
  );
}

module.exports = {
  marketData,
  getMarketData
};
