import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col">
      <header className="bg-black border-b border-gray-800">
        <nav className="flex justify-between items-center max-w-6xl mx-auto py-3 px-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-white rotate-45"></div>
            <span className="text-lg font-semibold">lapse</span>
          </div>
          <ul className="flex space-x-6 text-sm">
            <li><Link href="#" className="hover:text-gray-300 transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-gray-300 transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-gray-300 transition-colors">Features</Link></li>
            <li><Link href="#" className="hover:text-gray-300 transition-colors">About</Link></li>
          </ul>
          <Button variant="ghost" size="sm" className="text-white hover:text-gray-300 hover:bg-transparent">
            Login
          </Button>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Effortlessly store your<br />
            images with a{' '}
            <span className="inline-block bg-green-500 px-2 rounded">reliable</span> and{' '}
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 px-2 rounded">
              swift
            </span>{' '}
            service.
          </h1>
          <p className="text-lg text-gray-400 mb-8 mx-auto max-w-2xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Get Started
          </Button>
        </div>
      </main>
      <footer className="bg-black py-6 mt-auto border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            
            <div className="w-5 h-5 bg-white rotate-45"></div>
            <span className="text-lg font-semibold">lapse</span>
          </div>
          <div className="flex justify-center space-x-3 mb-4">
          <Link href="/status" className="text-gray-400 hover:text-gray-300">Status</Link>
          <span className="text-gray-700">•</span>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-300">Privacy Policy</Link>
            <span className="text-gray-700">•</span>
            <Link href="#" className="text-gray-400 hover:text-gray-300">Terms of Service</Link>
            <span className="text-gray-700">•</span>
            <Link href="#" className="text-gray-400 hover:text-gray-300">Security & Compliances</Link>
            <span className="text-gray-700">•</span>
            <Link href="#" className="text-gray-400 hover:text-gray-300">Contact</Link>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="https://facebook.com" className="text-gray-400 hover:text-gray-300">Facebook</Link>
            <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-300">Twitter</Link>
          </div>
          <p className="text-sm text-gray-400">
            Shipped with ❤️ from 🇨🇦
          </p>
        </div>
      </footer>
    </div>
  )
}
