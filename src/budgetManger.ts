import { Expense } from "./ExpenseManger";
import { Income } from "./IncomeManager";

export class BudgetManger {
  public incomes: Income[] = [];
  public expenses: Expense[] = [];

  //   Add income

  addIncome(income: Income): Income {
    this.incomes.unshift(income);
    return income;
  }

  //   Add expense
  addExpense(expense: Expense): Expense {
    this.expenses.push(expense);
    return expense;
  }
  // calculate total income
  calculateTotalIncome(): number {
    return this.incomes.reduce((total, income) => {
      return total + income.amount;
    }, 0);
  }
  calculateTotalExpense(): number {
    return this.expenses.reduce((total, expense) => {
      return total + expense.amount;
    }, 0);
  }

  //   calculate remaining budget

  calculateRemainingBudget(): number {
    const totalIncome = this.calculateTotalIncome();
    const totalExpense = this.calculateTotalExpense();
    return totalIncome - totalExpense;
  }
}
