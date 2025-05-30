import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface Metric {
  id: string;
  value: string;
  label: string;
  tooltip?: string;
}

const metricsData: Metric[] = [
  { id: 'totalLeads', value: '900', label: 'total leads count' },
  { id: 'avgConversionTime', value: '12', label: 'days in average to convert lead' },
  { id: 'inactiveLeads', value: '30', label: 'inactive leads', tooltip: 'Leads with no activity in the last 30 days.' },
];

const OtherMetrics: React.FC = () => {
  return (
    <TooltipProvider>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {metricsData.map((metric) => (
              <div key={metric.id}>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <div className="flex items-center mt-1">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  {metric.tooltip && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info size={14} className="ml-1.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{metric.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default OtherMetrics;
