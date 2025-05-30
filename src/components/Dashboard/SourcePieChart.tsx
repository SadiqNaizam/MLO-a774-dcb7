import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';

interface SourceDataPoint {
  name: string;
  value: number; // Represents leads count, converted count or deal size based on tab
  percentage: number;
  color: string; // Hex color for chart
}

const initialSourceData: SourceDataPoint[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF4444' }, // red-500
  { name: 'Behance', value: 1000, percentage: 25, color: '#FBBF24' }, // amber-400 (yellow in image)
  { name: 'Instagram', value: 600, percentage: 15, color: '#14B8A6' }, // teal-500
  { name: 'Dribbble', value: 400, percentage: 10, color: '#A3E635' }, // lime-400 (light green in image)
];

const SourcePieChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'leadsCame' | 'leadsConverted' | 'totalDealsSize'>('leadsConverted');
  const [chartData, setChartData] = React.useState<SourceDataPoint[]>(initialSourceData);

  // Simulate data change on tab click
  React.useEffect(() => {
    if (activeTab === 'leadsCame') {
      setChartData([
        { name: 'Clutch', value: 500, percentage: 45, color: '#EF4444' },
        { name: 'Behance', value: 300, percentage: 27, color: '#FBBF24' },
        { name: 'Instagram', value: 200, percentage: 18, color: '#14B8A6' },
        { name: 'Dribbble', value: 100, percentage: 10, color: '#A3E635' },
      ]);
    } else if (activeTab === 'leadsConverted') {
      setChartData(initialSourceData); // Default view
    } else if (activeTab === 'totalDealsSize') {
      setChartData([
        { name: 'Clutch', value: 150000, percentage: 60, color: '#EF4444' },
        { name: 'Behance', value: 50000, percentage: 20, color: '#FBBF24' },
        { name: 'Instagram', value: 37500, percentage: 15, color: '#14B8A6' },
        { name: 'Dribbble', value: 12500, percentage: 5, color: '#A3E635' },
      ]);
    }
  }, [activeTab]);

  const formatCurrency = (value: number) => {
    if (activeTab === 'totalDealsSize') return `$${value.toLocaleString()}`;
    return value.toString();
  }

  return (
    <TooltipProvider>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    innerRadius={60} // Donut chart
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip formatter={(value: number) => [formatCurrency(value), 'Value']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {chartData.map((source) => (
                <div key={source.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: source.color }} />
                    <span className="text-muted-foreground">{source.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">{activeTab === 'totalDealsSize' ? '$' : ''}{source.value.toLocaleString()}</span>
                    <span className="text-muted-foreground w-10 text-right">{source.percentage}%</span>
                    {source.name === 'Dribbble' && (
                       <Tooltip>
                        <TooltipTrigger asChild>
                            <Info size={14} className="ml-1 text-muted-foreground cursor-help"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>From leads total</p>
                        </TooltipContent>
                    </Tooltip>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-auto">
              <TabsList>
                <TabsTrigger value="leadsCame">Leads came</TabsTrigger>
                <TabsTrigger value="leadsConverted">Leads Converted</TabsTrigger>
                <TabsTrigger value="totalDealsSize">Total deals size</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default SourcePieChart;
