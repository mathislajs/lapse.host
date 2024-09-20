import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsTwitterX } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsOpencollective } from "react-icons/bs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col" style={{ backgroundImage: 'url("https://pouch.jumpshare.com/preview/6CMvo7F2hr560JIkYUxNowQFA6HKd8VD4-jZlQcg3tzW8T0iqwE2tHu-ZRR_1kssxKo1emypvWBvkBa8Al7qhvDown1K6_I10A2uPl00EPA")', backgroundSize: 'cover' }}>
      <header className="bg-black border-b border-gray-800">
        <nav className="flex justify-between items-center max-w-6xl mx-auto py-3 px-4">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">

              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect id="Rectangle 14" x="16.6777" y="-1" width="25" height="25" rx="2.5" transform="rotate(45 16.6777 -1)" fill="white"/>
</svg>
            </Link>
            <div className="mx-4"></div>
            <ul className="flex space-x-3 text-sm">
              <li><Link href="/pricing" className="hover:text-gray-300 transition-colors">Pricing</Link></li>
              <li><Link href="https://docs.lapse.host/integrations" className="hover:text-gray-300 transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4">
            <Link target="_blank" href="https://lapse.canny.io/">
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
            Fluidly store your<br />
            images with a{' '}
            <span className="inline-block bg-gradient-to-b from-green-400 to-green-900 px-2 rounded">fast</span> and{' '}
            <span className="inline-block bg-gradient-to-b from-blue-400 to-purple-900 px-2 rounded">
              swift
            </span>{' '}
            service.
          </h1>
          <p className="text-lg text-gray-400 mb-8 mx-auto max-w-2xl">
            lapse provides a high-quality image hosting platform for individuals, featuring a variety of integrations, including ShareX, as well as customizable sub/domains and additional options to enhance your experience.
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
            <svg width="123" height="51" viewBox="0 0 123 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="25.6777" y="8" width="25" height="25" rx="2.5" transform="rotate(45 25.6777 8)" fill="white"/>
<path d="M55.405 35.081V34.46L55.837 34.406C56.359 34.334 56.755 34.253 57.025 34.163C57.313 34.055 57.511 33.83 57.619 33.488C57.727 33.128 57.781 32.543 57.781 31.733V18.557C57.781 17.621 57.583 17.027 57.187 16.775C56.809 16.505 56.278 16.37 55.594 16.37H55.405V15.749C56.143 15.749 56.854 15.731 57.538 15.695C58.222 15.641 58.933 15.551 59.671 15.425V31.733C59.671 32.543 59.725 33.128 59.833 33.488C59.941 33.83 60.13 34.055 60.4 34.163C60.688 34.253 61.093 34.334 61.615 34.406L62.047 34.46V35.081L58.726 35L55.405 35.081ZM66.8089 35.297C65.9449 35.297 65.2249 35.081 64.6489 34.649C64.0909 34.199 63.8119 33.578 63.8119 32.786C63.8119 31.994 64.1629 31.292 64.8649 30.68C65.5669 30.05 66.3859 29.483 67.3219 28.979C68.0239 28.583 68.7259 28.241 69.4279 27.953C70.1299 27.665 70.7329 27.422 71.2369 27.224V26.36C71.2369 25.37 71.0479 24.632 70.6699 24.146C70.3099 23.66 69.6169 23.417 68.5909 23.417C68.1049 23.417 67.6279 23.48 67.1599 23.606C66.6919 23.732 66.4579 23.966 66.4579 24.308C66.4579 24.38 66.4669 24.461 66.4849 24.551C66.5209 24.641 66.5479 24.731 66.5659 24.821C66.6559 25.055 66.7009 25.298 66.7009 25.55C66.7009 25.892 66.5749 26.162 66.3229 26.36C66.0889 26.54 65.8009 26.63 65.4589 26.63C65.1349 26.63 64.8649 26.513 64.6489 26.279C64.4329 26.027 64.3249 25.73 64.3249 25.388C64.3249 24.74 64.5679 24.227 65.0539 23.849C65.5579 23.453 66.1699 23.174 66.8899 23.012C67.6099 22.832 68.3029 22.742 68.9689 22.742C70.4089 22.742 71.4619 23.075 72.1279 23.741C72.7939 24.407 73.1269 25.496 73.1269 27.008V31.868C73.1269 32.66 73.1809 33.272 73.2889 33.704C73.4149 34.136 73.6849 34.352 74.0989 34.352C74.3689 34.352 74.6029 34.253 74.8009 34.055C74.9989 33.857 75.1339 33.641 75.2059 33.407L75.6919 33.596C75.5479 34.118 75.2869 34.532 74.9089 34.838C74.5489 35.144 74.0449 35.297 73.3969 35.297C72.6049 35.297 72.0559 35.072 71.7499 34.622C71.4619 34.154 71.2999 33.542 71.2639 32.786C70.7599 33.596 70.1209 34.217 69.3469 34.649C68.5729 35.081 67.7269 35.297 66.8089 35.297ZM65.9179 32.651C65.9179 33.155 66.0619 33.56 66.3499 33.866C66.6559 34.154 67.0969 34.298 67.6729 34.298C68.1949 34.298 68.6899 34.172 69.1579 33.92C69.6439 33.668 70.0669 33.353 70.4269 32.975C70.7869 32.579 71.0569 32.156 71.2369 31.706V27.764C70.6429 28.016 70.0309 28.313 69.4009 28.655C68.7889 28.979 68.2129 29.348 67.6729 29.762C67.1509 30.176 66.7279 30.626 66.4039 31.112C66.0799 31.58 65.9179 32.093 65.9179 32.651ZM76.1842 42.641V42.02L76.6162 41.966C77.1382 41.894 77.5342 41.804 77.8042 41.696C78.0922 41.606 78.2902 41.381 78.3982 41.021C78.5062 40.679 78.5602 40.103 78.5602 39.293V25.955C78.5602 25.307 78.4612 24.839 78.2632 24.551C78.0832 24.245 77.8132 24.056 77.4532 23.984C77.0932 23.894 76.6702 23.849 76.1842 23.849V23.228C76.9222 23.228 77.6332 23.192 78.3172 23.12C79.0012 23.048 79.7122 22.949 80.4502 22.823L80.2612 24.659C80.7652 24.083 81.3412 23.624 81.9892 23.282C82.6552 22.922 83.3932 22.742 84.2032 22.742C85.2472 22.742 86.1742 23.021 86.9842 23.579C87.8122 24.137 88.4692 24.893 88.9552 25.847C89.4412 26.801 89.6842 27.872 89.6842 29.06C89.6842 30.212 89.4412 31.265 88.9552 32.219C88.4692 33.155 87.8032 33.902 86.9572 34.46C86.1292 35.018 85.1752 35.297 84.0952 35.297C83.3392 35.297 82.6462 35.144 82.0162 34.838C81.3862 34.514 80.8642 34.154 80.4502 33.758V39.293C80.4502 40.103 80.5042 40.679 80.6122 41.021C80.7202 41.381 80.9092 41.606 81.1792 41.696C81.4672 41.804 81.8722 41.894 82.3942 41.966L82.8262 42.02V42.641L79.5052 42.56L76.1842 42.641ZM83.8792 23.552C83.1412 23.552 82.4842 23.732 81.9082 24.092C81.3502 24.434 80.8642 24.857 80.4502 25.361V32.651C80.7562 33.119 81.2152 33.542 81.8272 33.92C82.4392 34.298 83.1142 34.487 83.8522 34.487C84.6802 34.487 85.3642 34.253 85.9042 33.785C86.4442 33.299 86.8492 32.651 87.1192 31.841C87.3892 31.013 87.5242 30.086 87.5242 29.06C87.5242 28.016 87.3892 27.08 87.1192 26.252C86.8492 25.424 86.4442 24.767 85.9042 24.281C85.3822 23.795 84.7072 23.552 83.8792 23.552ZM96.6361 35.297C95.9521 35.297 95.3671 35.216 94.8811 35.054C94.4131 34.91 94.0441 34.775 93.7741 34.649C93.4861 34.505 93.3061 34.433 93.2341 34.433C93.1621 34.433 93.0991 34.469 93.0451 34.541C93.0091 34.595 92.9641 34.748 92.9101 35H92.2891L92.3971 33.218L92.4781 30.923H93.0721L93.0991 31.382C93.1351 31.886 93.2971 32.39 93.5851 32.894C93.8911 33.398 94.3051 33.821 94.8271 34.163C95.3491 34.505 95.9521 34.676 96.6361 34.676C97.3741 34.676 97.9681 34.487 98.4181 34.109C98.8681 33.731 99.0931 33.209 99.0931 32.543C99.0931 31.967 98.8591 31.481 98.3911 31.085C97.9411 30.689 97.3111 30.338 96.5011 30.032L95.5291 29.654C94.5931 29.294 93.8821 28.844 93.3961 28.304C92.9281 27.764 92.6941 27.071 92.6941 26.225C92.6941 25.505 92.8561 24.893 93.1801 24.389C93.5221 23.867 93.9631 23.462 94.5031 23.174C95.0611 22.886 95.6551 22.742 96.2851 22.742C96.7351 22.742 97.1131 22.796 97.4191 22.904C97.7431 23.012 98.0131 23.12 98.2291 23.228C98.4091 23.318 98.5621 23.363 98.6881 23.363C98.8681 23.363 99.0121 23.174 99.1201 22.796L99.7141 22.823L99.6061 24.578V26.468H98.9851C98.8591 25.622 98.5711 24.893 98.1211 24.281C97.6711 23.651 97.0231 23.336 96.1771 23.336C95.5831 23.336 95.0791 23.525 94.6651 23.903C94.2691 24.281 94.0711 24.758 94.0711 25.334C94.0711 25.892 94.2781 26.36 94.6921 26.738C95.1241 27.098 95.7091 27.422 96.4471 27.71L97.5001 28.115C98.5981 28.529 99.3541 29.033 99.7681 29.627C100.2 30.203 100.416 30.896 100.416 31.706C100.416 32.66 100.092 33.497 99.4441 34.217C98.7961 34.937 97.8601 35.297 96.6361 35.297ZM108.64 35.297C107.452 35.297 106.417 35.045 105.535 34.541C104.653 34.019 103.96 33.308 103.456 32.408C102.97 31.49 102.727 30.446 102.727 29.276C102.727 28.016 102.997 26.9 103.537 25.928C104.077 24.938 104.797 24.164 105.697 23.606C106.615 23.03 107.623 22.742 108.721 22.742C110.107 22.742 111.187 23.183 111.961 24.065C112.753 24.947 113.149 26.108 113.149 27.548C113.149 27.764 113.14 27.944 113.122 28.088C113.104 28.232 113.086 28.331 113.068 28.385H104.914C104.896 28.637 104.887 28.889 104.887 29.141C104.887 30.095 105.04 30.986 105.346 31.814C105.652 32.624 106.111 33.272 106.723 33.758C107.353 34.244 108.118 34.487 109.018 34.487C109.864 34.487 110.611 34.253 111.259 33.785C111.925 33.299 112.438 32.588 112.798 31.652L113.446 31.895C112.69 34.163 111.088 35.297 108.64 35.297ZM108.721 23.417C107.605 23.417 106.732 23.813 106.102 24.605C105.49 25.397 105.112 26.45 104.968 27.764H108.397C109.207 27.764 109.819 27.674 110.233 27.494C110.665 27.296 110.953 27.062 111.097 26.792C111.259 26.504 111.34 26.225 111.34 25.955C111.34 25.163 111.07 24.542 110.53 24.092C109.99 23.642 109.387 23.417 108.721 23.417Z" fill="white"/>
</svg>
            </Link>
          </div>
          <div className="flex justify-center space-x-3 mb-4">
          <Link target="_blank" href="/status" className="text-gray-400 hover:text-gray-300">Status</Link>
          <span className="text-gray-700">•</span>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-300">Privacy Policy</Link>
            <span className="text-gray-700">•</span>
            <Link href="#" className="text-gray-400 hover:text-gray-300">Terms</Link>
            <span className="text-gray-700">•</span>
            <Link target="_blank" href="#" className="text-gray-400 hover:text-gray-300">Security</Link>
          </div>
          <div className="flex justify-center space-x-3 mb-4">
          <Link href="/status" className="text-gray-400 hover:text-gray-300">email@lapse.host</Link>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <Link target="_blank" href="https://x.com/lapsehost" className="text-gray-400 hover:text-gray-300">
              <BsDiscord className="w-5 h-5" />
            </Link>
            <Link target="_blank" href="https://x.com/lapsehost" className="text-gray-400 hover:text-gray-300">
              <BsTwitterX className="w-5 h-5" />
            </Link>
            <Link target="_blank" href="https://github.com/lapsehost" className="text-gray-400 hover:text-gray-300">
              <BsGithub className="w-5 h-5" />
            </Link>
            <Link target="_blank" href="https://x.com/lapsehost" className="text-gray-400 hover:text-gray-300">
              <BsLinkedin className="w-5 h-5" />
            </Link>
            <Link target="_blank" href="https://opencollective.com/lapse" className="text-gray-400 hover:text-gray-300">
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