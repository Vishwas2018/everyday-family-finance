
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, MapPin, Calendar, ArrowRight } from "lucide-react";
import { formatCurrency, formatDate } from "@/data/mockData";

interface TravelTrip {
  id: string;
  destination: string;
  amount: number;
  startDate: string;
  endDate: string;
  status: "completed" | "planned";
  category: string;
}

interface TravelExpensesProps {
  trips: TravelTrip[];
}

const TravelExpenses = ({ trips }: TravelExpensesProps) => {
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Travel Expenses</CardTitle>
          <CardDescription>Recent and upcoming trips</CardDescription>
        </div>
        <Plane className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trips.map((trip) => (
            <div key={trip.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  trip.status === "completed" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                }`}>
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{trip.destination}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{formatCurrency(trip.amount)}</p>
                <p className={`text-xs ${
                  trip.status === "completed" ? "text-green-600" : "text-blue-600"
                }`}>
                  {trip.status === "completed" ? "Completed" : "Planned"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          <span>View All Trips</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TravelExpenses;
