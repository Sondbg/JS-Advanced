function calculateBill(fruit,grams,priceKG){
console.log(`I need $${((grams/1000)*priceKG).toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`);
}
calculateBill('orange', 2500, 1.80)
calculateBill('apple', 1563, 2.35)