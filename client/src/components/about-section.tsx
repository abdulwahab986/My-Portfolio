import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 hover-lift" data-testid="about-summary-card">
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Innovative and detail-oriented Software Engineer with 1 year of experience as a Software Quality Assurance (SQA) Engineer. Skilled in manual testing, UI/UX design, Agile methodologies, and ensuring software quality. Passionate about problem-solving and enhancing user experiences, with a strong drive to deliver impactful and user-centric solutions across diverse industries.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Quality Assurance Expertise</h4>
                  <p className="text-muted-foreground text-sm">Experienced in comprehensive testing methodologies including Regression, Sanity, Smoke, and Functional testing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Agile & Collaborative</h4>
                  <p className="text-muted-foreground text-sm">Strong team player with experience in Agile methodologies and cross-functional collaboration</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Project Management</h4>
                  <p className="text-muted-foreground text-sm">Demonstrated leadership as project manager for 4 months, managing team tasks and timelines</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 hover-lift" data-testid="contact-email-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">abdulwahabstd@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 hover-lift" data-testid="contact-phone-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">0334-2974042</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 hover-lift" data-testid="contact-location-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
