import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Users,
  UserRound,
  FileText,
  Receipt,
  ShoppingBag,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Box, // Placeholder for logo
  Menu // For potential toggle, or as visual element
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: UserRound, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#' },
  { id: 'invoices', label: 'Invoices', icon: Receipt, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingBag, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#' },
];

const footerNavItems: NavItem[] = [
  { id: 'help', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
];

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside 
      className={cn(
        'fixed top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col border-r border-border',
        className
      )}
    >
      <div className="p-4 border-b border-border flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Box size={28} className="text-primary" />
          <span className="font-semibold text-lg">bo</span>
        </div>
        {/* Hamburger for mobile, if sidebar were collapsible. Current styling keeps it fixed. */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={20} />
        </Button>
      </div>

      <nav className="flex-grow p-2 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => (
          <Button
            key={item.id}
            variant={item.isActive ? 'secondary' : 'ghost'}
            className={cn(
              'w-full justify-start',
              item.isActive ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'hover:bg-muted/50 text-sidebar-foreground'
            )}
            asChild
          >
            <a href={item.href}>
              <item.icon size={18} className="mr-3" />
              {item.label}
            </a>
          </Button>
        ))}
      </nav>

      <div className="p-2 border-t border-border space-y-1">
        {footerNavItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className="w-full justify-start hover:bg-muted/50 text-sidebar-foreground"
            asChild
          >
            <a href={item.href}>
              <item.icon size={18} className="mr-3" />
              {item.label}
            </a>
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
