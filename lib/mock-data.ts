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
