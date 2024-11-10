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
console.log(newExpense);

// step 3:Add the expense to the manger
expenseMangerInstance.addExpense(newExpense);

// retrieve  the expense  by it ID
const expenseId = newExpense.id;
const retrieveExpense = expenseMangerInstance.getExpenseById(expenseId);
console.log(retrieveExpense);
