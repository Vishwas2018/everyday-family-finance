
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useIsMobile } from "@/hooks/use-mobile";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-muted/30">
      {/* Sidebar for desktop */}
      {!isMobile && (
        <Sidebar isOpen={true} onClose={() => {}} className="hidden md:block" />
      )}

      {/* Sidebar for mobile - conditional rendering */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} className="w-64" />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
