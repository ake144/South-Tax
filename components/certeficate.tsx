"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Share2, Eye, EyeOff, Shield, Calendar, Verified, Building2 } from "lucide-react"
import Image from "next/image"

interface BusinessData {
  ownerName: string
  ownerNameAm: string
  nationality: string
  nationalityAm: string
  tradeName: string
  tradeNameAm: string
  generalManagerName: string
  generalManagerNameAm: string
  region: string
  regionAm: string
  zoneSubCity: string
  zoneSubCityAm: string
  woreda: string
  woredaAm: string
  kebele: string
  kebeleAm: string
  houseNo: string
  telNo: string
  fax?: string
  email?: string
  photo?: string
  fieldOfBusiness: string
  fieldOfBusinessAm: string
  businessCode: string
  capitalAmount: string
  issueDate: string
  issueLocation: string
  issueLocationAm: string
  officialName: string
  officialNameAm: string
  licenseNumber: string
  registrationNumber: string
  previousIssueDate: string
}

interface CertificateProps {
  data: BusinessData
}

export default function Certificate({ data }: CertificateProps) {
  const [showSensitiveData, setShowSensitiveData] = useState(true)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async (format: "pdf" | "png" | "json") => {
    setIsDownloading(true)

    if (format === "json") {
      const dataStr = JSON.stringify(data, null, 2)
      const dataBlob = new Blob([dataStr], { type: "application/json" })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement("a")
      link.href = url
      link.download = `business-license-${data.licenseNumber}.json`
      link.click()
      URL.revokeObjectURL(url)
    } else {
      window.print()
    }

    setTimeout(() => setIsDownloading(false), 1000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Business License Certificate",
          text: `Business License for ${data.ownerName} - ${data.licenseNumber}`,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    }
  }

  const maskSensitiveData = (value: string, showLength = 4) => {
    if (showSensitiveData) return value
    return value.slice(0, showLength) + "*".repeat(Math.max(0, value.length - showLength))
  }

  // Generate QR code data for business license
  const qrData = JSON.stringify({
    license: data.licenseNumber,
    owner: data.ownerName,
    business: data.tradeName,
    issued: data.issueDate,
    authority: "South Ethiopia Trade Bureau",
    registration: data.registrationNumber,
  })

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(qrData)}`

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Action Bar */}
      {/* <Card className="p-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-emerald-900">Business License Certificate</h3>
              <p className="text-sm text-emerald-700">Generated on {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSensitiveData(!showSensitiveData)}
              className="flex items-center gap-2 border-emerald-300 hover:bg-emerald-50"
            >
              {showSensitiveData ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showSensitiveData ? "Hide" : "Show"} Details
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2 border-emerald-300 hover:bg-emerald-50 bg-transparent"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>

            <div className="flex items-center gap-1">
              <Button
                size="sm"
                onClick={() => handleDownload("pdf")}
                disabled={isDownloading}
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg"
              >
                <Download className="w-4 h-4" />
                PDF
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDownload("json")}
                disabled={isDownloading}
                className="flex items-center gap-2 border-emerald-300 hover:bg-emerald-50"
              >
                <Download className="w-4 h-4" />
                JSON
              </Button>
            </div>
          </div>
        </div>
      </Card> */}

      {/* Certificate */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/20 border-2 border-emerald-300 shadow-2xl print:shadow-none print:border-gray-400">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-emerald-400 opacity-30"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-emerald-400 opacity-30"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-emerald-400 opacity-30"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-emerald-400 opacity-30"></div>

        {/* Watermark */}
        <div className="absolute inset-0 opacity-3 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="text-6xl font-bold text-emerald-200">OFFICIAL</div>
          </div>
        </div>

        <div className="relative p-8 print:p-6">
          {/* Header */}
          <div className="text-center mb-8 border-b-2 border-emerald-600 pb-6">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-right">
                <p className="text-sm font-semibold text-emerald-800">South Ethiopia ክልላዊ መንግስት ንግድና ገበያ</p>
                <p className="text-sm font-semibold text-emerald-800">ልማት ቢሮ</p>
              </div>

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-teal-700 rounded-full flex items-center justify-center">
                    <Shield className="text-white font-bold text-lg w-8 h-8" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Verified className="w-3 h-3 text-yellow-800" />
                </div>
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold text-emerald-800">South Ethiopia Regional State Trade and Market</p>
                <p className="text-sm font-semibold text-emerald-800">Development Bureau</p>
              </div>
            </div>
          </div>

          {/* License Details Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Photo and QR Code */}
            <div className="space-y-6">
              <Card className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                <div className="space-y-4">
                  <div className="border-2 border-emerald-300 w-full h-40 bg-emerald-100 flex items-center justify-center rounded-lg overflow-hidden">
                    {data.photo ? (
                      <Image
                        src={"https://github.com/shadcn.png"}
                        alt="Business Owner"
                        width={120}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-emerald-600 text-sm font-medium">Photo</span>
                    )}
                  </div>

                  <div className="text-center">
                    <Image
                      src={qrCodeUrl || "/placeholder.svg"}
                      alt="License QR Code"
                      width={100}
                      height={100}
                      className="mx-auto border border-emerald-300 rounded-lg"
                    />
                    <p className="text-xs text-emerald-600 mt-2 font-medium">Scan to verify license</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* License Information */}
            <div className="lg:col-span-2">
              <Card className="p-6 bg-gradient-to-br from-white to-emerald-50/50 border border-emerald-200 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold text-emerald-800 text-xs uppercase tracking-wide">
                        Practice Only # /TIN
                      </span>
                      <div className="mt-1 p-2 bg-emerald-100 rounded border-l-4 border-emerald-500">
                        <span className="font-mono font-bold text-emerald-900">
                          {maskSensitiveData(data.licenseNumber)}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-emerald-800 text-xs uppercase tracking-wide">
                        Principal Registration No.
                      </span>
                      <div className="mt-1 p-2 bg-emerald-100 rounded border-l-4 border-emerald-500">
                        <span className="font-mono font-bold text-emerald-900">
                          {maskSensitiveData(data.registrationNumber)}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-emerald-800 text-xs uppercase tracking-wide">
                        Business License No.
                      </span>
                      <div className="mt-1 p-2 bg-emerald-100 rounded border-l-4 border-emerald-500">
                        <span className="font-mono text-emerald-900">ቁጥር ተሰጥቶ ፍ.1</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold text-emerald-800 text-xs uppercase tracking-wide">
                        Previous Issue Date
                      </span>
                      <div className="mt-1 p-2 bg-emerald-100 rounded border-l-4 border-emerald-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          <span className="font-medium text-emerald-900">{data.previousIssueDate}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-emerald-800 text-xs uppercase tracking-wide">
                        Current Issue Date
                      </span>
                      <div className="mt-1 p-2 bg-emerald-100 rounded border-l-4 border-emerald-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          <span className="font-medium text-emerald-900">{data.issueDate}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-emerald-800 text-xs uppercase tracking-wide">
                        Issue Location
                      </span>
                      <div className="mt-1 p-2 bg-emerald-100 rounded border-l-4 border-emerald-500">
                        <span className="font-medium text-emerald-900">{data.issueLocation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Business License Title */}
          {/* <div className="text-center mb-8">
            <div className="inline-block p-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-2">Business License</h2>
              <p className="text-emerald-100 text-sm">Issued Under Commercial Registration and Business</p>
              <p className="text-emerald-100 text-sm">License Proc. No 980/2016</p>
            </div>
          </div> */}

          {/* Main Content - Combined Information Card */}
          <div className="p-8 bg-white/90 rounded-xl shadow-md mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Amharic */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-emerald-800 pb-3 border-b-2 border-emerald-200">የንግድ ፈቃድ መረጃ</h3>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <span className="font-semibold text-emerald-800 text-sm">1. የግለሰብ/ድርጅት ስም</span>
                    <div className="mt-2 font-medium text-emerald-900">{maskSensitiveData(data.ownerNameAm)}</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <span className="font-semibold text-emerald-800 text-sm">2. ዜግነት</span>
                    <div className="mt-2 font-medium text-emerald-900">{data.nationalityAm}</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <span className="font-semibold text-emerald-800 text-sm">3. የንግድ ስም</span>
                    <div className="mt-2 font-medium text-emerald-900">{data.tradeNameAm}</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <span className="font-semibold text-emerald-800 text-sm">4. ሥራ አስኪያጅ ስም</span>
                    <div className="mt-2 font-medium text-emerald-900">{data.generalManagerNameAm}</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <span className="font-semibold text-emerald-800 text-sm">5. የንግድ ድርጅት አድራሻ</span>
                    <div className="mt-2 space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-emerald-600">ክልል:</span>
                          <div className="font-medium text-emerald-900">{data.regionAm}</div>
                        </div>
                        <div>
                          <span className="text-xs text-emerald-600">ዞን/ክ/ከተማ:</span>
                          <div className="font-medium text-emerald-900">{data.zoneSubCityAm}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-emerald-600">ወረዳ:</span>
                          <div className="font-medium text-emerald-900">{data.woredaAm}</div>
                        </div>
                        <div>
                          <span className="text-xs text-emerald-600">ቀበሌ:</span>
                          <div className="font-medium text-emerald-900">{data.kebeleAm}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-emerald-600">የቤት ቁጥር:</span>
                          <div className="font-medium text-emerald-900">{data.houseNo}</div>
                        </div>
                        <div>
                          <span className="text-xs text-emerald-600">ስልክ ቁጥር:</span>
                          <div className="font-medium text-emerald-900">{maskSensitiveData(data.telNo)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <span className="font-semibold text-emerald-800 text-sm">6. የንግድ ሥራ መስክ</span>
                    <div className="mt-2">
                      <Badge variant="secondary" className="bg-emerald-200 text-emerald-800 mr-2">
                        {data.businessCode}
                      </Badge>
                      <span className="font-medium text-emerald-900">{data.fieldOfBusinessAm}</span>
                    </div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <span className="font-semibold text-emerald-800 text-sm">7. ካፒታል በኢት ብር</span>
                    <div className="mt-2 font-bold text-lg text-emerald-900">{data.capitalAmount} ETB</div>
                  </div>
                </div>
              </div>
              {/* Right Column - English */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-emerald-800 pb-3 border-b-2 border-emerald-200">
                  Business License Information
                </h3>
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <span className="font-semibold text-teal-800 text-sm">1. Owner/Company Name</span>
                    <div className="mt-2 font-medium text-teal-900">{maskSensitiveData(data.ownerName)}</div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <span className="font-semibold text-teal-800 text-sm">2. Nationality</span>
                    <div className="mt-2 font-medium text-teal-900">{data.nationality}</div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <span className="font-semibold text-teal-800 text-sm">3. Trade Name</span>
                    <div className="mt-2 font-medium text-teal-900">{data.tradeName}</div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <span className="font-semibold text-teal-800 text-sm">4. General Manager Name</span>
                    <div className="mt-2 font-medium text-teal-900">{data.generalManagerName}</div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <span className="font-semibold text-teal-800 text-sm">5. Business Address</span>
                    <div className="mt-2 space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-teal-600">Region:</span>
                          <div className="font-medium text-teal-900">{data.region}</div>
                        </div>
                        <div>
                          <span className="text-xs text-teal-600">Zone/Sub City:</span>
                          <div className="font-medium text-teal-900">{data.zoneSubCity}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-teal-600">Woreda:</span>
                          <div className="font-medium text-teal-900">{data.woreda}</div>
                        </div>
                        <div>
                          <span className="text-xs text-teal-600">Kebele:</span>
                          <div className="font-medium text-teal-900">{data.kebele}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-teal-600">House No.:</span>
                          <div className="font-medium text-teal-900">{data.houseNo}</div>
                        </div>
                        <div>
                          <span className="text-xs text-teal-600">Tel.No:</span>
                          <div className="font-medium text-teal-900">{maskSensitiveData(data.telNo)}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-teal-600">Fax:</span>
                          <div className="font-medium text-teal-900">{data.fax || "N/A"}</div>
                        </div>
                        <div>
                          <span className="text-xs text-teal-600">E-mail:</span>
                          <div className="font-medium text-teal-900">{maskSensitiveData(data.email || "N/A")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <span className="font-semibold text-teal-800 text-sm">6. Field of Business</span>
                    <div className="mt-2">
                      <Badge variant="secondary" className="bg-teal-200 text-teal-800 mr-2">
                        {data.businessCode}
                      </Badge>
                      <span className="font-medium text-teal-900">{data.fieldOfBusiness}</span>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <span className="font-semibold text-teal-800 text-sm">7. Capital in ETB</span>
                    <div className="mt-2 font-bold text-lg text-teal-900">{data.capitalAmount} ETB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Official Signature Section */}
          <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <p className="font-semibold text-emerald-800 text-sm">የሃላፊ ስም / Name of Official</p>
                <p className="font-medium text-emerald-900">{data.officialNameAm}</p>
                <p className="font-medium text-emerald-900">{data.officialName}</p>
                <div className="mt-4">
                  <p className="font-semibold text-emerald-800 text-sm">ፊርማ / Signature</p>
                  <div className="w-48 h-12 border-b-2 border-emerald-400 mt-2"></div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-emerald-600 uppercase tracking-wide mb-2">License Number</p>
                <Badge variant="default" className="bg-emerald-700 text-white font-mono text-lg px-4 py-2">
                  {data.licenseNumber}
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </Card>

      {/* Verification Section */}
      <Card className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
            <Verified className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-semibold text-emerald-900">License Verified & Authenticated</p>
            <p className="text-sm text-emerald-700">
              This business license is digitally verified. Scan the QR code above or use license number:{" "}
              {data.licenseNumber} for verification.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
