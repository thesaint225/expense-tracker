import "./style.css";
import { animateStatsOnScroll } from "./animateStats";
import { ExpenseManger } from "./ExpenseManger";
import { IncomeManager } from "./IncomeManager";
import { BudgetManager } from "./budgetManger";
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

const budgetManger = new BudgetManager();

const addIncome = budgetManger.addIncome(income1);
const addIncome2 = budgetManger.addIncome(income2);

const addExpense = budgetManger.addExpense(expense1);
const addExpense2 = budgetManger.addExpense(expense2);

console.log(addExpense, addExpense2);

budgetManger.updateExpense(addExpense.id, { note: "with ceo" });
console.log(addExpense);
console.log("updated Expense", budgetManger.expenses);

// console.log(addIncome, addIncome2);

// console.log("Total Income", budgetManger.calculateTotalIncome());
// console.log("Total Expenses:", budgetManger.calculateTotalExpense());

// Optionally log the entire budgetManager state
// console.log("Incomes in BudgetManager:", budgetManger.incomes);
// console.log("Expenses in BudgetManager:", budgetManger.expenses);

// const remainingBudget = budgetManger.calculateRemainingBudget();
// console.log(remainingBudget);

// budgetManger.showIncomes();

// try {
//   budgetManger.updateIncome(addIncome.id, { name: "webDesigner" });
//   console.log("after update:", budgetManger.addIncome);
// } catch (error) {
//   if (error instanceof Error) {
//     console.error(error.message);
//   } else {
//     console.error("unknown error ");
//   }
// }
