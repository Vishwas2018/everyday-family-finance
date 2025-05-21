
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
  Menu, 
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
    { name: "Dashboard", icon: LayoutDashboard, path: "/", color: "bg-gradient-to-r from-sky-blue-300 to-sky-blue-500" },
    { name: "Transactions", icon: ReceiptText, path: "/transactions", color: "bg-gradient-to-r from-coral-300 to-coral-500" },
    { name: "Budget", icon: PiggyBank, path: "/budget", color: "bg-gradient-to-r from-green-300 to-green-500" },
    { name: "Reminders", icon: BellRing, path: "/reminders", color: "bg-gradient-to-r from-yellow-300 to-yellow-500" },
    { name: "Reports", icon: LineChart, path: "/reports", color: "bg-gradient-to-r from-sky-blue-200 to-coral-300" },
    { name: "Settings", icon: Settings, path: "/settings", color: "bg-gradient-to-r from-gray-300 to-gray-500" },
  ];

  return (
    <div
      className={cn(
        "h-screen flex flex-col border-r border-border transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-0 md:w-16",
        "bg-gradient-to-b from-[#9b87f5]/20 to-[#7E69AB]/30 backdrop-blur-md",
        className
      )}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className={cn(
          "font-bold text-xl transition-all duration-300 text-gradient-primary",
          isOpen ? "opacity-100" : "opacity-0 md:opacity-0"
        )}>
          FamilyFinance
        </h1>
        <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden hover:bg-white/20">
          <X size={20} className="text-gray-800" />
        </Button>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2.5 rounded-md transition-all duration-300 group hover:scale-105",
                isActive
                  ? `${item.color} text-white shadow-md` 
                  : "hover:bg-white/30 text-gray-800 hover:text-gray-900"
              )}
            >
              <item.icon 
                size={20} 
                className={cn(
                  "flex-shrink-0 transition-transform duration-300",
                  isActive ? "text-white" : "text-gray-700 group-hover:text-gray-900",
                  isOpen ? "" : "scale-110"
                )} 
              />
              <span className={cn(
                "ml-3 font-medium transition-all duration-300 animate-fade-in",
                isOpen ? "opacity-100" : "opacity-0 md:opacity-0 hidden md:block"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <div className={cn(
          "p-3 bg-white/30 backdrop-blur-sm rounded-lg shadow-md transition-all duration-300 border border-white/20 hover:shadow-lg hover:-translate-y-1",
          isOpen ? "block" : "hidden md:hidden"
        )}>
          <p className="text-sm font-medium text-gray-800">
            Need help with budgeting?
          </p>
          <Button className="mt-2 w-full text-xs bg-gradient-to-r from-sky-blue-400 to-sky-blue-500 text-white hover:opacity-90">
            View tips
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
