
import React from "react";
import { 
  mockBudgetItems, 
  mockCategories, 
  formatCurrency, 
  getCategoryName,
  getCategoryColor
} from "@/data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Plus, Edit, ArrowRight } from "lucide-react";

const Budget = () => {
  // Calculate total budget amount and spent
  const totalBudget = mockBudgetItems.reduce((sum, item) => sum + item.amount, 0);
  const totalSpent = mockBudgetItems.reduce((sum, item) => sum + item.spent, 0);
  const percentSpent = Math.round((totalSpent / totalBudget) * 100);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">Budget</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Budget
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Budget Overview</CardTitle>
          <CardDescription>June 2023</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <p className="text-sm text-muted-foreground">Total Budget</p>
                <p className="text-2xl font-bold">{formatCurrency(totalBudget)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Spent So Far</p>
                <p className="text-2xl font-bold">{formatCurrency(totalSpent)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Remaining</p>
                <p className="text-2xl font-bold">{formatCurrency(totalBudget - totalSpent)}</p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{percentSpent}%</span>
              </div>
              <Progress value={percentSpent} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockBudgetItems.map((budgetItem) => {
          const category = mockCategories.find(c => c.id === budgetItem.categoryId);
          const percentUsed = Math.round((budgetItem.spent / budgetItem.amount) * 100);
          const isOverBudget = budgetItem.spent > budgetItem.amount;
          
          return (
            <Card key={budgetItem.id} className="overflow-hidden">
              <div className="h-1" style={{ backgroundColor: getCategoryColor(budgetItem.categoryId) }} />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">
                    {getCategoryName(budgetItem.categoryId)}
                  </CardTitle>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Spent</span>
                    <span className="text-sm font-medium">
                      {formatCurrency(budgetItem.spent)} of {formatCurrency(budgetItem.amount)}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Progress 
                      value={Math.min(percentUsed, 100)} 
                      className="h-2"
                      indicatorClassName={isOverBudget ? "bg-expense" : undefined}
                    />
                    <div className="flex justify-between text-xs">
                      <span className={isOverBudget ? "text-expense font-medium" : ""}>
                        {percentUsed}% used
                      </span>
                      <span>
                        {isOverBudget 
                          ? `${formatCurrency(budgetItem.spent - budgetItem.amount)} over budget` 
                          : `${formatCurrency(budgetItem.amount - budgetItem.spent)} remaining`}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tips to Stay on Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
              <span>Set realistic budget goals based on your previous spending habits.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
              <span>Review your budget weekly to make adjustments as needed.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
              <span>Consider using the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
              <span>Use cash for discretionary spending to make it more tangible.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
              <span>Plan your meals and grocery lists to avoid impulse buys.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Budget;
