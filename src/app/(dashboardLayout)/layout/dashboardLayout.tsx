"use client";
import React, { useState } from "react";
import { SidebarContext } from "./layout-context";

// import { SidebarContext } from "./layout-context";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
   <div>
     <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
   </div>
  );
};

export default DashboardLayout;