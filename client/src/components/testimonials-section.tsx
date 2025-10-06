import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Senior QA Manager",
      company: "Innovador Solutions",
      feedback: "Abdul Wahab demonstrated exceptional attention to detail during his time with us. His thorough approach to regression testing and ability to identify edge cases significantly improved our product quality. A dedicated professional with strong testing fundamentals.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Michael Chen",
      role: "Lead Software Engineer",
      company: "Tech Innovations",
      feedback: "Working with Abdul was a great experience. His systematic approach to functional testing and clear bug documentation made the development process smoother. He has a strong understanding of QA methodologies and consistently delivered quality work.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Fatima Khan",
      role: "Product Owner",
      company: "Digital Solutions Ltd",
      feedback: "Abdul's expertise in manual testing and UI/UX validation helped us deliver a polished product. His communication skills and ability to work in an Agile environment made him a valuable team member. Highly recommend his QA services.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-testimonials-heading">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-testimonials-subheading">
            What people say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl p-8 hover-lift relative"
              data-testid={`testimonial-${index}`}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  data-testid={`testimonial-image-${index}`}
                />
                <div>
                  <h3 className="font-bold text-lg" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-primary font-medium" data-testid={`testimonial-role-${index}`}>
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`testimonial-company-${index}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed" data-testid={`testimonial-feedback-${index}`}>
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
