import { CheckCircle } from 'lucide-react'

const features = [
  "Real-time collaboration",
  "Customizable workflows",
  "Advanced analytics",
  "Integrated time tracking",
  "Automated reporting",
  "Mobile app for on-the-go access"
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Powerful Features to Boost Your Productivity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <p className="text-lg text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

