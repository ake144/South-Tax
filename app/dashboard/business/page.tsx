import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BusinessUsersTable } from "@/components/dashboard/business-users-table"
import { mockBusinessUsers } from "@/lib/mock-data"

export default function BusinessUsersPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Business Users</h1>
        <p className="text-gray-600 text-lg">Manage all registered business license holders</p>
      </div>

      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>Business License Registrations</CardTitle>
        </CardHeader>
        <CardContent>
          <BusinessUsersTable users={mockBusinessUsers} />
        </CardContent>
      </Card>
    </div>
  )
}
