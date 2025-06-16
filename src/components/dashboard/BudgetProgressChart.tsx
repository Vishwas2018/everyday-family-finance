
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartPie } from "lucide-react";
import { formatCurrency } from "@/data/mockData";

interface CategoryData {
  name: string;
  value: number;
  color: string;
  percentage: number;
}

interface BudgetProgressChartProps {
  categoryData: CategoryData[];
}

// Type-safe tooltip component
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: CategoryData;
  }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-background p-3 border rounded-lg shadow-sm animate-fade-in">
        <p className="font-medium">{data.name}</p>
        <p className="text-sm">{formatCurrency(data.value)}</p>
        <p className="text-xs text-muted-foreground">{data.payload.percentage}% of expenses</p>
      </div>
    );
  }
  return null;
};

const BudgetProgressChart = ({ categoryData }: BudgetProgressChartProps) => {
  return (
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
  );
};

export default BudgetProgressChart;
