import { v4 as uuidv4 } from "uuid";

export interface Income {
  id: string;
  name: string;
  category: string;
  note: string;
  amount: number;
  calendar: Date;
  time: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Service class to manage incomes with proper encapsulation
 */

export class IncomeManger {
  private incomes: Map<string, Income> = new Map();
  /**
   * Generates a unique identifier using the UUID library
   * @returns {string} UUID
   */
  private generateUniqueId(): string {
    return uuidv4();
  }
  /**
   * Creates a new income with validation
   * @throws {Error} If required fields are missing or invalid
   */
  public createIncome(
    params: Omit<Income, "id" | "createdAt" | "updatedAt">
  ): Income {
    // validate input
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
    const income: Income = {
      id: this.generateUniqueId(),
      ...params,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return income;
  }
}
