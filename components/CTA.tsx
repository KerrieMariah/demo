import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-700">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Streamline Your Workflow?
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Join thousands of teams who have already transformed their project management.
        </p>
        <Button size="lg" variant="secondary">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}

