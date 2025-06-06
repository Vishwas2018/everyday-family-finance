
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  PiggyBank, 
  ReceiptText, 
  LineChart, 
  BellRing, 
  Settings, 
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, className }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Transactions", icon: ReceiptText, path: "/transactions" },
    { name: "Budget", icon: PiggyBank, path: "/budget" },
    { name: "Reminders", icon: BellRing, path: "/reminders" },
    { name: "Reports", icon: LineChart, path: "/reports" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div
      className={cn(
        "h-screen flex flex-col border-r border-border bg-card transition-all duration-300 ease-out",
        isOpen ? "w-64" : "w-0 md:w-16",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h1 className={cn(
          "font-bold text-xl text-primary transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 md:opacity-0"
        )}>
          FamilyFinance
        </h1>
        <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden hover:bg-muted">
          <X size={20} />
        </Button>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2.5 rounded-md transition-all duration-200 group hover:bg-muted",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon 
                size={20} 
                className={cn(
                  "flex-shrink-0",
                  isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                )} 
              />
              <span className={cn(
                "ml-3 font-medium transition-all duration-300",
                isOpen ? "opacity-100" : "opacity-0 md:opacity-0 hidden md:block"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className={cn(
          "p-3 bg-muted rounded-lg transition-all duration-300",
          isOpen ? "block" : "hidden md:hidden"
        )}>
          <p className="text-sm font-medium text-foreground mb-2">
            Need help with budgeting?
          </p>
          <Button className="w-full text-xs bg-primary hover:bg-primary/90 text-primary-foreground">
            View tips
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
