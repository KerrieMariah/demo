import Image from 'next/image'

const testimonials = [
  {
    quote: "Streamline has revolutionized how we manage our projects. It's intuitive, powerful, and has significantly boosted our team's productivity.",
    author: "Jane Doe",
    title: "CEO, TechCorp"
  },
  {
    quote: "The customizable workflows in Streamline have allowed us to adapt the tool to our unique processes. It's been a game-changer for our organization.",
    author: "John Smith",
    title: "Project Manager, InnovateCo"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={`/placeholder.svg?height=50&width=50&text=${testimonial.author[0]}`}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

