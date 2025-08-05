"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Printer, ArrowLeft } from "lucide-react"
import { mockReceiptData, ReceiptData } from "@/lib/mock-data"


export default function ReceiptDisplayPage() {
  const router = useRouter()
  const [receipt, setReceipt] = useState<ReceiptData | null>(null)

  useEffect(() => {
    // Try to load from localStorage first
    const storedReceipt = localStorage.getItem("currentReceipt")
    if (storedReceipt) {
      setReceipt(JSON.parse(storedReceipt))
    } else {
      // Fallback to mock data if nothing in localStorage (for direct access/testing)
      setReceipt(mockReceiptData)
    }

    // Optionally clear localStorage after loading to prevent stale data on refresh
    // localStorage.removeItem("currentReceipt");
  }, [])

  const handlePrint = () => {
    window.print()
  }

  if (!receipt) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 text-center">
          <CardTitle>No Receipt Data Found</CardTitle>
          <CardContent className="mt-4">
            <p className="text-gray-600 mb-4">Please generate a receipt from the input form.</p>
            <Button onClick={() => router.push("/receipt-generator")}>Go to Generator</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8 print:bg-white">
      <div className="max-w-3xl mx-auto space-y-6 print:shadow-none print:border-none">
        {/* Action Bar (hidden in print) */}
        <div className="flex justify-between items-start mb-6 print:hidden">
          <Button
            variant="outline"
            onClick={() => router.push("/receipt-generator")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Generator
          </Button>
          <Button onClick={handlePrint} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
            <Printer className="h-5 w-5" /> Print Receipt
          </Button>
        </div>

        {/* Receipt Card */}
        <Card className="p-8 shadow-xl bg-white border-t-8 border-blue-700 print:border-gray-400 print:shadow-none">
          <CardHeader className="text-center mb-8">
             <p className="text-sm text-gray-600">TIN: 00101000945</p>
             <p className="text-lg font-semibold text-gray-800 font-italic  ">YEKA HOSPITAL A/A BOLE W.11 AROUND KOYE</p>
             <p className="text-sm text-gray-900">Tel. 0910100000</p>
             <p className="text-sm text-gray-900">01160100000</p>

            <div className="flex justify-between items-center mt-4 border-t border-b py-2 border-gray-200">
              <p className="text-sm font-medium text-gray-700">
                 <span className="font-semibold">{receipt.date}</span>
              </p>
              <p className="text-sm font-medium text-gray-700">
                <span className="my-2 p-3"> {receipt.time}</span>
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
           

            {/* Items Table */}
            <Table className="border border-gray-200 rounded-md">
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="text-gray-700 font-semibold">Product</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Type</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Qty</TableHead>
                  <TableHead className="text-gray-700 font-semibold text-right">Unit Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {receipt.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium text-gray-800">{item.productName}</TableCell>
                    <TableCell className="text-gray-600">{item.type}</TableCell>
                    <TableCell className="text-gray-600">{item.quantity}</TableCell>
                    <TableCell className="text-gray-600 text-right">ETB {item.price.toFixed(2)}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Totals */}
            <div className="space-y-2 text-lg font-medium text-gray-800 ml-auto w-full md:w-1/2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>ETB {receipt.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>TAX ({receipt.vatRate * 100}%):</span>
                <span>ETB {receipt.vatAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-blue-700 border-t-2 border-gray-300 pt-3 mt-3">
                <span>Total Amount:</span>
                <span>ETB {receipt.totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Footer Message */}
            <div className="text-center text-sm text-gray-500 mt-8 pt-4 border-t border-gray-200">
              <p>Thank you for your business!</p>
              <p>This is a computer generated receipt and does not require a signature.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
