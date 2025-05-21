import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  mockTransactions, 
  mockBills, 
  mockFinancialSummary, 
  getCategoryName, 
  formatCurrency, 
  formatDate,
  getCategoryColor 
} from "@/data/mockData";
import { ArrowUpCircle, ArrowDownCircle, PiggyBank, CreditCard, ArrowRight, ChartPie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ChartContainer, ChartTooltipContent, ChartTooltip } from "@/components/ui/chart";

const Dashboard = () => {
  // Get recent transactions
  const recentTransactions = [...mockTransactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  // Get upcoming bills
  const upcomingBills = [...mockBills]
    .filter(bill => bill.status !== "paid")
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 3);

  // Format category data for the pie chart
  const categoryData = mockFinancialSummary.categoryBreakdown.map((category) => ({
    name: getCategoryName(category.categoryId),
    value: category.amount,
    color: getCategoryColor(category.categoryId),
    percentage: category.percentage,
  }));

  // Custom tooltip for pie chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border rounded-lg shadow-sm animate-fade-in">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">{formatCurrency(payload[0].value)}</p>
          <p className="text-xs text-muted-foreground">{payload[0].payload.percentage}% of expenses</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Financial Overview Cards */}
        <Card className="animate-slide-up" style={{ animationDelay: "0ms" }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{formatCurrency(mockFinancialSummary.totalIncome)}</div>
              <ArrowUpCircle className="h-6 w-6 text-income" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="animate-slide-up" style={{ animationDelay: "50ms" }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{formatCurrency(mockFinancialSummary.totalExpenses)}</div>
              <ArrowDownCircle className="h-6 w-6 text-expense" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">-3% from last month</p>
          </CardContent>
        </Card>

        <Card className="animate-slide-up" style={{ animationDelay: "100ms" }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{formatCurrency(mockFinancialSummary.balance)}</div>
              <CreditCard className="h-6 w-6 text-secondary" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Updated today</p>
          </CardContent>
        </Card>

        <Card className="animate-slide-up" style={{ animationDelay: "150ms" }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{formatCurrency(mockFinancialSummary.savings)}</div>
              <PiggyBank className="h-6 w-6 text-saving" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">24% of income</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Overview Chart */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
            <CardDescription>Monthly overview of your finances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockFinancialSummary.monthlyBreakdown}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  <Line type="monotone" dataKey="income" stroke="#4CAF50" strokeWidth={2} />
                  <Line type="monotone" dataKey="expenses" stroke="#F44336" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Bills */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bills</CardTitle>
            <CardDescription>Bills due in the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBills.map((bill) => (
                <div key={bill.id} className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-medium">{bill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      Due {formatDate(bill.dueDate)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-medium">{formatCurrency(bill.amount)}</span>
                    <span className={`text-xs block ${
                      new Date(bill.dueDate) < new Date() 
                        ? "text-expense" 
                        : new Date(bill.dueDate).getTime() - new Date().getTime() < 3 * 24 * 60 * 60 * 1000 
                          ? "text-warning" 
                          : "text-muted-foreground"
                    }`}>
                      {bill.status === "overdue" 
                        ? "Overdue" 
                        : bill.status === "paid" 
                          ? "Paid" 
                          : "Unpaid"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View All Bills
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest financial activities</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="expense">Expense</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className={`rounded-full p-2 mr-3 ${
                      transaction.type === "income" ? "bg-income/10" : "bg-expense/10"
                    }`}>
                      {transaction.type === "income" ? (
                        <ArrowUpCircle className="h-5 w-5 text-income" />
                      ) : (
                        <ArrowDownCircle className="h-5 w-5 text-expense" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {getCategoryName(transaction.categoryId)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      transaction.type === "income" ? "text-income" : "text-expense"
                    }`}>
                      {transaction.type === "income" ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(transaction.date)}
                    </p>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="income" className="space-y-4">
              {recentTransactions
                .filter(t => t.type === "income")
                .map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="bg-income/10 rounded-full p-2 mr-3">
                        <ArrowUpCircle className="h-5 w-5 text-income" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {getCategoryName(transaction.categoryId)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-income">
                        +{formatCurrency(transaction.amount)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(transaction.date)}
                      </p>
                    </div>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="expense" className="space-y-4">
              {recentTransactions
                .filter(t => t.type === "expense")
                .map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="bg-expense/10 rounded-full p-2 mr-3">
                        <ArrowDownCircle className="h-5 w-5 text-expense" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {getCategoryName(transaction.categoryId)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-expense">
                        -{formatCurrency(transaction.amount)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(transaction.date)}
                      </p>
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="ml-auto">
            <span>View All</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      {/* Budget Progress with Pie Chart */}
      <Card className="animate-enter">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Budget Progress</CardTitle>
            <CardDescription>This month's spending by category</CardDescription>
          </div>
          <ChartPie className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    className="animate-fade-in"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend formatter={(value) => <span className="text-xs">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 space-y-2 mt-4 md:mt-0 glass p-4 animate-fade-in">
              <h4 className="text-sm font-medium mb-2">Category Breakdown</h4>
              {categoryData.sort((a, b) => b.value - a.value).map((category) => (
                <div key={category.name} className="flex items-center justify-between hover:bg-background/50 p-1 rounded-md transition-colors">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-xs">{category.name}</span>
                  </div>
                  <span className="text-xs font-medium">{formatCurrency(category.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
