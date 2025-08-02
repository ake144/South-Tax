import { DashboardOverview } from "@/components/dashboard/overview-cards"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const OverviewPage = () => {
    return (
        <div>

       <DashboardOverview  />

         <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <span className="font-medium text-blue-600">2024-07-30:</span> New Business License issued for "Tech
                Solutions Inc."
              </li>
              <li>
                <span className="font-medium text-green-600">2024-07-29:</span> Taxpayer Registration updated for "Jane
                Doe"
              </li>
              <li>
                <span className="font-medium text-orange-600">2024-07-28:</span> Business License "AM/DES/100136/2016"
                status changed to Pending
              </li>
              <li>
                <span className="font-medium text-purple-600">2024-07-27:</span> New Taxpayer Registration request from
                "ABC Trading PLC"
              </li>
              <li>
                <span className="font-medium text-red-600">2024-07-26:</span> Business License "AM/GND/200500/2017"
                expired
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between items-center">
                <span>Database Connection:</span>
                <Badge variant="default" className="bg-green-500">
                  Operational
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>API Gateway:</span>
                <Badge variant="default" className="bg-green-500">
                  Operational
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Certificate Generation Service:</span>
                <Badge variant="default" className="bg-green-500">
                  Operational
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Email Notification Service:</span>
                <Badge variant="default" className="bg-orange-500">
                  Degraded
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
         </div>
    )
}

export default OverviewPage