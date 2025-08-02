"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Filter } from "lucide-react"
import { mockNewsEvents, type NewsEventItem } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function NewsEventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const filteredItems = mockNewsEvents
    .filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesType = filterType === "all" || item.type === filterType

      return matchesSearch && matchesType
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date, newest first

  const getTypeBadge = (type: NewsEventItem["type"]) => {
    switch (type) {
      case "News":
        return (
          <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
            News
          </Badge>
        )
      case "Event":
        return (
          <Badge variant="default" className="bg-green-500 hover:bg-green-600">
            Event
          </Badge>
        )
      case "Announcement":
        return (
          <Badge variant="default" className="bg-purple-500 hover:bg-purple-600">
            Announcement
          </Badge>
        )
      default:
        return <Badge variant="secondary">{type}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">News & Events</h1>
          <p className="text-gray-600 text-lg">Stay updated with the latest from our bureau</p>
        </div>

        <Card className="p-6 shadow-lg bg-white">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search news or events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-md w-full"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-[180px] border">
                <Filter className="h-4 w-4 mr-2 text-gray-500" />
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="News">News</SelectItem>
                <SelectItem value="Event">Events</SelectItem>
                <SelectItem value="Announcement">Announcements</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="shadow-sm hover:shadow-md transition-shadow duration-200 border-t-4 border-blue-500"
                >
                  {item.imageUrl && (
                    <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      {getTypeBadge(item.type)}
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 line-clamp-3">{item.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/news-events/${item.id}`}
                      className="text-blue-600 hover:underline text-sm font-medium"
                    >
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10">
                No news or events found matching your criteria.
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
