
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  FileText,
  Building2,
  Clock,
  AlertTriangle,
  Calendar,
  TrendingUp,
  CheckCircle,
  RefreshCw,
  MoreHorizontal
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StatsCard from "./StatsCard";

// Mock data
const statsData = [
  { title: "Total Registered Users", value: 12547, icon: Users, trend: { value: 12, isPositive: true }, variant: 'info' as const },
  { title: "Total Certificates Issued", value: 8924, icon: FileText, trend: { value: 8, isPositive: true }, variant: 'success' as const },
  { title: "Total Business Licenses", value: 3456, icon: Building2, trend: { value: 5, isPositive: true }, variant: 'default' as const },
  { title: "Certificates Pending Approval", value: 234, icon: Clock, trend: { value: 3, isPositive: false }, variant: 'warning' as const },
  { title: "Certificates Expiring Soon", value: 67, icon: AlertTriangle, trend: { value: 15, isPositive: false }, variant: 'warning' as const },
  { title: "New Requests (This Week)", value: 89, icon: Calendar, trend: { value: 22, isPositive: true }, variant: 'success' as const },
];

const recentActivities = [
  { id: 1, type: "Certificate Issued", user: "John Doe", time: "2 hours ago", status: "completed" },
  { id: 2, type: "License Approved", user: "ABC Corp", time: "4 hours ago", status: "completed" },
  { id: 3, type: "Certificate Pending", user: "Jane Smith", time: "6 hours ago", status: "pending" },
  { id: 4, type: "License Rejected", user: "XYZ Ltd", time: "8 hours ago", status: "rejected" },
  { id: 5, type: "Certificate Renewed", user: "Tech Solutions", time: "1 day ago", status: "completed" },
];

const pendingApprovals = [
  { id: 1, applicant: "Sarah Wilson", type: "Business License", submitted: "2024-01-15", priority: "high" },
  { id: 2, applicant: "Global Corp", type: "Export Certificate", submitted: "2024-01-14", priority: "medium" },
  { id: 3, applicant: "Local Store", type: "Trading License", submitted: "2024-01-13", priority: "low" },
  { id: 4, applicant: "Manufacturing Inc", type: "Industrial License", submitted: "2024-01-12", priority: "high" },
];

export const DashboardOverview = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="secondary" className="bg-green-400  text-success border-success/20">Completed</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-blue-50 text-warning border-warning/20">Pending</Badge>;
      case 'rejected':
        return <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="bg-blue-50 text-warning border-warning/20">Medium</Badge>;
      case 'low':
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your revenue authority today.
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            variant={stat.variant}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activities */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-xl font-semibold">Recent Activities</CardTitle>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {activity.status === 'completed' ? (
                      <CheckCircle className="h-4 w-4 text-success" />
                    ) : activity.status === 'pending' ? (
                      <Clock className="h-4 w-4 text-warning" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{activity.type}</p>
                    <p className="text-xs text-muted-foreground">{activity.user}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  {getStatusBadge(activity.status)}
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-xl font-semibold">Pending Approvals</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingApprovals.map((approval) => (
                  <TableRow key={approval.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{approval.applicant}</p>
                        <p className="text-xs text-muted-foreground">{approval.submitted}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{approval.type}</TableCell>
                    <TableCell>{getPriorityBadge(approval.priority)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="h-7 px-2">
                          <CheckCircle className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-7 px-2">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-primary/5">
              <FileText className="h-6 w-6 text-primary" />
              <span>Issue Certificate</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-success/5">
              <Building2 className="h-6 w-6 text-success" />
              <span>Approve License</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-warning/5">
              <Users className="h-6 w-6 text-warning" />
              <span>Register User</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-accent">
              <TrendingUp className="h-6 w-6 text-foreground" />
              <span>View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};