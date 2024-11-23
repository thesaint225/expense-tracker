import { Expense } from "./ExpenseManger";
import { Income } from "./IncomeManager";

export class BudgetManager {
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
  public removeIncome(id: string): void {
    // Find the index of income that matches the given id
    const index = this.incomes.findIndex((income) => income.id === id);

    // if income is found , remove it from incomes array
    if (index !== -1) {
      this.incomes.splice(index, 1);
    } else {
      throw new Error("Income not found ");
    }
  }

  public updateIncome(id: string, updatedIncome: Partial<Income>): void {
    // find income by its id
    const index = this.incomes.findIndex((income) => income.id === id);

    // if income exists, update its properties
    if (index !== -1) {
      this.incomes[index] = { ...this.incomes[index], ...updatedIncome };
    } else {
      throw new Error("Income not found ");
    }
  }

  public removeExpense(id: string): void {
    // find index of expense that match the given id
    const index = this.expenses.findIndex((expense) => expense.id === id);
    if (index != -1) {
      this.expenses.splice(index, 1);
    } else {
      throw new Error("Expense not found");
    }
  }

  public updateExpense(id: string, updateExpense: Partial<Expense>): void {
    // Find expense by id
    const index = this.expenses.findIndex((expense) => expense.id === id);
    if (index != -1) {
      // Merge existing expense with the updated properties
      this.expenses[index] = { ...this.expenses[index], ...updateExpense };
    } else {
      throw new Error("expense not found");
    }
  }

  public showIncomes() {
    console.log(this.incomes);
  }
}
