
import React, { useState } from "react";
import { 
  mockBills, 
  getCategoryName, 
  formatCurrency, 
  formatDate 
} from "@/data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BellRing, Calendar, Check, Plus, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Bill, ReminderStatus } from "@/types/models";

const Reminders = () => {
  const [bills, setBills] = useState<Bill[]>(mockBills);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // Group bills by status
  const unpaidBills = bills.filter(bill => bill.status === "unpaid");
  const paidBills = bills.filter(bill => bill.status === "paid");
  const overdueBills = bills.filter(bill => bill.status === "overdue");

  // Mark bill as paid
  const markAsPaid = (billId: string) => {
    setBills(prevBills => 
      prevBills.map(bill => 
        bill.id === billId ? { ...bill, status: "paid" as ReminderStatus } : bill
      )
    );
  };

  // Get status badge
  const getStatusBadge = (status: ReminderStatus) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-income">Paid</Badge>;
      case "overdue":
        return <Badge className="bg-expense">Overdue</Badge>;
      case "unpaid":
        const dueDate = new Date();
        return <Badge className="bg-warning">Upcoming</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">Bills & Reminders</h1>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Bill
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Bill</DialogTitle>
              <DialogDescription>
                Set up a new bill or reminder with due date
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input type="text" placeholder="Bill Name" className="col-span-4" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Input type="number" placeholder="Amount" className="col-span-4" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Input type="date" placeholder="Due Date" className="col-span-4" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Select>
                  <SelectTrigger className="col-span-4">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cat-5">Rent</SelectItem>
                    <SelectItem value="cat-6">Utilities</SelectItem>
                    <SelectItem value="cat-8">Entertainment</SelectItem>
                    <SelectItem value="cat-10">Healthcare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="recurring">Recurring Bill</Label>
                <Switch id="recurring" />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="autopay">Auto-pay Enabled</Label>
                <Switch id="autopay" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Bill</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bill Summary</CardTitle>
          <CardDescription>Manage your upcoming bills and payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-warning/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                  <p className="text-2xl font-bold">{unpaidBills.length}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-expense/10 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-expense" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Overdue</p>
                  <p className="text-2xl font-bold">{overdueBills.length}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-income/10 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-income" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Paid this month</p>
                  <p className="text-2xl font-bold">{paidBills.length}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="upcoming">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="paid">Paid</TabsTrigger>
              <TabsTrigger value="all">All Bills</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-4">
              {unpaidBills.length > 0 ? (
                unpaidBills.map((bill) => (
                  <div
                    key={bill.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                      <div className="bg-muted p-3 rounded-full">
                        <BellRing className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{bill.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {getCategoryName(bill.categoryId)}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">Due {formatDate(bill.dueDate)}</Badge>
                          {bill.isRecurring && <Badge variant="outline">Recurring</Badge>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right mr-4">
                        <p className="font-bold">{formatCurrency(bill.amount)}</p>
                        <p className="text-xs text-muted-foreground">
                          {bill.autoPayEnabled ? "Auto-pay enabled" : "Manual payment"}
                        </p>
                      </div>
                      <Button size="sm" onClick={() => markAsPaid(bill.id)}>
                        <Check className="h-4 w-4 mr-2" />
                        Mark Paid
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center p-8">
                  <BellRing className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <h3 className="font-medium mb-1">No upcoming bills</h3>
                  <p className="text-sm text-muted-foreground">
                    You're all caught up! No bills due soon.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="paid" className="space-y-4">
              {paidBills.length > 0 ? (
                paidBills.map((bill) => (
                  <div
                    key={bill.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg bg-muted/20"
                  >
                    <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                      <div className="bg-income/10 p-3 rounded-full">
                        <CheckCircle2 className="h-6 w-6 text-income" />
                      </div>
                      <div>
                        <h3 className="font-medium">{bill.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {getCategoryName(bill.categoryId)}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">Paid on {formatDate(bill.dueDate)}</Badge>
                          {bill.isRecurring && <Badge variant="outline">Recurring</Badge>}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{formatCurrency(bill.amount)}</p>
                      <p className="text-xs text-muted-foreground">
                        {bill.autoPayEnabled ? "Auto-paid" : "Manually paid"}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center p-8">
                  <CheckCircle2 className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <h3 className="font-medium mb-1">No paid bills yet</h3>
                  <p className="text-sm text-muted-foreground">
                    You haven't marked any bills as paid this month.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="all" className="space-y-4">
              {bills.map((bill) => (
                <div
                  key={bill.id}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg ${
                    bill.status === "paid" ? "bg-muted/20" : ""
                  }`}
                >
                  <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                    <div className={`p-3 rounded-full ${
                      bill.status === "paid" 
                        ? "bg-income/10" 
                        : bill.status === "overdue" 
                          ? "bg-expense/10" 
                          : "bg-muted"
                    }`}>
                      {bill.status === "paid" ? (
                        <CheckCircle2 className="h-6 w-6 text-income" />
                      ) : bill.status === "overdue" ? (
                        <AlertTriangle className="h-6 w-6 text-expense" />
                      ) : (
                        <BellRing className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{bill.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {getCategoryName(bill.categoryId)}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">
                          {bill.status === "paid" 
                            ? `Paid on ${formatDate(bill.dueDate)}` 
                            : `Due ${formatDate(bill.dueDate)}`}
                        </Badge>
                        {bill.isRecurring && <Badge variant="outline">Recurring</Badge>}
                        {getStatusBadge(bill.status)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right mr-4">
                      <p className="font-bold">{formatCurrency(bill.amount)}</p>
                      <p className="text-xs text-muted-foreground">
                        {bill.autoPayEnabled ? "Auto-pay enabled" : "Manual payment"}
                      </p>
                    </div>
                    {bill.status !== "paid" && (
                      <Button size="sm" onClick={() => markAsPaid(bill.id)}>
                        <Check className="h-4 w-4 mr-2" />
                        Mark Paid
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reminders;
