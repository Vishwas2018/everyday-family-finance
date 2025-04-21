
export type TransactionType = 'income' | 'expense';

export type PaymentFrequency = 'one-time' | 'daily' | 'weekly' | 'bi-weekly' | 'monthly' | 'quarterly' | 'annually';

export type ReminderStatus = 'paid' | 'unpaid' | 'overdue';

export interface CategoryType {
  id: string;
  name: string;
  color: string;
  icon?: string;
  type: TransactionType;
}

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: string;
  type: TransactionType;
  categoryId: string;
  isRecurring: boolean;
  frequency?: PaymentFrequency;
  createdAt: string;
  updatedAt: string;
}

export interface BudgetItem {
  id: string;
  categoryId: string;
  amount: number;
  spent: number;
  month: number;
  year: number;
}

export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  categoryId: string;
  isRecurring: boolean;
  frequency?: PaymentFrequency;
  status: ReminderStatus;
  autoPayEnabled: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface FinancialSummary {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  savings: number;
  monthlyBreakdown: {
    month: string;
    income: number;
    expenses: number;
  }[];
  categoryBreakdown: {
    categoryId: string;
    amount: number;
    percentage: number;
  }[];
}
