"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, TrendingUp, MapPin, Filter, Download, Eye, Building2, FileText } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock revenue data
const monthlyData = [
  { month: "Jan", certificates: 245000, licenses: 180000, penalties: 45000, total: 470000 },
  { month: "Feb", certificates: 268000, licenses: 195000, penalties: 38000, total: 501000 },
  { month: "Mar", certificates: 287000, licenses: 210000, penalties: 52000, total: 549000 },
  { month: "Apr", certificates: 310000, licenses: 225000, penalties: 41000, total: 576000 },
  { month: "May", certificates: 325000, licenses: 240000, penalties: 47000, total: 612000 },
  { month: "Jun", certificates: 342000, licenses: 258000, penalties: 55000, total: 655000 },
]

const yearlyData = [
  { year: "2020", total: 5200000 },
  { year: "2021", total: 6100000 },
  { year: "2022", total: 6850000 },
  { year: "2023", total: 7420000 },
  { year: "2024", total: 3879000 },
]

const subcityData = [
  { name: "Addis Ketema", revenue: 890000, certificates: 1250, licenses: 420, population: 315000 },
  { name: "Akaky Kaliti", revenue: 1250000, certificates: 1680, licenses: 520, population: 195000 },
  { name: "Arada", revenue: 750000, certificates: 980, licenses: 380, population: 225000 },
  { name: "Bole", revenue: 1580000, certificates: 2100, licenses: 890, population: 385000 },
  { name: "Gulele", revenue: 920000, certificates: 1340, licenses: 450, population: 270000 },
  { name: "Kirkos", revenue: 680000, certificates: 850, licenses: 320, population: 180000 },
  { name: "Kolfe Keranio", revenue: 1120000, certificates: 1560, licenses: 580, population: 425000 },
  { name: "Lideta", revenue: 580000, certificates: 720, licenses: 280, population: 165000 },
  { name: "Nifas Silk", revenue: 1380000, certificates: 1890, licenses: 680, population: 355000 },
  { name: "Yeka", revenue: 1050000, certificates: 1450, licenses: 520, population: 295000 },
]

const recentTransactions = [
  {
    id: "TXN-2024-001",
    date: "2024-01-20",
    type: "Certificate Fee",
    subcity: "Bole",
    amount: 2500,
    applicant: "ABC Corporation",
    status: "Completed",
  },
  {
    id: "TXN-2024-002",
    date: "2024-01-20",
    type: "Business License",
    subcity: "Addis Ketema",
    amount: 15000,
    applicant: "Tech Solutions Ltd",
    status: "Completed",
  },
  {
    id: "TXN-2024-003",
    date: "2024-01-19",
    type: "Penalty Fee",
    subcity: "Arada",
    amount: 5000,
    applicant: "John Doe",
    status: "Pending",
  },
  {
    id: "TXN-2024-004",
    date: "2024-01-19",
    type: "Certificate Fee",
    subcity: "Yeka",
    amount: 3200,
    applicant: "Jane Smith",
    status: "Completed",
  },
]

// Fixed color definitions using Tailwind classes and hex values
const chartConfig = {
  certificates: {
    label: "Certificates",
    color: "#4f46e5", // indigo-600
    bgClass: "bg-indigo-100",
    textClass: "text-indigo-600",
  },
  licenses: {
    label: "Licenses",
    color: "#059669", // emerald-600
    bgClass: "bg-emerald-100",
    textClass: "text-emerald-600",
  },
  penalties: {
    label: "Penalties",
    color: "#d97706", // amber-600
    bgClass: "bg-amber-100",
    textClass: "text-amber-600",
  },
  total: {
    label: "Total Revenue",
    color: "#2563eb", // blue-600
    bgClass: "bg-blue-100",
    textClass: "text-blue-600",
  },
}

const COLORS = ["#4f46e5", "#059669", "#d97706", "#2563eb", "#9333ea"]

const Revenue = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")
  const [selectedSubcity, setSelectedSubcity] = useState("all")
  const [revenueType, setRevenueType] = useState("all")

  const totalRevenue =
    selectedPeriod === "monthly"
      ? monthlyData.reduce((sum, item) => sum + item.total, 0)
      : yearlyData.reduce((sum, item) => sum + item.total, 0)

  const currentMonthRevenue = monthlyData[monthlyData.length - 1]?.total || 0
  const previousMonthRevenue = monthlyData[monthlyData.length - 2]?.total || 0
  const growthRate = (((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue) * 100).toFixed(1)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>
      case "Failed":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Failed</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Revenue Analytics</h1>
          <p className="text-gray-500">Comprehensive revenue tracking and regional analysis.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Download className="w-4 h-4 mr-2 text-gray-700" />
            <span className="text-gray-700">Export Report</span>
          </Button>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[140px] border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-blue-700">ETB {(currentMonthRevenue / 1000).toFixed(0)}K</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />+{growthRate}% from last month
                </p>
              </div>
              <div className="p-3 bg-blue-200 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Certificate Fees</p>
                <p className="text-2xl font-bold text-indigo-600">
                  ETB {(monthlyData[monthlyData.length - 1]?.certificates / 1000).toFixed(0)}K
                </p>
                <p className="text-xs text-gray-500">52% of total revenue</p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-lg">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">License Fees</p>
                <p className="text-2xl font-bold text-emerald-600">
                  ETB {(monthlyData[monthlyData.length - 1]?.licenses / 1000).toFixed(0)}K
                </p>
                <p className="text-xs text-gray-500">39% of total revenue</p>
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Building2 className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Regions</p>
                <p className="text-2xl font-bold text-purple-600">{subcityData.length}</p>
                <p className="text-xs text-gray-500">Sub-cities reporting</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="regional"
            className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            Regional Analysis
          </TabsTrigger>
          <TabsTrigger
            value="trends"
            className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            Trends
          </TabsTrigger>
          <TabsTrigger
            value="transactions"
            className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            Transactions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">
                  Revenue Breakdown - {selectedPeriod === "monthly" ? "Monthly" : "Yearly"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={selectedPeriod === "monthly" ? monthlyData : yearlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey={selectedPeriod === "monthly" ? "month" : "year"} stroke="#6b7280" />
                        <YAxis stroke="#6b7280" tickFormatter={(value) => `ETB ${(value / 1000).toFixed(0)}K`} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        {selectedPeriod === "monthly" ? (
                          <>
                            <Bar dataKey="certificates" stackId="a" fill={chartConfig.certificates.color} />
                            <Bar dataKey="licenses" stackId="a" fill={chartConfig.licenses.color} />
                            <Bar dataKey="penalties" stackId="a" fill={chartConfig.penalties.color} />
                          </>
                        ) : (
                          <Bar dataKey="total" fill={chartConfig.total.color} />
                        )}
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Revenue Sources Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Certificates", value: monthlyData[monthlyData.length - 1]?.certificates },
                            { name: "Licenses", value: monthlyData[monthlyData.length - 1]?.licenses },
                            { name: "Penalties", value: monthlyData[monthlyData.length - 1]?.penalties },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {[0, 1, 2].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="regional" className="space-y-4">
          <Card className="border border-gray-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-gray-800">Sub-city Revenue Performance</CardTitle>
                <div className="flex space-x-2">
                  <Select value={selectedSubcity} onValueChange={setSelectedSubcity}>
                    <SelectTrigger className="w-[180px] border-gray-300">
                      <SelectValue placeholder="Filter by Sub-city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sub-cities</SelectItem>
                      {subcityData.map((subcity) => (
                        <SelectItem key={subcity.name} value={subcity.name}>
                          {subcity.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="text-gray-700 font-semibold">Sub-city</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Total Revenue</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Certificates</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Licenses</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Population</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Revenue per Capita</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subcityData
                    .filter((subcity) => selectedSubcity === "all" || subcity.name === selectedSubcity)
                    .sort((a, b) => b.revenue - a.revenue)
                    .map((subcity) => (
                      <TableRow key={subcity.name} className="border-b border-gray-200">
                        <TableCell className="font-medium text-gray-800">{subcity.name}</TableCell>
                        <TableCell>
                          <span className="font-semibold text-blue-600">
                            ETB {(subcity.revenue / 1000).toFixed(0)}K
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">
                            {subcity.certificates}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                            {subcity.licenses}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">{subcity.population.toLocaleString()}</TableCell>
                        <TableCell className="text-gray-600">
                          ETB {(subcity.revenue / subcity.population).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800">Revenue Trends Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" tickFormatter={(value) => `ETB ${(value / 1000).toFixed(0)}K`} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="total"
                        stroke={chartConfig.total.color}
                        strokeWidth={3}
                        dot={{ r: 6, fill: chartConfig.total.color }}
                      />
                      <Line
                        type="monotone"
                        dataKey="certificates"
                        stroke={chartConfig.certificates.color}
                        strokeWidth={2}
                        dot={{ r: 4, fill: chartConfig.certificates.color }}
                      />
                      <Line
                        type="monotone"
                        dataKey="licenses"
                        stroke={chartConfig.licenses.color}
                        strokeWidth={2}
                        dot={{ r: 4, fill: chartConfig.licenses.color }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card className="border border-gray-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-gray-800">Recent Transactions</CardTitle>
                <div className="flex space-x-2">
                  <Select value={revenueType} onValueChange={setRevenueType}>
                    <SelectTrigger className="w-[180px] border-gray-300">
                      <SelectValue placeholder="Filter by Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="certificate">Certificate Fee</SelectItem>
                      <SelectItem value="license">Business License</SelectItem>
                      <SelectItem value="penalty">Penalty Fee</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="border-gray-300 text-gray-700 bg-transparent">
                    <Filter className="w-4 h-4 mr-2" /> More Filters
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="text-gray-700 font-semibold">Transaction ID</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Date</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Type</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Sub-city</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Applicant</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Amount</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Status</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id} className="border-b border-gray-200">
                      <TableCell className="font-medium text-gray-800">{transaction.id}</TableCell>
                      <TableCell className="text-gray-600">{transaction.date}</TableCell>
                      <TableCell>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-200">{transaction.type}</Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{transaction.subcity}</TableCell>
                      <TableCell className="text-gray-600">{transaction.applicant}</TableCell>
                      <TableCell>
                        <span className="font-semibold text-blue-600">ETB {transaction.amount.toLocaleString()}</span>
                      </TableCell>
                      <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 border-gray-300 bg-transparent">
                          <Eye className="h-4 w-4 text-gray-700" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Revenue
