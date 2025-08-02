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
  return (
    <div className="bg-white p-8 shadow-lg print:shadow-none print:p-0 max-w-4xl mx-auto">
      {/* Header with Flag and Title */}
      <div className="flex items-start gap-6 mb-8">
        {/* Ethiopian Flag */}
        <div className="w-20 h-16 border border-gray-300">
          <div className="h-1/3 bg-green-500"></div>
          <div className="h-1/3 bg-yellow-400 flex items-center justify-center">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 text-xs">★</span>
            </div>
          </div>
          <div className="h-1/3 bg-red-500"></div>
        </div>


        <Image
            src="/images/coat-of-arms.png"
            alt="Coat of Arms"
            width={20}
            height={20}
            className="w-20 h-20 object-cover"
          />

        {/* Header Text */}
        <div className="flex-1">
          <div className="text-center">
            <p className="text-sm font-medium mb-1">የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ ዓማራ</p>
            <p className="text-sm font-medium mb-1">የአማራ ብሔራዊ ክልላዊ መንግስት ገቢዎች ባለስልጣን</p>
            <p className="text-sm font-medium mb-2">Federal Democratic Republic of Ethiopia</p>
            <p className="text-sm font-medium mb-4">AMHARA NATIONAL REGIONAL STATE REVENUE AUTHORITY</p>

            <h2 className="text-lg font-bold mb-2">የግብር ከፋይ ምዝገባ ሰርተፊኬት</h2>
            <h2 className="text-lg font-bold mb-4">TAXPAYER REGISTRATION CERTIFICATE</h2>

            <p className="text-lg font-bold">{data.taxpayerIdNumber}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-8 text-sm">
        {/* Left Column - Amharic */}
        <div className="space-y-3">
          <div>
            <span className="font-medium">የግብር ከፋይ መለያ ቁጥር:</span>
            <div className="text-xs text-gray-600">Taxpayer Identification Number:</div>
          </div>

          <div>
            <span className="font-medium">ስም/ድርጅት/ ስም:</span>
            <div className="text-xs text-gray-600">Name of Business/Individual/</div>
          </div>

          <div>
            <span className="font-medium">አድራሻ:</span>
            <div className="text-xs text-gray-600">Registered Address:</div>
          </div>

          <div className="ml-4 space-y-1">
            <div>
              <span className="text-xs">ክልል:</span>
              <div className="text-xs text-gray-600">Region:</div>
            </div>
            <div>
              <span className="text-xs">ዞን/ክ/ከተማ:</span>
              <div className="text-xs text-gray-600">Zone/Sub City:</div>
            </div>
            <div>
              <span className="text-xs">ወረዳ:</span>
              <div className="text-xs text-gray-600">Woreda:</div>
            </div>
            <div>
              <span className="text-xs">ቀበሌ/የገበሬ ማህበር:</span>
              <div className="text-xs text-gray-600">Kebele/Farmer's Assoc.:</div>
            </div>
            <div>
              <span className="text-xs">የቤት ቁጥር:</span>
              <div className="text-xs text-gray-600">House No.:</div>
            </div>
          </div>

          <div>
            <span className="text-xs">ESIC Sub-group:</span>
            <div className="text-xs">ESIC Sub-group:</div>
          </div>

          <div className="mt-8">
            <span className="font-medium">የሰጪው ባለስልጣን:</span>
            <div className="text-xs text-gray-600">Issuing Authority:</div>
            <div>
              <span className="font-medium">የመስጫ ቀን:</span>
              <div className="text-xs text-gray-600">Date of Issuance:</div>
            </div>
          </div>
        </div>

        {/* Right Column - English/Data */}
        <div className="space-y-3">
          <div className="font-bold text-base">{data.taxpayerIdNumber}</div>

          
          <div className="font-medium">{data.fullNameAm}</div>
          <div className="font-medium">{data.fullName}</div>

          <div className="space-y-1 mt-8 pt-2 ">
              <div>{data.regionAm}</div>
            <div>{data.region}</div>
            <div>{data.zoneSubCityAm}</div>
            <div>{data.zoneSubCity}</div>
            <div>{data.woredaAm}</div>
            <div>{data.woreda}</div>
            <div>{data.kebeleAm}</div>
            <div>{data.kebele}</div>

            <div>{data.houseNo}</div>
          </div>

          <div>
            <span className="font-medium mt-3">{data.esicSubGroup}</span>
            <span className="ml-2">- {data.businessDescription}</span>
          </div>

          <div className="mt-9 pt-4">
            <div className="font-medium">{data.issuingAuthority}</div>
            <div className="mt-2">{data.dateOfIssuance}</div>
          </div>
        </div>
      </div>

      {/* Legal Text */}
      <div className="mt-8 text-xs leading-relaxed">
        <p className="mb-2">ይህ የምስክር ወረቀት የግብር ከፋዩ ብቸኛ እና ዋና ምዝገባ እንደሆነ የሚያሳይ ሲሆን ሁሉንም የቀደሙ የምዝገባ ሰነዶች ይሽራል፡፡</p>
        <p className="mb-2">ከላይ ባለው መረጃ ላይ ለውጥ ሲደረግ የግብር ከፋዩ ተገቢውን የግብር ቢሮ በመገናኘት የግብር ሰነዱን ለማሻሻል ኃላፊነት አለበት፡፡</p>
        <p className="mb-4">
          This certificate represents the sole and only registration as a taxpayer and supersedes all prior registration
          documentation.
        </p>
        <p>
          The taxpayer is responsible for notifying the appropriate Tax Office of any changes to the above information.
        </p>
      </div>

      {/* Certificate Number and Stamp */}
      <div className="flex justify-between items-end mt-8">
        <div>
          <span className="font-medium text-sm">የምስክር ወረቀት ቁ.:</span>
          <div className="text-xs text-gray-600">Certificate No.:</div>
          <div className="font-bold text-lg">{data.certificateNumber}</div>
        </div>
      </div>

      {/* Large Certificate Number at Bottom */}
      <div className="text-center mt-6">
        <div className="text-2xl font-bold tracking-wider">{data.certificateNumber}</div>
      </div>
    </div>
  )
}
