import React from 'react';
import { cn } from '@/lib/utils';
import ReasonsLeadsLost from './ReasonsLeadsLost';
import OtherMetrics from './OtherMetrics';

interface ChartsSectionProps {
  className?: string;
}

const ChartsSection: React.FC<ChartsSectionProps> = ({ className }) => {
  return (
    <section className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      <ReasonsLeadsLost />
      <OtherMetrics />
    </section>
  );
};

export default ChartsSection;
