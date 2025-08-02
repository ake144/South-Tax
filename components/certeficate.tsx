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
  return (
    <div className="bg-white p-8 shadow-lg print:shadow-none print:p-0 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
        <div className="flex items-center justify-center gap-8 mb-4">
          <div className="text-right">
            <p className="text-sm font-medium">South Ethiopia ክልላዊ መንግስት ንግድና ገበያ</p>
            <p className="text-sm font-medium">ልማት ቢሮ</p>
          </div>
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">LOGO</span>
            </div>
          </div>
          <div className="text-left">
            <p className="text-sm font-medium">South Ethiopia Regional State Trade and Market</p>
            <p className="text-sm font-medium">Development Bureau</p>
          </div>
        </div>
      </div>

      {/* License Details */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Left Column - Photo and Stamp Area */}
        <div className="space-y-4">
          <div className="border-2 border-gray-300 w-32 h-40 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Photo</span>
          </div>

          {/* Official Stamp Area */}
          {/* <div className="relative">
            <div className="w-32 h-32 border-4 border-purple-600 rounded-full flex items-center justify-center bg-purple-50">
              <div className="text-center">
                <div className="text-purple-800 font-bold text-xs">OFFICIAL</div>
                <div className="text-purple-800 font-bold text-xs">STAMP</div>
                <div className="text-purple-800 text-xs mt-1">980/2008</div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Column - License Information */}
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-medium"> /TIN:</span>
              <div className="border-b border-gray-400 pb-1">{data.licenseNumber}</div>
            </div>
            <div>
              <span className="font-medium">TYPE ዓይነት ፍ.:</span>
              <div className="border-b border-gray-400 pb-1">AM/DES/100136/2016</div>
            </div>
          </div>

          <div>
            <span className="font-medium">Principal Registration No.</span>
            <div className="border-b border-gray-400 pb-1">{data.registrationNumber}</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-medium">TYPE ዓይነት ፍ.:</span>
              <div className="border-b border-gray-400 pb-1">AM/DES/031/ADS/150512/2016</div>
            </div>
            <div>
              <span className="font-medium">Business License No.</span>
              <div className="border-b border-gray-400 pb-1">ቁጥር ተሰጥቶ ፍ.1</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-medium">Previous Date of Issuance</span>
              <div className="border-b border-gray-400 pb-1">የቀደመ ፍ.1</div>
            </div>
            <div>
              <span className="font-medium">{data.previousIssueDate}</span>
            </div>
          </div>

          <div>
            <span className="font-medium">Date of Issuance</span>
            <div className="border-b border-gray-400 pb-1">{data.issueDate}</div>
          </div>
        </div>
      </div>

      {/* Business License Title */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">Business License</h2>
        <p className="text-sm">Issued Under Commercial Registration and Business</p>
        <p className="text-sm">license proc.No 980/2016</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-8 text-sm">
        {/* Left Column - Amharic */}
        <div className="space-y-3">
          <div>
            <span className="font-medium">1. የግለሰብ/ድርጅት ስም</span>
            <div className="border-b border-gray-400 pb-1">{data.ownerName}</div>
          </div>

          <div>
            <span className="font-medium">2. ዜግነት</span>
            <div className="border-b border-gray-400 pb-1">{data.nationality}</div>
          </div>

          <div>
            <span className="font-medium">3. የንግድ ስም</span>
            <div className="border-b border-gray-400 pb-1">{data.tradeName}</div>
          </div>

          <div>
            <span className="font-medium">4. ሥራ አስኪያጅ ስም</span>
            <div className="border-b border-gray-400 pb-1">{data.generalManagerName}</div>
          </div>

          <div>
            <span className="font-medium">5. የንግድ ድርጅት አድራሻ</span>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <span className="text-xs">ክልል</span>
                <div className="border-b border-gray-400 pb-1">{data.region}</div>
              </div>
              <div>
                <span className="text-xs">ዞን/ክ/ከተማ ከተማ</span>
                <div className="border-b border-gray-400 pb-1">{data.zoneSubCity}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <span className="text-xs">ወረዳ</span>
                <div className="border-b border-gray-400 pb-1">{data.woreda}</div>
              </div>
              <div>
                <span className="text-xs">ቀበሌ</span>
                <div className="border-b border-gray-400 pb-1">{data.kebele}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <span className="text-xs">የቤት ቁጥር</span>
                <div className="border-b border-gray-400 pb-1">{data.houseNo}</div>
              </div>
              <div>
                <span className="text-xs">ስልክ ቁጥር</span>
                <div className="border-b border-gray-400 pb-1">{data.telNo}</div>
              </div>
            </div>
            <div>
              <span className="text-xs">ፋክስ</span>
              <div className="border-b border-gray-400 pb-1">{data.fax || "ኢ-ሜይል"}</div>
            </div>
          </div>

          <div>
            <span className="font-medium">6. የንግድ ሥራ መስክ</span>
            <div className="border-b border-gray-400 pb-1">{data.businessCode}ዳቦና ኬክ መስሪያ</div>
          </div>

          <div>
            <span className="font-medium">7. ካፒታል በኢት ብር</span>
            <div className="border-b border-gray-400 pb-1 font-bold">{data.capitalAmount}</div>
          </div>

          <div className="mt-4">
            <span className="text-xs">ይህ የንግድ ፈቃድ ዘ</span>
            <div className="border-b border-gray-400 pb-1">{data.issueDate}</div>
            <span className="text-xs">ን ዓመት</span>
          </div>

          <div className="mt-6">
            <span className="font-medium">የሃላፊ ስም/Name of Official</span>
            <div className="border-b border-gray-400 pb-1">{data.officialName}</div>
            <span className="font-medium">ፊርማ/Signature</span>
            <div className="border-b border-gray-400 pb-1 h-8"></div>
          </div>
        </div>

        {/* Right Column - English */}
        <div className="space-y-3">
          <div>
            <span className="font-medium">1. Owner/Company Name</span>
            <div className="border-b border-gray-400 pb-1">{data.ownerName}</div>
          </div>

          <div>
            <span className="font-medium">2. Nationality</span>
            <div className="border-b border-gray-400 pb-1">{data.nationality}</div>
          </div>

          <div>
            <span className="font-medium">3. Trade Name</span>
            <div className="border-b border-gray-400 pb-1">{data.tradeName}</div>
          </div>

          <div>
            <span className="font-medium">4. General Manager Name</span>
            <div className="border-b border-gray-400 pb-1">{data.generalManagerName}</div>
          </div>

          <div>
            <span className="font-medium">5. Business Address</span>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <span className="text-xs">Region</span>
                <div className="border-b border-gray-400 pb-1">{data.region}</div>
              </div>
              <div>
                <span className="text-xs">Zone/Sub City</span>
                <div className="border-b border-gray-400 pb-1">{data.zoneSubCity}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <span className="text-xs">Woreda</span>
                <div className="border-b border-gray-400 pb-1">{data.woreda}</div>
              </div>
              <div>
                <span className="text-xs">Kebele</span>
                <div className="border-b border-gray-400 pb-1">{data.kebele}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <span className="text-xs">House No.</span>
                <div className="border-b border-gray-400 pb-1">{data.houseNo}</div>
              </div>
              <div>
                <span className="text-xs">Tel.No</span>
                <div className="border-b border-gray-400 pb-1">{data.telNo}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <span className="text-xs">Fax</span>
                <div className="border-b border-gray-400 pb-1">{data.fax}</div>
              </div>
              <div>
                <span className="text-xs">E-mail</span>
                <div className="border-b border-gray-400 pb-1">{data.email}</div>
              </div>
            </div>
          </div>

          <div>
            <span className="font-medium">6. Field of Business</span>
            <div className="border-b border-gray-400 pb-1">
              {data.businessCode}
              {data.fieldOfBusiness}
            </div>
          </div>

          <div>
            <span className="font-medium">7. Capital in ETB</span>
            <div className="border-b border-gray-400 pb-1 font-bold">{data.capitalAmount}</div>
          </div>

          <div className="mt-4">
            <span className="text-xs">This Business License is issued in</span>
            <div className="border-b border-gray-400 pb-1">{data.issueLocation}</div>
            <span className="text-xs">on this day</span>
            <div className="border-b border-gray-400 pb-1">{data.issueDate}</div>
          </div>
        </div>
      </div>

      {/* Official Stamp Area - Bottom Right */}
      <div className="flex justify-end mt-8">
        <div className="w-40 h-40 border-4 border-purple-600 rounded-full flex items-center justify-center bg-purple-50 relative">
          <div className="text-center">
            <div className="text-purple-800 font-bold text-sm">AMHARA REGIONAL</div>
            <div className="text-purple-800 font-bold text-sm">STATE</div>
            <div className="text-purple-800 font-bold text-xs mt-2">TRADE & MARKET</div>
            <div className="text-purple-800 font-bold text-xs">DEVELOPMENT</div>
            <div className="text-purple-800 font-bold text-xs">BUREAU</div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-2 border-purple-600 rounded-full bg-white opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
