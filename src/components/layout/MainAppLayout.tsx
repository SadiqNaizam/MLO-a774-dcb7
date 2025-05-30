import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  title?: string; // Page title to be passed to the Header
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, title, className }) => {
  return (
    <div className={cn("min-h-screen flex flex-col bg-background", className)}>
      <Sidebar />
      <Header title={title} />
      
      <main 
        className={cn(
          "flex-grow p-6 mt-16 md:ml-64 min-w-0 overflow-y-auto" 
          // p-6: mainContent.layout
          // mt-16: offset for fixed Header (h-16)
          // md:ml-64: offset for fixed Sidebar (w-64) on medium screens and up
          // min-w-0 overflow-y-auto: overall.sizing.mainContent
        )}
      >
        {/* This inner div corresponds to 'mainContent.container: "flex flex-col gap-6"' */}
        <div className="flex flex-col gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
