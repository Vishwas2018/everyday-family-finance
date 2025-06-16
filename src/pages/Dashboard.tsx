
import React from "react";
import { 
  mockTransactions, 
  mockBills, 
  mockFinancialSummary, 
  mockTravelExpenses,
  mockSavingsGoals,
  getCategoryName, 
  getCategoryColor 
} from "@/data/mockData";
import FinancialOverviewCards from "@/components/dashboard/FinancialOverviewCards";
import IncomeExpenseChart from "@/components/dashboard/IncomeExpenseChart";
import UpcomingBills from "@/components/dashboard/UpcomingBills";
import TravelExpenses from "@/components/dashboard/TravelExpenses";
import SavingsGoals from "@/components/dashboard/SavingsGoals";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import BudgetProgressChart from "@/components/dashboard/BudgetProgressChart";

const Dashboard = () => {
  // Get recent transactions (sorted by date, most recent first)
  const recentTransactions = [...mockTransactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  // Get upcoming bills (unpaid, sorted by due date)
  const upcomingBills = [...mockBills]
    .filter(bill => bill.status !== "paid")
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 3);

  // Format category data for the pie chart with proper error handling
  const categoryData = mockFinancialSummary.categoryBreakdown.map((category) => {
    const categoryName = getCategoryName(category.categoryId);
    const categoryColor = getCategoryColor(category.categoryId);
    
    return {
      name: categoryName || "Unknown Category",
      value: category.amount,
      color: categoryColor || "#cccccc",
      percentage: category.percentage,
    };
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* Financial Overview Cards */}
      <FinancialOverviewCards summary={mockFinancialSummary} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Overview Chart */}
        <IncomeExpenseChart data={mockFinancialSummary.monthlyBreakdown} />

        {/* Upcoming Bills */}
        <UpcomingBills bills={upcomingBills} />
      </div>

      {/* Travel Expenses and Savings Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TravelExpenses trips={mockTravelExpenses} />
        <SavingsGoals goals={mockSavingsGoals} />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions transactions={recentTransactions} />

      {/* Budget Progress with Pie Chart */}
      <BudgetProgressChart categoryData={categoryData} />
    </div>
  );
};

export default Dashboard;
