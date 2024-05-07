// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

let income = transactions.filter((transaction) => {
  if (transaction[0] == "income") {
    return true;
  } else {
    return false;
  }
});

// console.log(income)

let expense = transactions.filter((transcation) => {
  if (transcation[0] == "expense") {
    return true;
  } else {
    return false;
  }
});

// console.log(expense)

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

       


Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
let sum = 0;
const totalIncome = transactions.filter((income) => {
  console.log(income);
  if (income[0] == "income") {
    // sum = sum + income[1]
    sum += income[1];
    return true;
  } else {
    return false;
  }
});

// console.log(sum)

let sum1 = 0;
const totalExpenses = transactions.filter((expenses) => {
  if (expenses[0] == "expense") {
    sum1 += expenses[1];
    return true;
  } else {
    return false;
  }
});

// console.log(sum1)

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

       


Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500], ["income", 700]]

******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.

// let sum3 = sum - sum1;
// console.log(sum3);

const netTotal = transactions.reduce((total, [type, amount]) => {
  return type === "income" ? total + amount : total - amount;
}, 0);

console.log(netTotal);

const result = transactions.filter((income) => {
  if (income > 500) {
    return true;
  } else {
    return false;
  }
});

console.log(income);
