import Link from "next/link"
import { Facebook, Twitter, Youtube, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Accountable Institutions</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Custom Commission
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Federal Revenue Bureau
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Partners</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Prime Minister Office
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Ministry of Finance
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Investment Commission
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Address</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Email: info.serb@example.com
            </p>
            <p className="flex items-center gap-2">
              <span className="font-bold">✆</span> Phone: +251 912 345 678
            </p>
            <p>P.O. Box: 1234 Addis Ababa, Ethiopia</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-blue-300">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-white hover:text-blue-300">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-white hover:text-blue-300">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-blue-200 border-t border-blue-700 pt-6">
        <p>&copy; {new Date().getFullYear()} South Ethiopia Region Revenue Bureau. All rights reserved.</p>
      </div>
    </footer>
  )
}
