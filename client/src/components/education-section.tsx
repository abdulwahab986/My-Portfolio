import { Building, GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">Academic background and qualifications</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* BS Software Engineering */}
          <div className="section-card animate-slide-in-left" data-testid="education-bs-software-engineering">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">BS Software Engineering</h3>
                <p className="text-primary font-semibold">Sindh Madressatul Islam University</p>
                <p className="text-muted-foreground text-sm">2021 - 2025</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Comprehensive education in software development, quality assurance, and modern engineering practices.
            </p>
          </div>
          
          {/* Intermediate */}
          <div className="section-card animate-slide-in-right" data-testid="education-intermediate-cs">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Intermediate in Computer Science</h3>
                <p className="text-secondary font-semibold">E-Complex College</p>
                <p className="text-muted-foreground text-sm">2019 - 2021</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Foundation in computer science fundamentals, programming, and information technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
