import "./style.css";
import { animateStatsOnScroll } from "./animateStats";
import { ExpenseManger } from "./ExpenseManger";
import { IncomeManager } from "./IncomeManager";
import { BudgetManger } from "./budgetManger";
import { Expense } from "./ExpenseManger";

window.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(
    ".stat-item h2"
  ) as NodeListOf<HTMLElement>;
  if (stats) {
    animateStatsOnScroll(stats);
  }
});

// create an instance of budgetManger

// const budgetManger = new BudgetManger();
const incomeManager = new IncomeManager();

// Add some incomes
const income1 = incomeManager.createIncome({
  name: "Engineer",
  amount: 400,
  note: "from fievrr",
  category: "Freelance",
  calendar: new Date(),
  time: new Date(),
});

const income2 = incomeManager.createIncome({
  name: "creative Art ",
  amount: 300,
  note: "from fievrr",
  category: "Freelance",
  calendar: new Date(),
  time: new Date(),
});

// console.log(income1, income2);

const expenseManger = new ExpenseManger();

// add some expense

const expense1 = expenseManger.createExpense({
  name: "breakfast",
  amount: 200,
  note: "with client",
  category: "Food",
  calendar: new Date(),
  time: new Date(),
});

const expense2 = expenseManger.createExpense({
  name: "books",
  amount: 150,
  note: "with Admin",
  category: "stationary",
  calendar: new Date(),
  time: new Date(),
});

// console.log(expense1, expense2);

const budgetManger = new BudgetManger();

const addIncome = budgetManger.addIncome(income1);
const addIncome2 = budgetManger.addIncome(income2);

const addExpense = budgetManger.addExpense(expense1);
const addExpense2 = budgetManger.addExpense(expense2);

console.log(addIncome, addIncome2);

console.log("Total Income", budgetManger.calculateTotalIncome());
console.log("Total Expenses:", budgetManger.calculateTotalExpense());
