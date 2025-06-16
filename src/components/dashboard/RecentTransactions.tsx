
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ArrowDownCircle, ArrowRight } from "lucide-react";
import { getCategoryName, formatCurrency, formatDate } from "@/data/mockData";
import { Transaction } from "@/types/models";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  const renderTransaction = (transaction: Transaction) => (
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
  );

  const incomeTransactions = transactions.filter(t => t.type === "income");
  const expenseTransactions = transactions.filter(t => t.type === "expense");

  return (
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
            {transactions.map(renderTransaction)}
          </TabsContent>
          <TabsContent value="income" className="space-y-4">
            {incomeTransactions.map(renderTransaction)}
          </TabsContent>
          <TabsContent value="expense" className="space-y-4">
            {expenseTransactions.map(renderTransaction)}
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
  );
};

export default RecentTransactions;
