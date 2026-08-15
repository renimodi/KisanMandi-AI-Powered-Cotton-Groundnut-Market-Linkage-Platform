const buyers = [
  {
    id: 1,
    name: "Gujarat Cotton Traders",
    crop: "cotton",
    location: "Rajkot",
    district: "Rajkot",
    pricePerQuintal: 7100,
    minQuantity: 5,
    maxQuantity: 500,
    contact: "Buyer available through KisanMandi"
  },
  {
    id: 2,
    name: "Saurashtra Agro Buyers",
    crop: "cotton",
    location: "Gondal",
    district: "Rajkot",
    pricePerQuintal: 7000,
    minQuantity: 10,
    maxQuantity: 300,
    contact: "Buyer available through KisanMandi"
  },
  {
    id: 3,
    name: "Gujarat Groundnut Exports",
    crop: "groundnut",
    location: "Junagadh",
    district: "Junagadh",
    pricePerQuintal: 6050,
    minQuantity: 10,
    maxQuantity: 400,
    contact: "Buyer available through KisanMandi"
  },
  {
    id: 4,
    name: "Saurashtra Oil Mills",
    crop: "groundnut",
    location: "Jamnagar",
    district: "Jamnagar",
    pricePerQuintal: 5900,
    minQuantity: 5,
    maxQuantity: 250,
    contact: "Buyer available through KisanMandi"
  }
];

function getBuyers(crop) {
  if (!crop) {
    return buyers;
  }

  return buyers.filter(
    (buyer) => buyer.crop.toLowerCase() === crop.toLowerCase()
  );
}

module.exports = {
  buyers,
  getBuyers
};
