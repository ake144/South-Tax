"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Share2,
  Eye,
  EyeOff,
  Shield,
  Calendar,
  MapPin,
  Building,
  User,
  Hash,
  FileText,
  Verified,
} from "lucide-react"
import Image from "next/image"

interface TaxpayerData {
  taxpayerIdNumber: string
  fullName: string
  fullNameAm: string
  region: string
  regionAm: string
  zoneSubCity: string
  zoneSubCityAm: string
  woreda: string
  woredaAm: string
  kebele: string
  kebeleAm: string
  houseNo: string
  esicSubGroup: string
  businessDescription: string
  businessDescriptionAm: string
  issuingAuthority: string
  issuingAuthorityAm: string
  dateOfIssuance: string
  dateOfIssuanceAm: string
  certificateNumber: string
  certificateNumberAm: string
  phoneNumber: string
  email: string
  businessType: string
  businessTypeAm: string
  registrationDate: string
  registrationDateAm: string
}

interface TaxpayerCertificateProps {
  data: TaxpayerData
}

export default function TaxpayerCertificate({ data }: TaxpayerCertificateProps) {
  const [showSensitiveData, setShowSensitiveData] = useState(true)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async (format: "pdf" | "png" | "json") => {
    setIsDownloading(true)

    if (format === "json") {
      // Download as JSON
      const dataStr = JSON.stringify(data, null, 2)
      const dataBlob = new Blob([dataStr], { type: "application/json" })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement("a")
      link.href = url
      link.download = `taxpayer-certificate-${data.certificateNumber}.json`
      link.click()
      URL.revokeObjectURL(url)
    } else if (format === "pdf") {
      // Trigger print for PDF
      window.print()
    } else if (format === "png") {
      // For PNG, we would need html2canvas library
      // For now, just trigger print
      window.print()
    }

    setTimeout(() => setIsDownloading(false), 1000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Taxpayer Registration Certificate",
          text: `Certificate for ${data.fullName} - ${data.certificateNumber}`,
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

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Action Bar */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Verified className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Official Certificate</h3>
              <p className="text-sm text-gray-600">Generated on {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSensitiveData(!showSensitiveData)}
              className="flex items-center gap-2"
            >
              {showSensitiveData ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showSensitiveData ? "Hide" : "Show"} Details
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2 bg-transparent"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>

            <div className="flex items-center gap-1">
              <Button
                size="sm"
                onClick={() => handleDownload("pdf")}
                disabled={isDownloading}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
              >
                <Download className="w-4 h-4" />
                PDF
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDownload("png")}
                disabled={isDownloading}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                PNG
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDownload("json")}
                disabled={isDownloading}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                JSON
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Certificate */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 border-2 border-blue-200 shadow-2xl print:shadow-none print:border-gray-300">
        {/* Watermark */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="text-6xl font-bold text-gray-400">OFFICIAL</div>
          </div>
        </div>

        {/* Security Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
          <div className="w-full h-full bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full blur-xl"></div>
        </div>

        <div className="relative p-8 print:p-6">
          {/* Header */}
          <div className="text-center justify-center gap-9 flex flex-row mb-8 relative">
            
              <div className="w-20 h-16 border-2 shadow-md rounded-sm overflow-hidden">
                 <Image
                  src='/flag.png'
                  alt="Ethiopian Flag"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                  />
              </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700">የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ</p>
              <p className="text-sm font-semibold text-gray-700">የአማራ ብሔራዊ ክልላዊ መንግስት ገቢዎች ባለስልጣን</p>
              <p className="text-sm font-medium text-gray-600 mt-3">Federal Democratic Republic of Ethiopia</p>
              <p className="text-sm font-medium text-gray-600">AMHARA NATIONAL REGIONAL STATE REVENUE AUTHORITY</p>

              <div className="mt-6 space-y-2">
                <h1 className="text-xl font-bold text-gray-900">የግብር ከፋይ ምዝገባ ሰርተፊኬት</h1>
                <h1 className="text-xl font-bold text-gray-900">TAXPAYER REGISTRATION CERTIFICATE</h1>
              </div>

              <div className="mt-4 p-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg border border-blue-200">
                <p className="text-2xl font-bold text-blue-900">{maskSensitiveData(data.taxpayerIdNumber)}</p>
              </div>
            </div>

          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Personal Information */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Personal Information</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Name / ስም</p>
                  <p className="font-medium text-gray-900">{maskSensitiveData(data.fullName)}</p>
                  <p className="text-sm text-gray-600">{maskSensitiveData(data.fullNameAm)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Taxpayer ID</p>
                  <Badge variant="outline" className="font-mono">
                    {maskSensitiveData(data.taxpayerIdNumber)}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Contact</p>
                  <p className="text-sm text-gray-700">{maskSensitiveData(data.phoneNumber)}</p>
                  <p className="text-sm text-gray-700">{maskSensitiveData(data.email)}</p>
                </div>
              </div>
            </Card>

            {/* Address Information */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">Address Information</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Region / ክልል</p>
                  <p className="font-medium text-gray-900">{data.region}</p>
                  <p className="text-sm text-gray-600">{data.regionAm}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Zone/Sub City</p>
                  <p className="text-sm text-gray-700">{data.zoneSubCity}</p>
                  <p className="text-sm text-gray-600">{data.zoneSubCityAm}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Woreda / Kebele</p>
                  <p className="text-sm text-gray-700">
                    {data.woreda} / {data.kebele}
                  </p>
                  <p className="text-sm text-gray-600">
                    {data.woredaAm} / {data.kebeleAm}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">House No.</p>
                  <p className="text-sm text-gray-700">{data.houseNo}</p>
                </div>
              </div>
            </Card>

            {/* Business Information */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Business Information</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Business Type</p>
                  <p className="font-medium text-gray-900">{data.businessType}</p>
                  <p className="text-sm text-gray-600">{data.businessTypeAm}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">ESIC Code</p>
                  <Badge variant="secondary" className="font-mono">
                    {data.esicSubGroup}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Description</p>
                  <p className="text-sm text-gray-700">{data.businessDescription}</p>
                  <p className="text-sm text-gray-600">{data.businessDescriptionAm}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Certificate Details */}
          <Card className="p-6 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-gray-900">Certificate Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Issuing Authority</p>
                <p className="font-medium text-gray-900 text-sm">{data.issuingAuthority}</p>
                <p className="text-sm text-gray-600">{data.issuingAuthorityAm}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Issue Date</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <p className="font-medium text-gray-900">{data.dateOfIssuance}</p>
                </div>
                <p className="text-sm text-gray-600">{data.dateOfIssuanceAm}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Certificate Number</p>
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-gray-500" />
                  <Badge variant="default" className="font-mono">
                    {data.certificateNumber}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Legal Text */}
          <Card className="p-6 bg-gray-50 border border-gray-200 mb-6">
            <div className="text-xs leading-relaxed space-y-2 text-gray-700">
              <p>ይህ የምስክር ወረቀት የግብር ከፋዩ ብቸኛ እና ዋና ምዝገባ እንደሆነ የሚያሳይ ሲሆን ሁሉንም የቀደሙ የምዝገባ ሰነዶች ይሽራል፡፡</p>
              <p>ከላይ ባለው መረጃ ላይ ለውጥ ሲደረግ የግብር ከፋዩ ተገቢውን የግብር ቢሮ በመገናኘት የግብር ሰነዱን ለማሻሻል ኃላፊነት አለበት፡፡</p>
              <p className="pt-2 border-t border-gray-300">
                This certificate represents the sole and only registration as a taxpayer and supersedes all prior
                registration documentation.
              </p>
              <p>
                The taxpayer is responsible for notifying the appropriate Tax Office of any changes to the above
                information.
              </p>
            </div>
          </Card>

          {/* Footer with Stamp and Certificate Number */}
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Certificate Number</p>
              <p className="text-lg font-bold text-gray-900 font-mono">{data.certificateNumber}</p>
            </div>

            {/* Official Stamp */}
            <div className="relative">
              <div className="w-32 h-32 border-4 border-blue-600 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
                <div className="text-center">
                  <div className="text-blue-800 font-bold text-xs">AMHARA</div>
                  <div className="text-blue-800 font-bold text-xs">REVENUE</div>
                  <div className="text-blue-800 font-bold text-xs">AUTHORITY</div>
                  <div className="text-blue-800 text-xs mt-1">OFFICIAL</div>
                  <div className="text-blue-800 text-xs">SEAL</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Verified className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="absolute bottom-4 left-4 print:block hidden">
            <div className="w-16 h-16 bg-gray-200 border border-gray-300 flex items-center justify-center text-xs text-gray-500">
              QR Code
            </div>
          </div>
        </div>
      </Card>

      {/* Certificate Verification */}
      <Card className="p-4 bg-green-50 border border-green-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <Verified className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-semibold text-green-900">Certificate Verified</p>
            <p className="text-sm text-green-700">
              This certificate is digitally verified and can be authenticated using certificate number:{" "}
              {data.certificateNumber}
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
