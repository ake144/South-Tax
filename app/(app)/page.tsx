'use client'

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BarChart, Newspaper, LinkIcon, Users, FileText, Receipt, LayoutDashboard } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {

 const backgrounds = ["/head.png", "/im1.png", "/im2.png", "/im3.png"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
     <section
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center text-center p-4 transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${backgrounds[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white max-w-4xl mx-auto space-y-6 animate-fadeIn">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
          Empowering South Ethiopia’s Prosperity
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-amber-400 drop-shadow-md">
          የደቡብ ኢትዮጵያ ክልል ገቢዎች ቢሮ
        </h2>
        <p className="text-base md:text-lg font-light opacity-90">
          Building a transparent and efficient revenue system for sustainable development.
        </p>
        <p className="text-sm md:text-base font-normal text-gray-200">
          ለተስፋ እና ለመሻሻል አንፃፃፍ እና አፈፃፀም የተሟላ የገቢ ስርዓትን እንገንባለን።
        </p>
      </div>
    </section>
        {/* Mission, Vision, Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-xl border-t-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-800">Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    Our mission is to contribute to economic development and social welfare by developing a modern Tax
                    and Customs Administration that employs professional and highly skilled staff who promote voluntary
                    compliance amongst individuals and businesses, and take swift action against those who do not
                    comply.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-t-4 border-green-600 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-green-800">Vision</CardTitle>
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
                  <CardTitle className="text-2xl font-bold text-purple-800">Values</CardTitle>
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
          </div>
        </section>

        {/* Key Statistics Section */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
              <p className="text-lg text-gray-600">
                Driving growth and development through effective revenue collection.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 shadow-md border-b-4 border-teal-500">
                <BarChart className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-gray-900 mb-2">1.2B ETB</CardTitle>
                <CardContent className="text-gray-600 text-sm p-0">Annual Revenue Collected</CardContent>
              </Card>
              <Card className="text-center p-6 shadow-md border-b-4 border-indigo-500">
                <Newspaper className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-gray-900 mb-2">150K+</CardTitle>
                <CardContent className="text-gray-600 text-sm p-0">Registered Businesses</CardContent>
              </Card>
              <Card className="text-center p-6 shadow-md border-b-4 border-orange-500">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-gray-900 mb-2">500K+</CardTitle>
                <CardContent className="text-gray-600 text-sm p-0">Individual Taxpayers</CardContent>
              </Card>
              <Card className="text-center p-6 shadow-md border-b-4 border-red-500">
                <LinkIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-gray-900 mb-2">98%</CardTitle>
                <CardContent className="text-gray-600 text-sm p-0">Compliance Rate</CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest News & Quick Links Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Latest News */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Latest News & Announcements</h2>
              <div className="space-y-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 mb-2">July 28, 2025</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      New Tax Policy on Digital Services Announced
                    </h3>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      The South Ethiopia Region Revenue Bureau has announced a new policy regarding the taxation of
                      digital services, effective from August 1, 2025. This aims to broaden the tax base and ensure
                      fairness in the digital economy.
                    </p>
                    <Link href="#" className="text-blue-600 hover:underline text-sm mt-3 inline-block">
                      Read More <ArrowRight className="w-4 h-4 inline-block ml-1" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 mb-2">July 20, 2025</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Workshop on Business License Renewal Procedures
                    </h3>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      A successful workshop was held for local businesses on the updated procedures for business license
                      renewal. The event saw high participation and provided valuable insights for compliance.
                    </p>
                    <Link href="#" className="text-blue-600 hover:underline text-sm mt-3 inline-block">
                      Read More <ArrowRight className="w-4 h-4 inline-block ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Quick Links & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/business-license">
                  <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Apply for Business License</h3>
                      <p className="text-sm text-gray-600">Start your new business registration.</p>
                    </div>
                  </Card>
                </Link>
                <Link href="/taxpayer">
                  <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                    <Receipt className="w-8 h-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Register as Taxpayer</h3>
                      <p className="text-sm text-gray-600">Get your Taxpayer Identification Number (TIN).</p>
                    </div>
                  </Card>
                </Link>
                <Link href="/dashboard">
                  <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                    <LayoutDashboard className="w-8 h-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Access Dashboard</h3>
                      <p className="text-sm text-gray-600">Manage your certificates and data.</p>
                    </div>
                  </Card>
                </Link>
                <Link href="/forms">
                  <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                    <LinkIcon className="w-8 h-8 text-orange-600" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Download Forms</h3>
                      <p className="text-sm text-gray-600">Find all necessary tax and business forms.</p>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
