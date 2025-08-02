"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, FileText, Search, Tag } from "lucide-react"
import { mockForms } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"

export default function FormsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  const filteredForms = mockForms.filter((form) => {
    const matchesSearch =
      form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = filterCategory === "all" || form.category === filterCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Downloadable Forms</h1>
          <p className="text-gray-600 text-lg">Access all official tax and business forms</p>
        </div>

        <Card className="p-6 shadow-lg bg-white">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search forms by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-md w-full"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-[180px] border">
                <Tag className="h-4 w-4 mr-2 text-gray-500" />
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Tax">Tax Forms</SelectItem>
                <SelectItem value="Business">Business Forms</SelectItem>
                <SelectItem value="General">General Forms</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredForms.length > 0 ? (
              filteredForms.map((form) => (
                <Card
                  key={form.id}
                  className="shadow-sm hover:shadow-md transition-shadow duration-200 border-t-4 border-blue-500"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      {form.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">{form.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {form.category}
                      </Badge>
                      <span>Version: {form.version}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Last Updated: {form.lastUpdated}</span>
                      <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <a href={form.fileUrl} download>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10">
                No forms found matching your criteria.
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
