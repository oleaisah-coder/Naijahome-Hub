import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="bg-blue-600 dark:bg-blue-700 py-24 text-center transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block mb-10 text-white/50">
          <Quote size={48} className="fill-current" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white leading-tight mb-12">
          "LUXURY DWELLING ESTATES AND PROPERTY is the easiest way to compare rentals or get official metrics. We use it internally inside our workflow constantly."
        </h2>

        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" 
              alt="Testimonial author" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
             <div className="text-white font-bold text-lg mb-0.5">Jane Doe</div>
             <div className="text-blue-200 font-medium text-sm">Real Estate Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
