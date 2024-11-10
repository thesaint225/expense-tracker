import { v4 as uuidv4 } from "uuid";

/**
 * Represents an expense transaction with associated metadata
 */

export interface Expense {
  id: string; // Added unique identifier
  name: string;
  category: string;
  note: string;
  amount: number;
  calendar: Date;
  time: Date;
  createdAt: Date; // Added audit field
  updatedAt: Date; // Added audit field
}

/**
 * Service class to manage expenses with proper encapsulation
 */

export class ExpenseManger {
  private expenses: Map<string, Expense> = new Map();

  /**
   * Generates a unique identifier using the UUID library
   * @returns {string} UUID
   */

  private generateUniqueId(): string {
    return uuidv4();
  }

  /**
   * Creates a new expense with validation
   * @throws {Error} If required fields are missing or invalid
   */

  public createExpense(
    params: Omit<Expense, "id" | "createdAt" | "updatedAt">
  ): Expense {
    // validate the input
    if (!params.name?.trim()) {
      throw new Error("Expense name is required");
    }
    if (params.amount <= 0) {
      throw new Error("Amount must be greater than 0");
    }
    if (!(params.calendar instanceof Date)) {
      throw new Error("Invalid calendar date format");
    }
    if (!(params.time instanceof Date)) {
      throw new Error("Invalid time date format");
    }
    const expense: Expense = {
      id: this.generateUniqueId(),
      ...params,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return expense;
  }

  /**
   * Adds an expense to the collection
   * @returns {boolean} Success status
   */

  public addExpense(expense: Expense): boolean {
    try {
      this.expenses.set(expense.id, { ...expense });
      return true;
    } catch (error) {
      console.error("Failed to add expense", error);
      return false;
    }
  }

  /**
   * Retrieves an expense by its id.
   * @param id - The ID of the expense to retrieve.
   * @returns The expense if found, or undefined if not.
   */
  public getExpenseById(id: string): Expense | undefined {
    return this.expenses.get(id);
  }
}
