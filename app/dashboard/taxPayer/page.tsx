import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TaxpayerUsersTable } from "@/components/dashboard/tax-payer-users-table"
import { mockTaxpayerUsers } from "@/lib/mock-data"

export default function TaxpayerUsersPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Taxpayer Users</h1>
        <p className="text-gray-600 text-lg">Manage all registered taxpayer certificate holders</p>
      </div>

      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>Taxpayer Registrations</CardTitle>
        </CardHeader>
        <CardContent>
          <TaxpayerUsersTable users={mockTaxpayerUsers} />
        </CardContent>
      </Card>
    </div>
  )
}
