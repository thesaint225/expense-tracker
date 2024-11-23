export interface Expense {
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
