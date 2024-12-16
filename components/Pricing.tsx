import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["5 team members", "10 projects", "5GB storage", "Basic support"]
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited team members", "Unlimited projects", "100GB storage", "Priority support", "Advanced analytics"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited everything", "24/7 premium support", "Custom integrations", "Dedicated account manager"]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose the Perfect Plan for Your Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-8 shadow-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-lg font-normal text-gray-600">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-3">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

