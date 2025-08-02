import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CertificateManagementTable } from "@/components/dashboard/certeficate-management"
import { allCertificates } from "@/lib/mock-data"

export default function CertificateManagementPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Certificate Management</h1>
        <p className="text-gray-600 text-lg">View and manage all issued certificates</p>
      </div>

      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>All Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <CertificateManagementTable certificates={allCertificates} />
        </CardContent>
      </Card>
    </div>
  )
}
