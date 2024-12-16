import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-indigo-400">Features</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Pricing</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Integrations</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Changelog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-indigo-400">Documentation</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Tutorials</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Blog</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Support</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-indigo-400">About</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Careers</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Press</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-indigo-400">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Cookie Policy</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">GDPR Compliance</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; {new Date().getFullYear()} Streamline. All rights reserved.</p>
      </div>
    </footer>
  )
}

