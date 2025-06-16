
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpCircle, ArrowDownCircle, PiggyBank, CreditCard } from "lucide-react";
import { formatCurrency } from "@/data/mockData";
import { FinancialSummary } from "@/types/models";

interface FinancialOverviewCardsProps {
  summary: FinancialSummary;
}

const FinancialOverviewCards = ({ summary }: FinancialOverviewCardsProps) => {
  const cards = [
    {
      title: "Total Income",
      value: summary.totalIncome,
      icon: ArrowUpCircle,
      iconColor: "text-income",
      change: "+12% from last month",
      delay: "0ms"
    },
    {
      title: "Total Expenses", 
      value: summary.totalExpenses,
      icon: ArrowDownCircle,
      iconColor: "text-expense",
      change: "-3% from last month",
      delay: "50ms"
    },
    {
      title: "Current Balance",
      value: summary.balance,
      icon: CreditCard,
      iconColor: "text-secondary",
      change: "Updated today",
      delay: "100ms"
    },
    {
      title: "Savings",
      value: summary.savings,
      icon: PiggyBank,
      iconColor: "text-saving",
      change: "24% of income",
      delay: "150ms"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card key={index} className="animate-slide-up" style={{ animationDelay: card.delay }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{formatCurrency(card.value)}</div>
                <Icon className={`h-6 w-6 ${card.iconColor}`} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{card.change}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default FinancialOverviewCards;
