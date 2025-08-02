export interface BusinessUser {
  id: string
  ownerName: string
  tradeName: string
  licenseNumber: string
  issueDate: string
  status: "Active" | "Expired" | "Pending"
  email: string
  telNo: string
  region: string
}

export interface TaxpayerUser {
  id: string
  fullName: string
  taxpayerIdNumber: string
  dateOfIssuance: string
  businessType: string
  status: "Registered" | "Pending" | "Suspended"
  email: string
  phoneNumber: string
  region: string
}

export interface Certificate {
  id: string
  type: "Business License" | "Taxpayer Registration"
  name: string // ownerName or fullName
  identifier: string // licenseNumber or taxpayerIdNumber
  issueDate: string // issueDate or dateOfIssuance
  status: "Active" | "Expired" | "Pending" | "Registered" | "Suspended"
  region: string
}

export interface FormItem {
  id: string
  title: string
  description: string
  category: "Tax" | "Business" | "General" | "Other"
  fileUrl: string // Placeholder for download URL
  version: string
  lastUpdated: string
}

export interface NewsEventItem {
  id: string
  type: "News" | "Event" | "Announcement"
  title: string
  date: string // YYYY-MM-DD
  summary: string
  content: string // Full content for a detail page (if implemented later)
  imageUrl?: string // Placeholder for image
}

export const mockBusinessUsers: BusinessUser[] = [
  {
    id: "bl-001",
    ownerName: "Abeebe Beso",
    tradeName: "Shiferaw Bakery Enterprise",
    licenseNumber: "AM/DES/100136/2016",
    issueDate: "2024-07-18",
    status: "Active",
    email: "abebe.b@example.com",
    telNo: "0911234567",
    region: "Amhara",
  },
  {
    id: "bl-002",
    ownerName: "Kebede Desta",
    tradeName: "Kebede Construction PLC",
    licenseNumber: "AM/GND/200500/2017",
    issueDate: "2023-11-01",
    status: "Expired",
    email: "kebede.d@example.com",
    telNo: "0922345678",
    region: "Oromia",
  },
  {
    id: "bl-003",
    ownerName: "Fatuma Ali",
    tradeName: "Fatuma Textile Factory",
    licenseNumber: "AM/HRR/300123/2018",
    issueDate: "2024-01-15",
    status: "Pending",
    email: "fatuma.a@example.com",
    telNo: "0933456789",
    region: "Tigray",
  },
  {
    id: "bl-004",
    ownerName: "Chala Gemechu",
    tradeName: "Chala Coffee Export",
    licenseNumber: "AM/ADD/400789/2019",
    issueDate: "2024-05-20",
    status: "Active",
    email: "chala.g@example.com",
    telNo: "0944567890",
    region: "Addis Ababa",
  },
  {
    id: "bl-005",
    ownerName: "Tigist Mamo",
    tradeName: "Tigist Retail Store",
    licenseNumber: "AM/DRD/500321/2020",
    issueDate: "2023-09-10",
    status: "Expired",
    email: "tigist.m@example.com",
    telNo: "0955678901",
    region: "Dire Dawa",
  },
]

export const mockTaxpayerUsers: TaxpayerUser[] = [
  {
    id: "tp-001",
    fullName: "Abel Shiferaw Ayalew",
    taxpayerIdNumber: "0090638794",
    dateOfIssuance: "08 HAMLE 2016",
    businessType: "Manufacturing",
    status: "Registered",
    email: "abel.s@example.com",
    phoneNumber: "0947012893",
    region: "Amhara",
  },
  {
    id: "tp-002",
    fullName: "Sara Mekonnen",
    taxpayerIdNumber: "0080527683",
    dateOfIssuance: "15 NEHASE 2015",
    businessType: "Service",
    status: "Registered",
    email: "sara.m@example.com",
    phoneNumber: "0968765432",
    region: "Oromia",
  },
  {
    id: "tp-003",
    fullName: "Dawit Tesfaye",
    taxpayerIdNumber: "0070416572",
    dateOfIssuance: "20 MESKEREM 2016",
    businessType: "Trading",
    status: "Pending",
    email: "dawit.t@example.com",
    phoneNumber: "0979876543",
    region: "SNNPR",
  },
  {
    id: "tp-004",
    fullName: "Aster Kebede",
    taxpayerIdNumber: "0060305461",
    dateOfIssuance: "05 TIKIMT 2017",
    businessType: "Agriculture",
    status: "Registered",
    email: "aster.k@example.com",
    phoneNumber: "0980987654",
    region: "Benishangul-Gumuz",
  },
  {
    id: "tp-005",
    fullName: "Yonas Getachew",
    taxpayerIdNumber: "0050294350",
    dateOfIssuance: "10 HIDAR 2018",
    businessType: "Construction",
    status: "Suspended",
    email: "yonas.g@example.com",
    phoneNumber: "0991098765",
    region: "Gambela",
  },
]

// export const allCertificates: Certificate[] = [
//   ...mockBusinessUsers.map((user) => ({
//     id: user.id,
//     type: "Business License",
//     name: user.ownerName,
//     identifier: user.licenseNumber,
//     issueDate: user.issueDate,
//     status: user.status,
//     region: user.region,
//   })),
//   ...mockTaxpayerUsers.map((user) => ({
//     id: user.id,
//     type: "Taxpayer Registration",
//     name: user.fullName,
//     identifier: user.taxpayerIdNumber,
//     issueDate: user.dateOfIssuance,
//     status: user.status,
//     region: user.region,
//   })),
// ]

export const mockForms: FormItem[] = [
  {
    id: "form-001",
    title: "Taxpayer Registration Form",
    description: "Form for new taxpayer registration and TIN application.",
    category: "Tax",
    fileUrl: "/forms/taxpayer-registration.pdf",
    version: "V2.1",
    lastUpdated: "2024-06-15",
  },
  {
    id: "form-002",
    title: "Business License Application",
    description: "Application form for new business licenses and renewals.",
    category: "Business",
    fileUrl: "/forms/business-license-application.pdf",
    version: "V1.5",
    lastUpdated: "2024-07-01",
  },
  {
    id: "form-003",
    title: "VAT Declaration Form",
    description: "Monthly Value Added Tax (VAT) declaration form.",
    category: "Tax",
    fileUrl: "/forms/vat-declaration.pdf",
    version: "V3.0",
    lastUpdated: "2024-07-20",
  },
  {
    id: "form-004",
    title: "Income Tax Return (Individual)",
    description: "Annual income tax return form for individual taxpayers.",
    category: "Tax",
    fileUrl: "/forms/income-tax-individual.pdf",
    version: "V2.0",
    lastUpdated: "2024-05-10",
  },
  {
    id: "form-005",
    title: "Business Name Reservation Form",
    description: "Form to reserve a business name before registration.",
    category: "Business",
    fileUrl: "/forms/business-name-reservation.pdf",
    version: "V1.0",
    lastUpdated: "2024-04-25",
  },
  {
    id: "form-006",
    title: "Complaint and Feedback Form",
    description: "Submit your complaints or provide feedback on our services.",
    category: "General",
    fileUrl: "/forms/complaint-feedback.pdf",
    version: "V1.2",
    lastUpdated: "2024-03-01",
  },
]

export const mockNewsEvents: NewsEventItem[] = [
  {
    id: "news-001",
    type: "News",
    title: "New Tax Policy on Digital Services Announced",
    date: "2025-07-28",
    summary:
      "The South Ethiopia Region Revenue Bureau has announced a new policy regarding the taxation of digital services, effective from August 1, 2025. This aims to broaden the tax base and ensure fairness in the digital economy.",
    content:
      "Detailed content about the new digital services tax policy, including its scope, implications for businesses, and implementation timeline. This policy is a significant step towards modernizing our tax system and adapting to the evolving digital landscape. We encourage all affected businesses to review the full guidelines available on our website.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "event-001",
    type: "Event",
    title: "Workshop on Business License Renewal Procedures",
    date: "2025-07-20",
    summary:
      "A successful workshop was held for local businesses on the updated procedures for business license renewal. The event saw high participation and provided valuable insights for compliance.",
    content:
      "The workshop covered various aspects of business license renewal, including new requirements, online submission processes, and common pitfalls to avoid. Participants had the opportunity to ask questions and receive direct guidance from our experts. We plan to host more such events in the future.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "news-002",
    type: "News",
    title: "Revenue Collection Exceeds Target for Q2 2025",
    date: "2025-07-10",
    summary:
      "The South Ethiopia Region Revenue Bureau is pleased to announce that revenue collection for the second quarter of 2025 has surpassed its targets, demonstrating strong economic activity and improved compliance.",
    content:
      "This achievement is a testament to the hard work of our staff and the increasing compliance of taxpayers. The collected revenue will be instrumental in funding various development projects across the region, contributing to overall prosperity.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "announcement-001",
    type: "Announcement",
    title: "Public Holiday Notice: Eid al-Adha",
    date: "2025-06-16",
    summary:
      "Our offices will be closed on June 16, 2025, in observance of Eid al-Adha. Normal operations will resume on June 17, 2025.",
    content:
      "Wishing all our Muslim citizens a blessed Eid al-Adha. Please plan your visits accordingly. For urgent matters, our online services remain available.",
  },
  {
    id: "event-002",
    type: "Event",
    title: "Taxpayer Education Seminar: Understanding Your Obligations",
    date: "2025-08-05",
    summary:
      "Join us for an upcoming seminar designed to help individual taxpayers understand their rights and obligations. Registration is now open!",
    content:
      "This seminar will cover topics such as tax filing procedures, common deductions, and how to avoid penalties. It's a great opportunity for new and existing taxpayers to clarify any doubts and ensure compliance. Limited seats available, register early!",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]



export const allCertificates: Certificate[] = [
  ...mockBusinessUsers.map((user) => ({
    id: user.id,
    type: "Business License" as const,
    name: user.ownerName,
    identifier: user.licenseNumber,
    issueDate: user.issueDate,
    status: user.status,
    region: user.region,
  })),
  ...mockTaxpayerUsers.map((user) => ({
    id: user.id,
    type: "Taxpayer Registration" as const,
    name: user.fullName,
    identifier: user.taxpayerIdNumber,
    issueDate: user.dateOfIssuance,
    status: user.status,
    region: user.region,
  })),
]
