import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string; // Tailwind bg color class e.g., 'bg-red-500'
  averageTimeTooltip?: string;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-500' },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400', averageTimeTooltip: 'Average 2 days on this stage' },
  { id: 'inConversation', name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-indigo-600' }, // The image shows a tooltip here instead of fixed days
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-500' },
  { id: 'closedWon', name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const totalActiveLeads = 600;

const FunnelCount: React.FC = () => {
  const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <TooltipProvider>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Funnel count</CardTitle>
          <div className="text-3xl font-bold mt-2">{totalActiveLeads} <span className="text-sm font-normal text-muted-foreground">active leads</span></div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex w-full h-3 rounded-full overflow-hidden">
              {funnelData.map((stage) => (
                <div
                  key={stage.id}
                  className={cn('h-full', stage.color)}
                  style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
                />
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {funnelData.map((stage) => (
              <li key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3 text-sm">
                <span className={cn('w-3 h-3 rounded-full', stage.color)} />
                <span className="text-muted-foreground truncate">{stage.name}</span>
                <span className="font-medium text-right">{stage.count}</span>
                <span className="text-muted-foreground text-right">
                  {stage.id === 'inConversation' ? (
                     <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="cursor-default underline decoration-dashed decoration-muted-foreground/50">$ {stage.value}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Average time on this stage</p>
                        </TooltipContent>
                    </Tooltip>
                  ) : stage.averageTimeTooltip ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-default underline decoration-dashed decoration-muted-foreground/50">{stage.duration}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stage.averageTimeTooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    stage.duration
                  )}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default FunnelCount;
