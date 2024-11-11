import "./style.css";
import { animateStatsOnScroll } from "./animateStats";
import { ExpenseManger } from "./ExpenseManger";

window.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(
    ".stat-item h2"
  ) as NodeListOf<HTMLElement>;
  if (stats) {
    animateStatsOnScroll(stats);
  }
});

// step1 create an instance of ExpenseManger
const expenseMangerInstance = new ExpenseManger();

// step 2 create new expense
const newExpense = expenseMangerInstance.createExpense({
  name: "Lunch",
  category: "Food",
  note: "Lunch with client",
  amount: 20,
  calendar: new Date(),
  time: new Date(),
});

const newExpense1 = expenseMangerInstance.createExpense({
  name: "Grocery Shopping",
  category: "Food",
  note: "Bought vegetables and snacks",
  amount: 50,
  calendar: new Date(),
  time: new Date(),
});

const newExpense2 = expenseMangerInstance.createExpense({
  name: "Electricity Bill",
  category: "Utilities",
  note: "Monthly electricity bill",
  amount: 100,
  calendar: new Date(),
  time: new Date(),
});
const newExpense3 = expenseMangerInstance.createExpense({
  name: "Gas Refill",
  category: "Fuel",
  note: "Refilled gas tank",
  amount: 40,
  calendar: new Date(),
  time: new Date(),
});

console.log(newExpense, newExpense1, newExpense2, newExpense3);

// step 3:Add the expense to the manger
expenseMangerInstance.addExpense(newExpense);
expenseMangerInstance.addExpense(newExpense1);
expenseMangerInstance.addExpense(newExpense2);
expenseMangerInstance.addExpense(newExpense3);

// step 4:retrieve all expenses using getExpense();
const allExpenses = expenseMangerInstance.getExpense();

// step 5 :
if (allExpenses) {
  console.log(allExpenses);
} else {
  throw new Error("can no be found");
}

// retrieve  the expense  by it ID
const expenseId = newExpense.id;
const retrieveExpense = expenseMangerInstance.getExpenseById(expenseId);
console.log(retrieveExpense);
