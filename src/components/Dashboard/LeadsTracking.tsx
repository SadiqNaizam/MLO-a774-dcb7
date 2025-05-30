import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LeadsTrackingDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const trackingData: LeadsTrackingDataPoint[] = [
  { month: 'March', closedWon: 68, closedLost: 82 },
  { month: 'April', closedWon: 42, closedLost: 60 },
  { month: 'May', closedWon: 85, closedLost: 38 },
  { month: 'June', closedWon: 62, closedLost: 5 },
  { month: 'July', closedWon: 78, closedLost: 40 },
  { month: 'August', closedWon: 95, closedLost: 65 },
];

const totalClosed = 680;
const totalLost = 70;

const LeadsTracking: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads tracking</CardTitle>
        <div className="flex items-baseline gap-4 mt-1">
            <p className="text-3xl font-bold">{totalClosed} <span className="text-sm font-normal text-muted-foreground">total closed</span></p>
            <p className="text-3xl font-bold">{totalLost} <span className="text-sm font-normal text-muted-foreground">total lost</span></p>
        </div>
      </CardHeader>
      <CardContent className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0D9488" stopOpacity={0.3}/> {/* teal-600 */} 
                <stop offset="95%" stopColor="#0D9488" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3}/> {/* red-600 */} 
                <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} vertical={false}/>
            <XAxis dataKey="month" tickLine={false} axisLine={false} dy={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} domain={[0, 'dataMax + 10']}/>
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="square" 
              iconSize={10}
              formatter={(value) => <span className="text-muted-foreground capitalize">{value.replace(/([A-Z])/g, ' $1').trim()}</span>}
            />
            <Area type="monotone" dataKey="closedWon" stroke="#0D9488" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#0D9488' }} activeDot={{ r: 6, fill: '#0D9488', stroke: 'hsl(var(--card))' }}/>
            <Area type="monotone" dataKey="closedLost" stroke="#DC2626" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#DC2626' }} activeDot={{ r: 6, fill: '#DC2626', stroke: 'hsl(var(--card))' }}/>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LeadsTracking;
