import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, History, Building, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About Us</h1>
          <p className="text-gray-600 text-lg">Learn more about the South Ethiopia Region Revenue Bureau</p>
        </div>

        {/* Mission, Vision, Values - Reused/Expanded */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-xl border-t-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Our mission is to contribute to economic development and social welfare by developing a modern Tax and
                  Customs Administration that employs professional and highly skilled staff who promote voluntary
                  compliance amongst individuals and businesses, and take swift action against those who do not comply.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-t-4 border-green-600 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                  <Building className="h-6 w-6 text-green-600" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  To be a leading, fair and modern Tax and Customs Administration in Africa by 2030 that will finance
                  government expenditure through domestic tax revenue collection.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-t-4 border-purple-600 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-800 flex items-center gap-2">
                  <Users className="h-6 w-6 text-purple-600" />
                  Values
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>Customer Centric</li>
                  <li>Professionalism</li>
                  <li>Team Work</li>
                  <li>Dedication/Commitment</li>
                  <li>Loyalty</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our History Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-600">
          <CardHeader className="mb-6">
            <CardTitle className="text-3xl font-bold text-orange-800 flex items-center gap-3">
              <History className="h-8 w-8 text-orange-600" />
              Our History
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              The South Ethiopia Region Revenue Bureau was established with the mandate to efficiently collect taxes and
              customs duties, contributing significantly to the region's economic development. Over the years, we have
              evolved, adapting to new economic landscapes and technological advancements to better serve our citizens
              and businesses.
            </p>
            <p>
              From humble beginnings, our institution has grown into a pivotal organization, playing a crucial role in
              financing public services and infrastructure projects. We are committed to fostering a culture of
              compliance and transparency, ensuring that every contribution supports the collective prosperity of the
              South Ethiopia Region.
            </p>
          </CardContent>
        </section>

        {/* Leadership Team Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-teal-600">
          <CardHeader className="mb-6">
            <CardTitle className="text-3xl font-bold text-teal-800 flex items-center gap-3">
              <Users className="h-8 w-8 text-teal-600" />
              Leadership Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 shadow-sm border border-gray-200">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Director General"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-4 border-teal-200"
                />
                <h3 className="text-xl font-semibold text-gray-900">Ato. Kebede Worku</h3>
                <p className="text-blue-600 font-medium">Director General</p>
                <p className="text-sm text-gray-600 mt-2">
                  Leading the bureau with a vision for a prosperous and compliant region.
                </p>
              </Card>
              <Card className="text-center p-6 shadow-sm border border-gray-200">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Deputy Director"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-4 border-teal-200"
                />
                <h3 className="text-xl font-semibold text-gray-900">W/ro. Genet Abebe</h3>
                <p className="text-blue-600 font-medium">Deputy Director General</p>
                <p className="text-sm text-gray-600 mt-2">
                  Overseeing operational excellence and strategic initiatives.
                </p>
              </Card>
              <Card className="text-center p-6 shadow-sm border border-gray-200">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Head of Tax Operations"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-4 border-teal-200"
                />
                <h3 className="text-xl font-semibold text-gray-900">Dr. Alemayehu Fikru</h3>
                <p className="text-blue-600 font-medium">Head of Tax Operations</p>
                <p className="text-sm text-gray-600 mt-2">Ensuring fair and efficient tax collection processes.</p>
              </Card>
            </div>
          </CardContent>
        </section>

        {/* Organizational Structure Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-indigo-600">
          <CardHeader className="mb-6">
            <CardTitle className="text-3xl font-bold text-indigo-800 flex items-center gap-3">
              <Building className="h-8 w-8 text-indigo-600" />
              Organizational Structure
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              The South Ethiopia Region Revenue Bureau is structured to ensure comprehensive coverage and efficient
              delivery of its mandate. Our organizational chart includes various departments and divisions, each
              specializing in key areas such as tax administration, customs, legal affairs, human resources, and
              finance.
            </p>
            <p>
              This structure facilitates a streamlined workflow, promotes accountability, and enables us to respond
              effectively to the dynamic needs of our taxpayers and the regional economy. We continuously strive to
              optimize our operations for greater transparency and public service.
            </p>
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 border border-gray-200 mt-6">
              {/* Placeholder for an organizational chart image */}
              <p>Organizational Chart Placeholder</p>
            </div>
          </CardContent>
        </section>
      </div>
    </div>
  )
}
