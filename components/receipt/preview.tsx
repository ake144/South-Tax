"use client"

import { Button } from "@/components/ui/button"
import { ReceiptData } from "@/lib/mock-data"
import { Printer } from "lucide-react"


interface ReceiptPreviewProps {
  receipt: ReceiptData
}

export default function ReceiptPreview({ receipt }: ReceiptPreviewProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="w-[300px] mx-auto bg-white p-4 shadow-lg font-mono  font-stretch-95%  text-xs leading-tight print:shadow-none print:border-none print:w-[280px] print:p-2">
      {/* Header */}
      <div className="text-center mb-4">
        <p className="text-sm  mb-1">TIN: {receipt.tin}</p>
        <p className="text-sm font-bold mb-1">{receipt.customerName || receipt.businessName}</p>
        <p className="mb-1">{receipt.businessName}</p>
        <p className="mb-1">{receipt.businessAddress}</p>
        <p className="mb-1">{receipt.businessPhone}</p>
      </div>

      <div className="flex justify-between border-t border-b border-dashed border-gray-400 py-2 mb-4">
        <span>{receipt.date.split(",")}</span>
        <span>{receipt.time}</span>
      </div>

      <div className="mb-4">
        <p className="font-bold mb-1">
          # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
        </p>
        <p className="font-bold mb-1"># # # CASH Sales Invoice # # #</p>
        {receipt.invoiceReference && <p className="mb-1">Reference: {receipt.invoiceReference}</p>}
        {receipt.fsNo && <p className="mb-1">FS No. {receipt.fsNo}</p>}
        {receipt.preparedBy && <p className="mb-1">Prepared by: {receipt.preparedBy}</p>}
        {receipt.cashierName && <p className="mb-1">To: {receipt.cashierName}</p>}
        {/* {receipt.waiterName && <p className="mb-1">Waiter: {receipt.waiterName}</p>} */}
        <p className="font-bold mt-1">
          # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
        </p>
      </div>

      {/* Items */}
      <div className="mb-4">
        {receipt.items.map((item) => (
          <div key={item.id} className="flex justify-between mb-1">
            <span className="flex-1">{item.productName}</span>
            <span className="w-1/4 text-right">
              {item.quantity.toFixed(3)} x {item.price.toFixed(2)}
            </span>
            <span className="w-1/4 text-right">*{item.lineTotal.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="border-t border-dashed border-gray-400 pt-2 mb-4">
        <div className="flex justify-between mb-1">
          <span>SUBTOTAL</span>
          <span className="font-bold">ETB {receipt.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>VAT {receipt.vatRate * 100}%</span>
          <span className="font-bold">ETB {receipt.vatAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm font-bold border-t border-dashed border-gray-400 pt-2 mt-2">
          <span>TOTAL</span>
          <span>ETB {receipt.totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between mb-1">
        <span>CASH</span>
        <span>ETB {receipt.totalAmount.toFixed(2)}</span> {/* Assuming cash paid equals total */}
      </div>
      <div className="flex justify-between mb-4">
        <span>ITEM#</span>
        <span>{receipt.items.length}</span>
      </div>

      {/* Footer */}
      <div className="text-center border-t border-dashed border-gray-400 pt-4">
        <p className="font-bold mb-1">Powered By SRE</p>
        {receipt.ercaClb && <p className="mb-1">{receipt.ercaClb}</p>}
        <p className="mt-4 text-[0.6rem]">Thank you for your business!</p>
      </div>

      {/* Print Button (hidden in print view) */}
      {/* <div className="mt-6 text-center print:hidden">
        <Button
          onClick={handlePrint}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
        >
          <Printer className="h-4 w-4" /> Print Receipt
        </Button>
      </div> */}
    </div>
  )
}
