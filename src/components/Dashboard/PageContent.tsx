import React from 'react';
import { cn } from '@/lib/utils';
import FunnelCount from './FunnelCount';
import SourcePieChart from './SourcePieChart';
import LeadsTracking from './LeadsTracking';
import ChartsSection from './ChartsSection';

interface PageContentProps {
  className?: string;
}

const PageContent: React.FC<PageContentProps> = ({ className }) => {
  return (
    <main className={cn('p-6 space-y-6 mt-16 md:ml-64', className)}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <FunnelCount />
        </div>
        <div className="lg:col-span-2">
          <SourcePieChart />
        </div>
      </div>
      <LeadsTracking />
      <ChartsSection />
    </main>
  );
};

export default PageContent;
