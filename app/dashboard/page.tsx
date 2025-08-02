"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Briefcase } from "lucide-react"
import { BusinessUsersTable } from "@/components/dashboard/business-users-table"
import { TaxpayerUsersTable } from "@/components/dashboard/tax-payer-users-table"
import { mockBusinessUsers, mockTaxpayerUsers } from "@/lib/mock-data"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("business")

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage business and taxpayer registrations</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
            <TabsTrigger value="business" className="flex items-center gap-2 text-base">
              <Briefcase className="w-5 h-5" />
              Business Users
            </TabsTrigger>
            <TabsTrigger value="taxpayer" className="flex items-center gap-2 text-base">
              <Users className="w-5 h-5" />
              Taxpayer Users
            </TabsTrigger>
          </TabsList>

          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle>Business License Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <BusinessUsersTable users={mockBusinessUsers} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="taxpayer">
            <Card>
              <CardHeader>
                <CardTitle>Taxpayer Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <TaxpayerUsersTable users={mockTaxpayerUsers} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
