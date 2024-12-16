import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Streamline
        </Link>
        <nav className="hidden md:flex space-x-10">
          <Link href="#features" className="text-gray-500 hover:text-gray-900">Features</Link>
          <Link href="#pricing" className="text-gray-500 hover:text-gray-900">Pricing</Link>
          <Link href="#testimonials" className="text-gray-500 hover:text-gray-900">Testimonials</Link>
          <Link href="#faq" className="text-gray-500 hover:text-gray-900">FAQ</Link>
        </nav>
        <div className="flex items-center">
          <Button variant="ghost" className="text-gray-500 hover:text-gray-900 mr-4">
            Log in
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  )
}

