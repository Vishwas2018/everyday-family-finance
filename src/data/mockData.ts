
import { 
  Transaction, 
  CategoryType, 
  Bill, 
  BudgetItem, 
  FinancialSummary,
  User
} from "@/types/models";

// Mock user
export const mockUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/avatar.jpg"
};

// Mock categories
export const mockCategories: CategoryType[] = [
  { id: "cat-1", name: "Salary", color: "#4CAF50", type: "income" },
  { id: "cat-2", name: "Freelance", color: "#8BC34A", type: "income" },
  { id: "cat-3", name: "Investments", color: "#009688", type: "income" },
  { id: "cat-4", name: "Groceries", color: "#FF5722", type: "expense" },
  { id: "cat-5", name: "Rent", color: "#F44336", type: "expense" },
  { id: "cat-6", name: "Utilities", color: "#9C27B0", type: "expense" },
  { id: "cat-7", name: "Transportation", color: "#3F51B5", type: "expense" },
  { id: "cat-8", name: "Entertainment", color: "#2196F3", type: "expense" },
  { id: "cat-9", name: "Dining Out", color: "#E91E63", type: "expense" },
  { id: "cat-10", name: "Healthcare", color: "#607D8B", type: "expense" },
];

// Mock transactions
export const mockTransactions: Transaction[] = [
  {
    id: "txn-1",
    amount: 3500,
    description: "Monthly Salary",
    date: "2023-06-01",
    type: "income",
    categoryId: "cat-1",
    isRecurring: true,
    frequency: "monthly",
    createdAt: "2023-06-01T08:00:00Z",
    updatedAt: "2023-06-01T08:00:00Z",
  },
  {
    id: "txn-2",
    amount: 500,
    description: "Freelance Project",
    date: "2023-06-10",
    type: "income",
    categoryId: "cat-2",
    isRecurring: false,
    createdAt: "2023-06-10T14:30:00Z",
    updatedAt: "2023-06-10T14:30:00Z",
  },
  {
    id: "txn-3",
    amount: 150,
    description: "Dividend Payment",
    date: "2023-06-15",
    type: "income",
    categoryId: "cat-3",
    isRecurring: false,
    createdAt: "2023-06-15T10:45:00Z",
    updatedAt: "2023-06-15T10:45:00Z",
  },
  {
    id: "txn-4",
    amount: 200,
    description: "Grocery Shopping",
    date: "2023-06-05",
    type: "expense",
    categoryId: "cat-4",
    isRecurring: false,
    createdAt: "2023-06-05T17:20:00Z",
    updatedAt: "2023-06-05T17:20:00Z",
  },
  {
    id: "txn-5",
    amount: 1200,
    description: "Monthly Rent",
    date: "2023-06-03",
    type: "expense",
    categoryId: "cat-5",
    isRecurring: true,
    frequency: "monthly",
    createdAt: "2023-06-03T09:15:00Z",
    updatedAt: "2023-06-03T09:15:00Z",
  },
  {
    id: "txn-6",
    amount: 120,
    description: "Electricity Bill",
    date: "2023-06-08",
    type: "expense",
    categoryId: "cat-6",
    isRecurring: true,
    frequency: "monthly",
    createdAt: "2023-06-08T11:30:00Z",
    updatedAt: "2023-06-08T11:30:00Z",
  },
  {
    id: "txn-7",
    amount: 80,
    description: "Gas & Fuel",
    date: "2023-06-12",
    type: "expense",
    categoryId: "cat-7",
    isRecurring: false,
    createdAt: "2023-06-12T16:40:00Z",
    updatedAt: "2023-06-12T16:40:00Z",
  },
  {
    id: "txn-8",
    amount: 50,
    description: "Movie Night",
    date: "2023-06-18",
    type: "expense",
    categoryId: "cat-8",
    isRecurring: false,
    createdAt: "2023-06-18T20:00:00Z",
    updatedAt: "2023-06-18T20:00:00Z",
  },
  {
    id: "txn-9",
    amount: 75,
    description: "Restaurant Dinner",
    date: "2023-06-20",
    type: "expense",
    categoryId: "cat-9",
    isRecurring: false,
    createdAt: "2023-06-20T19:30:00Z",
    updatedAt: "2023-06-20T19:30:00Z",
  },
  {
    id: "txn-10",
    amount: 130,
    description: "Doctor's Appointment",
    date: "2023-06-25",
    type: "expense",
    categoryId: "cat-10",
    isRecurring: false,
    createdAt: "2023-06-25T13:00:00Z",
    updatedAt: "2023-06-25T13:00:00Z",
  },
];

// Mock bills and reminders
export const mockBills: Bill[] = [
  {
    id: "bill-1",
    name: "Rent",
    amount: 1200,
    dueDate: "2023-07-01",
    categoryId: "cat-5",
    isRecurring: true,
    frequency: "monthly",
    status: "unpaid",
    autoPayEnabled: false,
  },
  {
    id: "bill-2",
    name: "Electricity",
    amount: 120,
    dueDate: "2023-07-10",
    categoryId: "cat-6",
    isRecurring: true,
    frequency: "monthly",
    status: "unpaid",
    autoPayEnabled: true,
  },
  {
    id: "bill-3",
    name: "Internet",
    amount: 75,
    dueDate: "2023-07-15",
    categoryId: "cat-6",
    isRecurring: true,
    frequency: "monthly",
    status: "unpaid",
    autoPayEnabled: true,
  },
  {
    id: "bill-4",
    name: "Phone Bill",
    amount: 60,
    dueDate: "2023-07-18",
    categoryId: "cat-6",
    isRecurring: true,
    frequency: "monthly",
    status: "unpaid",
    autoPayEnabled: false,
  },
  {
    id: "bill-5",
    name: "Gym Membership",
    amount: 50,
    dueDate: "2023-07-05",
    categoryId: "cat-8",
    isRecurring: true,
    frequency: "monthly",
    status: "paid",
    autoPayEnabled: true,
  },
];

// Mock budget items
export const mockBudgetItems: BudgetItem[] = [
  {
    id: "budget-1",
    categoryId: "cat-4", // Groceries
    amount: 300,
    spent: 200,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-2",
    categoryId: "cat-5", // Rent
    amount: 1200,
    spent: 1200,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-3",
    categoryId: "cat-6", // Utilities
    amount: 250,
    spent: 120,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-4",
    categoryId: "cat-7", // Transportation
    amount: 150,
    spent: 80,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-5",
    categoryId: "cat-8", // Entertainment
    amount: 100,
    spent: 50,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-6",
    categoryId: "cat-9", // Dining Out
    amount: 150,
    spent: 75,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-7",
    categoryId: "cat-10", // Healthcare
    amount: 200,
    spent: 130,
    month: 6,
    year: 2023,
  },
];

// Mock financial summary
export const mockFinancialSummary: FinancialSummary = {
  totalIncome: 4150,
  totalExpenses: 1855,
  balance: 2295,
  savings: 1000,
  monthlyBreakdown: [
    { month: "Jan", income: 3700, expenses: 1950 },
    { month: "Feb", income: 3800, expenses: 1850 },
    { month: "Mar", income: 3600, expenses: 1700 },
    { month: "Apr", income: 3900, expenses: 1900 },
    { month: "May", income: 4000, expenses: 1800 },
    { month: "Jun", income: 4150, expenses: 1855 },
  ],
  categoryBreakdown: [
    { categoryId: "cat-4", amount: 200, percentage: 10.8 }, // Groceries
    { categoryId: "cat-5", amount: 1200, percentage: 64.7 }, // Rent
    { categoryId: "cat-6", amount: 120, percentage: 6.5 }, // Utilities
    { categoryId: "cat-7", amount: 80, percentage: 4.3 }, // Transportation
    { categoryId: "cat-8", amount: 50, percentage: 2.7 }, // Entertainment
    { categoryId: "cat-9", amount: 75, percentage: 4.0 }, // Dining Out
    { categoryId: "cat-10", amount: 130, percentage: 7.0 }, // Healthcare
  ],
};

// Helper function to get category by ID
export const getCategoryById = (id: string) => {
  return mockCategories.find(category => category.id === id);
};

// Helper function to get category color by ID
export const getCategoryColor = (id: string) => {
  const category = getCategoryById(id);
  return category ? category.color : "#cccccc";
};

// Helper function to get category name by ID
export const getCategoryName = (id: string) => {
  const category = getCategoryById(id);
  return category ? category.name : "Uncategorized";
};

// Function to format currency
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

// Function to format date
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
};
