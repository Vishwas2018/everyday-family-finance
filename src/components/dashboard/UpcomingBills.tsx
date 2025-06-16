
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate } from "@/data/mockData";
import { Bill } from "@/types/models";

interface UpcomingBillsProps {
  bills: Bill[];
}

const UpcomingBills = ({ bills }: UpcomingBillsProps) => {
  const getBillStatusColor = (bill: Bill) => {
    if (new Date(bill.dueDate) < new Date()) return "text-expense";
    if (new Date(bill.dueDate).getTime() - new Date().getTime() < 3 * 24 * 60 * 60 * 1000) {
      return "text-warning";
    }
    return "text-muted-foreground";
  };

  const getBillStatusText = (bill: Bill) => {
    if (bill.status === "overdue") return "Overdue";
    if (bill.status === "paid") return "Paid";
    return "Unpaid";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Bills</CardTitle>
        <CardDescription>Bills due in the next 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bills.map((bill) => (
            <div key={bill.id} className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-medium">{bill.name}</span>
                <span className="text-sm text-muted-foreground">
                  Due {formatDate(bill.dueDate)}
                </span>
              </div>
              <div className="text-right">
                <span className="font-medium">{formatCurrency(bill.amount)}</span>
                <span className={`text-xs block ${getBillStatusColor(bill)}`}>
                  {getBillStatusText(bill)}
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
  );
};

export default UpcomingBills;
