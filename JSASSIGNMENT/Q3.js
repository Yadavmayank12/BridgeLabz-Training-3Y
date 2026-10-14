let expenses = [5000, 2000, 10000, 1500, 1000];
let total = 0;

for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

console.log("Total: Rs." + total.toFixed(2));
console.log("Average: Rs." + average.toFixed(2));
console.log("Tax: Rs." + tax.toFixed(2));
console.log("Final Amount: Rs." + finalAmount.toFixed(2));
