function calculateIncome(crop, quantity, price, costs = {}) {
  const totalQuantity = Number(quantity) || 0;
  const sellingPrice = Number(price) || 0;

  const transport = Number(costs.transport || 0);
  const storage = Number(costs.storage || 0);
  const labor = Number(costs.labor || 0);
  const other = Number(costs.other || 0);

  const grossIncome = totalQuantity * sellingPrice;
  const totalCosts = transport + storage + labor + other;
  const estimatedProfit = grossIncome - totalCosts;

  return {
    agent: "Income Agent",
    crop,
    quantity: totalQuantity,
    pricePerQuintal: sellingPrice,
    grossIncome,
    totalCosts,
    estimatedProfit,
    profitPerQuintal:
      totalQuantity > 0 ? estimatedProfit / totalQuantity : 0
  };
}

module.exports = {
  calculateIncome
};
