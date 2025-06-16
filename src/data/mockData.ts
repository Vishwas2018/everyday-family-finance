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
  { id: "cat-11", name: "Travel", color: "#FF9800", type: "expense" },
];

// Mock travel expenses data with proper typing
export const mockTravelExpenses = [
  {
    id: "travel-1",
    destination: "Paris, France",
    amount: 2450,
    startDate: "2023-05-15",
    endDate: "2023-05-22",
    status: "completed" as const,
    category: "Vacation"
  },
  {
    id: "travel-2",
    destination: "Tokyo, Japan",
    amount: 3200,
    startDate: "2023-08-10",
    endDate: "2023-08-18",
    status: "planned" as const,
    category: "Vacation"
  },
  {
    id: "travel-3",
    destination: "New York, NY",
    amount: 800,
    startDate: "2023-06-05",
    endDate: "2023-06-08",
    status: "completed" as const,
    category: "Business"
  }
];

// Mock savings goals data with proper typing
export const mockSavingsGoals = [
  {
    id: "savings-1",
    name: "Emergency Fund",
    targetAmount: 15000,
    currentAmount: 8500,
    targetDate: "2024-12-31",
    priority: "high" as const
  },
  {
    id: "savings-2",
    name: "New Car",
    targetAmount: 25000,
    currentAmount: 12000,
    targetDate: "2024-06-30",
    priority: "medium" as const
  },
  {
    id: "savings-3",
    name: "House Down Payment",
    targetAmount: 50000,
    currentAmount: 18500,
    targetDate: "2025-12-31",
    priority: "high" as const
  },
  {
    id: "savings-4",
    name: "Vacation Fund",
    targetAmount: 5000,
    currentAmount: 3200,
    targetDate: "2024-03-31",
    priority: "low" as const
  }
];

// Mock transactions
export const mockTransactions: Transaction[] = [
  {
    id: "txn-1",
    amount: 5200,
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
    amount: 1500,
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
    amount: 250,
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
    amount: 320,
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
    amount: 1800,
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
    amount: 150,
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
    amount: 45,
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
    amount: 120,
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
    amount: 200,
    description: "Doctor's Appointment",
    date: "2023-06-25",
    type: "expense",
    categoryId: "cat-10",
    isRecurring: false,
    createdAt: "2023-06-25T13:00:00Z",
    updatedAt: "2023-06-25T13:00:00Z",
  },
  {
    id: "txn-11",
    amount: 800,
    description: "Business Trip to NYC",
    date: "2023-06-05",
    type: "expense",
    categoryId: "cat-11",
    isRecurring: false,
    createdAt: "2023-06-05T13:00:00Z",
    updatedAt: "2023-06-05T13:00:00Z",
  },
];

// Mock bills and reminders
export const mockBills: Bill[] = [
  {
    id: "bill-1",
    name: "Rent",
    amount: 1800,
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
    amount: 150,
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
    amount: 80,
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
    amount: 65,
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
    amount: 40,
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
    amount: 400,
    spent: 320,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-2",
    categoryId: "cat-5", // Rent
    amount: 1800,
    spent: 1800,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-3",
    categoryId: "cat-6", // Utilities
    amount: 300,
    spent: 235,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-4",
    categoryId: "cat-7", // Transportation
    amount: 200,
    spent: 80,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-5",
    categoryId: "cat-8", // Entertainment
    amount: 150,
    spent: 85,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-6",
    categoryId: "cat-9", // Dining Out
    amount: 300,
    spent: 240,
    month: 6,
    year: 2023,
  },
  {
    id: "budget-7",
    categoryId: "cat-10", // Healthcare
    amount: 250,
    spent: 200,
    month: 6,
    year: 2023,
  },
];

// Mock financial summary
export const mockFinancialSummary: FinancialSummary = {
  totalIncome: 6950,
  totalExpenses: 3715,
  balance: 3235,
  savings: 1668,
  monthlyBreakdown: [
    { month: "Jan", income: 5200, expenses: 3200 },
    { month: "Feb", income: 5200, expenses: 3400 },
    { month: "Mar", income: 5700, expenses: 3600 },
    { month: "Apr", income: 5200, expenses: 3300 },
    { month: "May", income: 6200, expenses: 3800 },
    { month: "Jun", income: 6950, expenses: 3715 },
  ],
  categoryBreakdown: [
    { categoryId: "cat-4", amount: 320, percentage: 8.6 }, // Groceries
    { categoryId: "cat-5", amount: 1800, percentage: 48.5 }, // Rent
    { categoryId: "cat-6", amount: 150, percentage: 4.0 }, // Utilities
    { categoryId: "cat-7", amount: 80, percentage: 2.2 }, // Transportation
    { categoryId: "cat-8", amount: 45, percentage: 1.2 }, // Entertainment
    { categoryId: "cat-9", amount: 120, percentage: 3.2 }, // Dining Out
    { categoryId: "cat-10", amount: 200, percentage: 5.4 }, // Healthcare
    { categoryId: "cat-11", amount: 800, percentage: 21.5 }, // Travel
  ],
};

// Helper function to get category by ID with error handling
export const getCategoryById = (id: string) => {
  if (!id) return undefined;
  return mockCategories.find(category => category.id === id);
};

// Helper function to get category color by ID with fallback
export const getCategoryColor = (id: string) => {
  if (!id) return "#cccccc";
  const category = getCategoryById(id);
  return category ? category.color : "#cccccc";
};

// Helper function to get category name by ID with fallback
export const getCategoryName = (id: string) => {
  if (!id) return "Uncategorized";
  const category = getCategoryById(id);
  return category ? category.name : "Uncategorized";
};

// Function to format currency with error handling
export const formatCurrency = (amount: number) => {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '$0.00';
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

// Function to format date with error handling
export const formatDate = (dateString: string) => {
  if (!dateString) return 'Invalid Date';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};
