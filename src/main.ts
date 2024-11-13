import "./style.css";
import { animateStatsOnScroll } from "./animateStats";
import { ExpenseManger } from "./ExpenseManger";
import { IncomeManger } from "./IncomeManager";

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
const IncomeMangerInstance = new IncomeManger();

// step 2 create new expense
const newIncome1 = IncomeMangerInstance.createIncome({
  name: "Lunch",
  category: "Food",
  note: "Lunch with client",
  amount: 20,
  calendar: new Date(),
  time: new Date(),
});

const newIncome2 = expenseMangerInstance.createExpense({
  name: "Grocery Shopping",
  category: "Food",
  note: "Bought vegetables and snacks",
  amount: 50,
  calendar: new Date(),
  time: new Date(),
});

const newIncome3 = IncomeMangerInstance.createIncome({
  name: "Electricity Bill",
  category: "Utilities",
  note: "Monthly electricity bill",
  amount: 100,
  calendar: new Date(),
  time: new Date(),
});
const newIcome4 = expenseMangerInstance.createExpense({
  name: "Gas Refill",
  category: "Fuel",
  note: "Refilled gas tank",
  amount: 40,
  calendar: new Date(),
  time: new Date(),
});

console.log(newIncome1, newIncome2, newIncome3, newIcome4);

// step 3:Add the expense to the manger
// expenseMangerInstance.addExpense(newExpense);
// expenseMangerInstance.addExpense(newExpense1);
// expenseMangerInstance.addExpense(newExpense2);
// expenseMangerInstance.addExpense(newExpense3);

// // step 4:retrieve all expenses using getExpense();
// const allExpenses = expenseMangerInstance.getExpense();

// // step 5 :
// if (allExpenses) {
//   console.log(allExpenses);
// } else {
//   throw new Error("can no be found");
// }

// // step6:
// const deleteSuccess = expenseMangerInstance.deleteExpense(newExpense1.id);
// if (deleteSuccess) {
//   console.log(`Expense with ID ${newExpense.id} was deleted successfully.`);
// } else {
//   console.log(`Failed to delete expense with ID ${newExpense.id}.`);
// }

// // Verify by checking the remaining expenses
// const remainingExpenses = expenseMangerInstance.getExpense();
// console.log("Remaining Expenses:", remainingExpenses);

// // retrieve  the expense  by it ID
// const expenseId = newExpense.id;
// const retrieveExpense = expenseMangerInstance.getExpenseById(expenseId);
// console.log(retrieveExpense);

// // Delete all entries

// expenseMangerInstance.deleteAll();
// console.log(expenseMangerInstance.getExpense()); // Output: []
