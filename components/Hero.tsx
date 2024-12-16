import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 z-10 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-in-left">
            Streamline Your Workflow
          </h1>
          <p className="text-xl text-gray-100 mb-10 leading-relaxed animate-slide-in-left [animation-delay:200ms]">
            Boost productivity and collaboration with our intuitive project management tool. Experience seamless team coordination like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left [animation-delay:400ms]">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 hover:scale-105 transition-transform">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-2 border-white text-white hover:bg-white hover:text-purple-600 hover:scale-105 transition-transform">
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative animate-fade-in-up [animation-delay:600ms]">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl opacity-30 animate-pulse" />
          <svg
            width="600"
            height="400"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-xl shadow-2xl relative transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm bg-white/10 animate-float"
          >
            {/* Background Grid */}
            <rect width="600" height="400" fill="#ffffff0f">
              <animate
                attributeName="opacity"
                values="0.1;0.15;0.1"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
            <path d="M0 20 H600 M0 60 H600 M0 100 H600 M0 140 H600 M0 180 H600 M0 220 H600 M0 260 H600 M0 300 H600 M0 340 H600 M0 380 H600" 
              stroke="#ffffff15" strokeWidth="1">
              <animate
                attributeName="stroke-opacity"
                values="0.1;0.2;0.1"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M20 0 V400 M60 0 V400 M100 0 V400 M140 0 V400 M180 0 V400 M220 0 V400 M260 0 V400 M300 0 V400 M340 0 V400 M380 0 V400 M420 0 V400 M460 0 V400 M500 0 V400 M540 0 V400 M580 0 V400" 
              stroke="#ffffff15" strokeWidth="1">
              <animate
                attributeName="stroke-opacity"
                values="0.1;0.2;0.1"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>

            {/* Dashboard Elements */}
            <rect x="40" y="40" width="240" height="140" rx="8" fill="#ffffff20">
              <animate
                attributeName="opacity"
                values="0.2;0.3;0.2"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="60" y="60" width="200" height="16" rx="4" fill="#ffffff40" />
            <rect x="60" y="90" width="180" height="70" rx="4" fill="#ffffff30" />

            <rect x="300" y="40" width="260" height="140" rx="8" fill="#ffffff20" />
            <path d="M320 120 L360 90 L400 130 L440 70 L480 110 L520 80" 
              stroke="#fff" strokeWidth="2" fill="none">
              <animate
                attributeName="stroke-dashoffset"
                values="1000;0"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,1000"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>

            <rect x="40" y="200" width="520" height="160" rx="8" fill="#ffffff20">
              <animate
                attributeName="opacity"
                values="0.2;0.3;0.2"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="60" y="220" width="480" height="16" rx="4" fill="#ffffff40" />
            <rect x="60" y="250" width="140" height="90" rx="4" fill="#ffffff30" />
            <rect x="220" y="250" width="140" height="90" rx="4" fill="#ffffff30" />
            <rect x="380" y="250" width="140" height="90" rx="4" fill="#ffffff30" />

            {/* Animated Elements */}
            <circle cx="440" cy="100" r="4" fill="#fff">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="4;5;4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="400" cy="130" r="4" fill="#fff">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="4;5;4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/10 to-transparent" />
    </section>
  )
}
