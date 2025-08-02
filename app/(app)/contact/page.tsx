"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" }) // Reset form
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 text-lg">We're here to help you with your inquiries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <Card className="shadow-lg bg-white border-t-4 border-green-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-green-600" />
                Our Information
              </CardTitle>
              <CardDescription className="text-gray-600">Reach out to us through various channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email Address</h3>
                  <p className="text-gray-700">info.serb@example.com</p>
                  <p className="text-sm text-gray-500">For general inquiries</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone Number</h3>
                  <p className="text-gray-700">+251 912 345 678</p>
                  <p className="text-sm text-gray-500">Monday - Friday, 8:30 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Office Address</h3>
                  <p className="text-gray-700">South Ethiopia Region Revenue Bureau</p>
                  <p className="text-gray-700">Main Street, Building 10</p>
                  <p className="text-gray-700">Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Working Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 8:30 AM - 5:00 PM</p>
                  <p className="text-gray-700">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card className="shadow-lg bg-white border-t-4 border-blue-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                <Send className="h-6 w-6 text-blue-600" />
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below and we'll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Your Name
                  </Label>
                  <Input id="name" value={formData.name} onChange={handleChange} required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-700">
                    Subject
                  </Label>
                  <Input id="subject" value={formData.subject} onChange={handleChange} required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="mt-1 resize-y"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder for Map */}
        <Card className="shadow-lg bg-white border-t-4 border-purple-600">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-800 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-purple-600" />
              Our Location
            </CardTitle>
            <CardDescription className="text-gray-600">Find us on the map.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              {/* Replace with actual map embed (e.g., Google Maps iframe) */}
              <p>Map Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
