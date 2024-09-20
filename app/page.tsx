import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsTwitterX } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsOpencollective } from "react-icons/bs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col">
      <header className="bg-black border-b border-gray-800">
        <nav className="flex justify-between items-center max-w-6xl mx-auto py-3 px-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-white rotate-45"></div>
              <span className="text-lg font-semibold">lapse</span>
            </Link>
            <div className="mx-4"></div>
            <ul className="flex space-x-3 text-sm">
              <li><Link href="/pricing" className="hover:text-gray-300 transition-colors">Pricing</Link></li>
              <li><Link href="https://docs.lapse.host/integrations" className="hover:text-gray-300 transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="https://lapse.canny.io/">
              <Button size="sm" className="bg-black text-white hover:bg-gray-900 border border-gray-800">
                Feedback
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="bg-white text-black hover:bg-gray-200 border border-gray-500">
                Login
              </Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Effortlessly store your<br />
            images with a{' '}
            <span className="inline-block bg-gradient-to-b from-green-400 to-green-900 px-2 rounded">reliable</span> and{' '}
            <span className="inline-block bg-gradient-to-b from-blue-400 to-purple-900 px-2 rounded">
              swift
            </span>{' '}
            service.
          </h1>
          <p className="text-lg text-gray-400 mb-8 mx-auto max-w-2xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, free 10 GB per user.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-black font-bold hover:bg-gray-200 border border-gray-500">
              Get Started
              <svg className="inline-block w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6" />
              </svg>
            </Button>
          </Link>
          <Link href="https://docs.lapse.host">
            <Button size="lg" className="bg-black text-white font-bold hover:bg-gray-900 border border-gray-800 ml-4">
              Features
            </Button>
          </Link>
        </div>
      </main>
      <footer className="bg-black py-6 mt-auto border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-white rotate-45"></div>
              <span className="text-lg font-semibold">lapse</span>
            </Link>
          </div>
          <div className="flex justify-center space-x-3 mb-4">
          <Link href="/status" className="text-gray-400 hover:text-gray-300">Status</Link>
          <span className="text-gray-700">•</span>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-300">Privacy Policy</Link>
            <span className="text-gray-700">•</span>
            <Link href="#" className="text-gray-400 hover:text-gray-300">Terms</Link>
            <span className="text-gray-700">•</span>
            <Link href="#" className="text-gray-400 hover:text-gray-300">Security</Link>
          </div>
          <div className="flex justify-center space-x-3 mb-4">
          <Link href="/status" className="text-gray-400 hover:text-gray-300">email@lapse.host</Link>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="https://x.com/lapsehost" className="text-gray-400 hover:text-gray-300">
              <BsDiscord className="w-5 h-5" />
            </Link>
            <Link href="https://x.com/lapsehost" className="text-gray-400 hover:text-gray-300">
              <BsTwitterX className="w-5 h-5" />
            </Link>
            <Link href="https://github.com/lapsehost" className="text-gray-400 hover:text-gray-300">
              <BsGithub className="w-5 h-5" />
            </Link>
            <Link href="https://x.com/lapsehost" className="text-gray-400 hover:text-gray-300">
              <BsLinkedin className="w-5 h-5" />
            </Link>
            <Link href="https://opencollective.com/lapse" className="text-gray-400 hover:text-gray-300">
              <BsOpencollective className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            Shipped with ❤️ from 🇨🇦
          </p>
        </div>
      </footer>
    </div>
  )
}
