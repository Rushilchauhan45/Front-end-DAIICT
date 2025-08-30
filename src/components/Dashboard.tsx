
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Building, 
  Factory, 
  Shield, 
  TrendingUp, 
  Users, 
  DollarSign,
  CheckCircle,
  Clock,
  FileText
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [activeRole, setActiveRole] = useState<'government' | 'producer' | 'auditor'>('government');

  const subsidyData = [
    { month: 'Jan', allocated: 120, disbursed: 95 },
    { month: 'Feb', allocated: 150, disbursed: 130 },
    { month: 'Mar', allocated: 180, disbursed: 165 },
    { month: 'Apr', allocated: 200, disbursed: 185 },
    { month: 'May', allocated: 250, disbursed: 220 },
    { month: 'Jun', allocated: 300, disbursed: 275 }
  ];

  const pieData = [
    { name: 'Disbursed', value: 65, color: '#00ff88' },
    { name: 'Pending', value: 25, color: '#3b82f6' },
    { name: 'Under Review', value: 10, color: '#8b5cf6' }
  ];

  const milestones = [
    { id: 1, title: 'Site Preparation', progress: 100, status: 'completed' },
    { id: 2, title: 'Equipment Installation', progress: 85, status: 'in-progress' },
    { id: 3, title: 'Initial Production', progress: 30, status: 'in-progress' },
    { id: 4, title: 'Full Operation', progress: 0, status: 'pending' }
  ];

  const auditLogs = [
    { id: 1, timestamp: '2024-08-29 14:30', action: 'Subsidy Released', amount: '$500K', txHash: '0x1234...abcd' },
    { id: 2, timestamp: '2024-08-29 12:15', action: 'Milestone Verified', milestone: 'Equipment Installation', txHash: '0x5678...efgh' },
    { id: 3, timestamp: '2024-08-29 09:45', action: 'Contract Deployed', project: 'HydroPower Station Alpha', txHash: '0x9012...ijkl' }
  ];

  const RoleSelector = () => (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
      {[
        { key: 'government', label: 'Government', icon: <Building className="h-4 w-4" /> },
        { key: 'producer', label: 'Producer', icon: <Factory className="h-4 w-4" /> },
        { key: 'auditor', label: 'Auditor', icon: <Shield className="h-4 w-4" /> }
      ].map(role => (
        <Button
          key={role.key}
          variant={activeRole === role.key ? "default" : "outline"}
          onClick={() => setActiveRole(role.key as any)}
          className={`flex-1 sm:flex-initial ${activeRole === role.key ? 
            "bg-primary-green text-primary-foreground" : 
            "border-primary-green text-primary-green hover:bg-primary-green hover:text-primary-foreground"
          }`}
        >
          {role.icon}
          <span className="ml-2">{role.label}</span>
        </Button>
      ))}
    </div>
  );

  const GovernmentView = () => (
    <div className="grid gap-4 sm:gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <Card className="glass-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Allocated</CardTitle>
            <DollarSign className="h-4 w-4 text-primary-green" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-primary-green">$2.5B</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disbursed</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary-green" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-primary-green">$1.6B</div>
            <p className="text-xs text-muted-foreground">64% completion rate</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Users className="h-4 w-4 text-primary-green" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-primary-green">147</div>
            <p className="text-xs text-muted-foreground">+23 new this month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-foreground">Subsidy Allocation Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={subsidyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Line type="monotone" dataKey="allocated" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="disbursed" stroke="hsl(var(--primary-green))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-foreground">Disbursement Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ProducerView = () => (
    <div className="grid gap-4 sm:gap-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center space-x-2">
            <Factory className="h-5 w-5 text-primary-green" />
            <span className="text-sm sm:text-base">Project Milestone Tracker</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{milestone.title}</span>
                <Badge 
                  variant={milestone.status === 'completed' ? 'default' : 'outline'}
                  className={milestone.status === 'completed' ? 
                    'bg-primary-green text-primary-foreground' : 
                    'border-primary-green text-primary-green'
                  }
                >
                  {milestone.status === 'completed' && <CheckCircle className="h-3 w-3 mr-1" />}
                  {milestone.status === 'in-progress' && <Clock className="h-3 w-3 mr-1" />}
                  {milestone.status}
                </Badge>
              </div>
              <Progress value={milestone.progress} className="h-2" />
              <div className="text-xs text-muted-foreground">{milestone.progress}% complete</div>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Card className="glass-card hover-glow">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Next Milestone</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-base sm:text-lg font-bold text-primary-green">Initial Production</div>
            <p className="text-xs text-muted-foreground">Expected completion: Oct 2024</p>
            <p className="text-xs text-muted-foreground">Reward: $250K subsidy release</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card hover-glow">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-base sm:text-lg font-bold text-primary-green">$1.2M</div>
            <p className="text-xs text-muted-foreground">From completed milestones</p>
            <p className="text-xs text-muted-foreground">Remaining: $800K</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const AuditorView = () => (
    <div className="grid gap-4 sm:gap-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary-green" />
            <span className="text-sm sm:text-base">Immutable Audit Logs</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            {auditLogs.map((log) => (
              <div key={log.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 glass-card hover-glow space-y-2 sm:space-y-0">
                <div className="space-y-1 flex-1">
                  <div className="text-sm font-medium text-foreground">{log.action}</div>
                  <div className="text-xs text-muted-foreground">{log.timestamp}</div>
                  {log.amount && <div className="text-xs text-primary-green">{log.amount}</div>}
                  {log.milestone && <div className="text-xs text-primary-green">{log.milestone}</div>}
                  {log.project && <div className="text-xs text-primary-green">{log.project}</div>}
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-xs text-muted-foreground font-mono break-all sm:break-normal">{log.txHash}</div>
                  <Badge variant="outline" className="border-primary-green text-primary-green mt-1">
                    Verified
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section id="dashboard" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-header">Multi-Role Dashboard</h2>
        
        <RoleSelector />
        
        {activeRole === 'government' && <GovernmentView />}
        {activeRole === 'producer' && <ProducerView />}
        {activeRole === 'auditor' && <AuditorView />}
      </div>
    </section>
  );
};

export default Dashboard;
