'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Download, Plus, Eye, Edit, UserPlus, Mail, Users as UsersIcon, Building2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock user data with subcity information
const users = [
  {
    id: "USR-001",
    name: "John Doe",
    email: "john.doe@email.com",
    role: "Individual",
    status: "Active",
    subcity: "Bole",
    phone: "+251911234567",
    registrationDate: "2024-01-15",
    certificatesCount: 3,
    lastLogin: "2024-01-20",
    address: "Bole Sub-city, Woreda 03",
    businessType: null,
  },
  {
    id: "USR-002", 
    name: "ABC Corporation",
    email: "contact@abccorp.com",
    role: "Business",
    status: "Active",
    subcity: "Addis Ketema",
    phone: "+251912345678",
    registrationDate: "2023-12-10",
    certificatesCount: 8,
    lastLogin: "2024-01-19",
    address: "Addis Ketema Sub-city, Woreda 07",
    businessType: "Construction",
  },
  {
    id: "USR-003",
    name: "Jane Smith", 
    email: "jane.smith@email.com",
    role: "Individual",
    status: "Pending",
    subcity: "Arada",
    phone: "+251913456789",
    registrationDate: "2024-01-18",
    certificatesCount: 0,
    lastLogin: "Never",
    address: "Arada Sub-city, Woreda 02",
    businessType: null,
  },
  {
    id: "USR-004",
    name: "Tech Solutions Ltd",
    email: "admin@techsolutions.com", 
    role: "Business",
    status: "Suspended",
    subcity: "Yeka",
    phone: "+251914567890",
    registrationDate: "2023-11-05",
    certificatesCount: 5,
    lastLogin: "2024-01-10",
    address: "Yeka Sub-city, Woreda 12",
    businessType: "Technology",
  },
  {
    id: "USR-005",
    name: "Meron Tesfaye",
    email: "meron.tesfaye@email.com",
    role: "Individual", 
    status: "Active",
    subcity: "Gulele",
    phone: "+251915678901",
    registrationDate: "2023-11-20",
    certificatesCount: 2,
    lastLogin: "2024-01-18",
    address: "Gulele Sub-city, Woreda 05",
    businessType: null,
  },
  {
    id: "USR-006",
    name: "Ethio Trading PLC",
    email: "info@ethiotrading.com",
    role: "Business",
    status: "Active",
    subcity: "Kirkos", 
    phone: "+251916789012",
    registrationDate: "2023-09-15",
    certificatesCount: 12,
    lastLogin: "2024-01-19",
    address: "Kirkos Sub-city, Woreda 09",
    businessType: "Import/Export",
  },
  {
    id: "USR-007",
    name: "Dawit Bekele",
    email: "dawit.bekele@email.com",
    role: "Individual",
    status: "Active",
    subcity: "Kolfe Keranio",
    phone: "+251917890123",
    registrationDate: "2024-01-05",
    certificatesCount: 1,
    lastLogin: "2024-01-17",
    address: "Kolfe Keranio Sub-city, Woreda 14",
    businessType: null,
  },
  {
    id: "USR-008", 
    name: "Green Energy Ltd",
    email: "contact@greenenergy.com",
    role: "Business",
    status: "Pending",
    subcity: "Nifas Silk",
    phone: "+251918901234", 
    registrationDate: "2024-01-12",
    certificatesCount: 0,
    lastLogin: "2024-01-16",
    address: "Nifas Silk Sub-city, Woreda 11",
    businessType: "Energy",
  },
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [subcityFilter, setSubcityFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Active</Badge>;
      case 'Pending':
        return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
      case 'Suspended':
        return <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">Suspended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Business':
        return <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Business</Badge>;
      case 'Individual':
        return <Badge variant="outline">Individual</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter;
    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter;
    const matchesSubcity = subcityFilter === "all" || user.subcity === subcityFilter;
    
    return matchesSearch && matchesStatus && matchesRole && matchesSubcity;
  });

  const subcities = [...new Set(users.map(user => user.subcity))].sort();

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">User Management</h1>
            <p className="text-muted-foreground">
              Manage registered users and their accounts.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary-hover">
            <UserPlus className="w-4 h-4 mr-2" />
            Add New User
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-5">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">{users.length.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Registered users</p>
                </div>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <UsersIcon className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold">{users.filter(u => u.status === 'Active').length}</p>
                  <p className="text-xs text-success">Currently active</p>
                </div>
                <div className="p-2 bg-success/10 rounded-lg">
                  <UsersIcon className="h-4 w-4 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Users</p>
                  <p className="text-2xl font-bold">{users.filter(u => u.status === 'Pending').length}</p>
                  <p className="text-xs text-warning">Awaiting approval</p>
                </div>
                <div className="p-2 bg-warning/10 rounded-lg">
                  <UsersIcon className="h-4 w-4 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Businesses</p>
                  <p className="text-2xl font-bold">{users.filter(u => u.role === 'Business').length}</p>
                  <p className="text-xs text-muted-foreground">Business entities</p>
                </div>
                <div className="p-2 bg-chart-2/10 rounded-lg">
                  <Building2 className="h-4 w-4 text-chart-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Sub-cities</p>
                  <p className="text-2xl font-bold">{subcities.length}</p>
                  <p className="text-xs text-muted-foreground">Active regions</p>
                </div>
                <div className="p-2 bg-chart-3/10 rounded-lg">
                  <Building2 className="h-4 w-4 text-chart-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Search & Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or user ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
              <Select value={subcityFilter} onValueChange={setSubcityFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Sub-city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sub-cities</SelectItem>
                  {subcities.map((subcity) => (
                    <SelectItem key={subcity} value={subcity}>{subcity}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Users ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Sub-city</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Certificates</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="" />
                          <AvatarFallback>
                            {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-xs text-muted-foreground">{user.id}</p>
                          {user.businessType && (
                            <p className="text-xs text-primary">{user.businessType}</p>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getRoleBadge(user.role)}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-sm">{user.subcity}</p>
                        <p className="text-xs text-muted-foreground">{user.address}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm">{user.phone}</p>
                        <p className="text-xs text-muted-foreground">Reg: {user.registrationDate}</p>
                        <p className="text-xs text-muted-foreground">Login: {user.lastLogin}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.certificatesCount}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Mail className="h-4 w-4" />
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
  );
};

export default Users;