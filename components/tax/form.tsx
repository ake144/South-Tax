"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Eye, Receipt } from "lucide-react"
import TaxpayerCertificate from "./certeficate"


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

const dummyTaxpayerData: TaxpayerData = {
  taxpayerIdNumber: "0090638794",
  fullName: "Abel Shiferaw Ayalew",
  fullNameAm: "አቤል ሸፈራው አያሌው",
  region: "AMHARA",
  regionAm: "አማራ",
  zoneSubCity: "SOUTH WOLLO",
  zoneSubCityAm: "ደቡብ ወሎ",
  woreda: "DESSIE KETEMA",
  woredaAm: "ደሴ ከተማ",
  kebele: "08",
  kebeleAm: "08",
  houseNo: "new",
  esicSubGroup: "31121",
  businessDescription: "Manufacturing of bakery products",
  businessDescriptionAm: "የኩባያ ምርት አምራች",
  issuingAuthority: "AMHARA NATIONAL REGIONAL STATE REVENUE AUTHORITY",
  issuingAuthorityAm: "የአማራ ብሔራዊ ክልላዊ መንግስት ገቢዎች ባለስልጣን",
  dateOfIssuance: "08 HAMLE 2016",
  dateOfIssuanceAm: "08 ሐምሌ 2016",
  certificateNumber: "181009941425",
  certificateNumberAm: "181009941425",
  phoneNumber: "0947012893",
  email: "abel.shiferaw@email.com",
  businessType: "Manufacturing",
  businessTypeAm: "አምራች",
  registrationDate: "08 HAMLE 2016",
  registrationDateAm: "08 ሐምሌ 2016",
}

export default function TaxpayerRegistrationGenerator() {
  const [formData, setFormData] = useState<TaxpayerData>(dummyTaxpayerData)
  const [activeTab, setActiveTab] = useState("form")

  const handleInputChange = (field: keyof TaxpayerData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleGenerateCertificate = () => {
    setActiveTab("certificate")
  }

  const handleDownloadCertificate = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Receipt className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">Taxpayer Registration Generator</h1>
          </div>
          <p className="text-gray-600">Generate official taxpayer registration certificates</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="form" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Registration Form
            </TabsTrigger>
            <TabsTrigger value="certificate" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Certificate Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form">
            <Card>
              <CardHeader>
                <CardTitle>Taxpayer Registration Application</CardTitle>
                <CardDescription>
                  Fill in the required information to generate your taxpayer registration certificate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>

                    <div className="space-y-2">
                      <Label htmlFor="taxpayerIdNumber">የግብር ከፋይ መለያ ቁጥር / Taxpayer Identification Number</Label>
                      <Input
                        id="taxpayerIdNumber"
                        value={formData.taxpayerIdNumber}
                        onChange={(e) => handleInputChange("taxpayerIdNumber", e.target.value)}
                        placeholder="Enter taxpayer ID number"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullNameAm">ስም/ድርጅት/ ስም </Label>
                        <Input
                          id="fullNameAm"
                          value={formData.fullNameAm}
                          onChange={(e) => handleInputChange("fullNameAm", e.target.value)}
                          placeholder="ስም"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter full name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">ስልክ ቁጥር / Phone Number</Label>
                        <Input
                          id="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ኢሜይል አድራሻ / Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">አድራሻ / Address Information</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="regionAm">ክልል</Label>
                        <Input
                          id="regionAm"
                          value={formData.regionAm}
                          onChange={(e) => handleInputChange("regionAm", e.target.value)}
                          placeholder="ክልል"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="region">Region</Label>
                        <Input
                          id="region"
                          value={formData.region}
                          onChange={(e) => handleInputChange("region", e.target.value)}
                          placeholder="Region"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="zoneSubCityAm">ዞን/ክ/ከተማ</Label>
                        <Input
                          id="zoneSubCityAm"
                          value={formData.zoneSubCityAm}
                          onChange={(e) => handleInputChange("zoneSubCityAm", e.target.value)}
                          placeholder="ዞን/ክ/ከተማ"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zoneSubCity">Zone/Sub City </Label>
                        <Input
                          id="zoneSubCity"
                          value={formData.zoneSubCity}
                          onChange={(e) => handleInputChange("zoneSubCity", e.target.value)}
                          placeholder="Zone/Sub City"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="woredaAm">ወረዳ </Label>
                        <Input
                          id="woredaAm"
                          value={formData.woredaAm}
                          onChange={(e) => handleInputChange("woredaAm", e.target.value)}
                          placeholder="ወረዳ"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="woreda">Woreda </Label>
                        <Input
                          id="woreda"
                          value={formData.woreda}
                          onChange={(e) => handleInputChange("woreda", e.target.value)}
                          placeholder="Woreda"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="kebeleAm">ቀበሌ/የገበሬ ማህበር</Label>
                        <Input
                          id="kebeleAm"
                          value={formData.kebeleAm}
                          onChange={(e) => handleInputChange("kebeleAm", e.target.value)}
                          placeholder="ቀበሌ/የገበሬ ማህበር"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="kebele">Kebele/Farmer's Assoc.</Label>
                        <Input
                          id="kebele"
                          value={formData.kebele}
                          onChange={(e) => handleInputChange("kebele", e.target.value)}
                          placeholder="Kebele/Farmer's Assoc."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="houseNo">የቤት ቁጥር / House No.</Label>
                      <Input
                        id="houseNo"
                        value={formData.houseNo}
                        onChange={(e) => handleInputChange("houseNo", e.target.value)}
                        placeholder="House number"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Business Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessTypeAm">የንግድ አይነት</Label>
                      <Input
                        id="businessTypeAm"
                        value={formData.businessTypeAm}
                        onChange={(e) => handleInputChange("businessTypeAm", e.target.value)}
                        placeholder="የንግድ አይነት"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleInputChange("businessType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="Trading">Trading</SelectItem>
                          <SelectItem value="Service">Service</SelectItem>
                          <SelectItem value="Agriculture">Agriculture</SelectItem>
                          <SelectItem value="Construction">Construction</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessDescriptionAm">የንግድ መግለጫ </Label>
                    <Textarea
                      id="businessDescriptionAm"
                      value={formData.businessDescriptionAm}
                      onChange={(e) => handleInputChange("businessDescriptionAm", e.target.value)}
                      placeholder="የንግድ መግለጫ"
                      rows={2}
                    />
                    <Label htmlFor="businessDescription">Business Description </Label>
                    <Textarea
                      id="businessDescription"
                      value={formData.businessDescription}
                      onChange={(e) => handleInputChange("businessDescription", e.target.value)}
                      placeholder="Describe the business activity"
                      rows={2}
                    />
                  </div>
                </div>

                {/* Certificate Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">የሰርተፊኬት መረጃ / Certificate Information</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="issuingAuthorityAm">የሰጪው ባለስልጣን </Label>
                      <Input
                        id="issuingAuthorityAm"
                        value={formData.issuingAuthorityAm}
                        onChange={(e) => handleInputChange("issuingAuthorityAm", e.target.value)}
                        placeholder="የሰጪው ባለስልጣን"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="issuingAuthority">Issuing Authority </Label>
                      <Input
                        id="issuingAuthority"
                        value={formData.issuingAuthority}
                        onChange={(e) => handleInputChange("issuingAuthority", e.target.value)}
                        placeholder="Issuing authority"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="certificateNumberAm">የምስክር ወረቀት ቁ.</Label>
                      <Input
                        id="certificateNumberAm"
                        value={formData.certificateNumberAm}
                        onChange={(e) => handleInputChange("certificateNumberAm", e.target.value)}
                        placeholder="የምስክር ወረቀት ቁ."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="certificateNumber">Certificate Number</Label>
                      <Input
                        id="certificateNumber"
                        value={formData.certificateNumber}
                        onChange={(e) => handleInputChange("certificateNumber", e.target.value)}
                        placeholder="Certificate number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="registrationDateAm">የምዝገባ ቀን </Label>
                      <Input
                        id="registrationDateAm"
                        value={formData.registrationDateAm}
                        onChange={(e) => handleInputChange("registrationDateAm", e.target.value)}
                        placeholder="የምዝገባ ቀን"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registrationDate">Registration Date </Label>
                      <Input
                        id="registrationDate"
                        value={formData.registrationDate}
                        onChange={(e) => handleInputChange("registrationDate", e.target.value)}
                        placeholder="Registration date"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfIssuanceAm">የመስጫ ቀን </Label>
                      <Input
                        id="dateOfIssuanceAm"
                        value={formData.dateOfIssuanceAm}
                        onChange={(e) => handleInputChange("dateOfIssuanceAm", e.target.value)}
                        placeholder="የመስጫ ቀን"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfIssuance">Date of Issuance </Label>
                      <Input
                        id="dateOfIssuance"
                        value={formData.dateOfIssuance}
                        onChange={(e) => handleInputChange("dateOfIssuance", e.target.value)}
                        placeholder="Date of issuance"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                  <Button variant="outline" onClick={() => setFormData(dummyTaxpayerData)}>
                    Load Sample Data
                  </Button>
                  <Button onClick={handleGenerateCertificate} className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Generate Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificate">
            <div className="space-y-4">
              <div className="flex justify-end">
                <Button onClick={handleDownloadCertificate} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Certificate
                </Button>
              </div>
              <TaxpayerCertificate data={formData} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
