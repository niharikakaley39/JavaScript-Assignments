/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (let i = 0; i < transactions.length; i++) {
    const t = transactions[i];
    if (categoryTotals[t.category]) {
      categoryTotals[t.category] += t.price;
    } else {
      categoryTotals[t.category] = t.price;
    }
  }

  const keys = Object.keys(categoryTotals);
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    result.push({
      category: keys[i],
      totalSpent: categoryTotals[keys[i]]
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;