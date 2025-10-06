import { Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume/download');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Abdul_Wahab_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download resume');
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Available for Opportunities</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Abdul Wahab</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Software Engineer & SQA Specialist
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Innovative and detail-oriented Software Engineer with <span className="text-primary font-semibold">1 year of experience</span> as a Software Quality Assurance (SQA) Engineer at <span className="text-secondary font-semibold">Innovador Solutions</span>. Passionate about ensuring software quality and delivering impactful user-centric solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:abdulwahabstd@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
                data-testid="button-contact"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={handleDownloadResume}
                className="px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors inline-flex items-center space-x-2"
                data-testid="button-download-resume"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-6 pt-6">
              <a 
                href="https://www.linkedin.com/in/abdul-wahab-69981921b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                data-testid="hero-linkedin-link"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:abdulwahabstd@gmail.com"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                data-testid="hero-email-link"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a 
                href="tel:+923342974042"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                data-testid="hero-phone-link"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src="/attached_assets/My Real_1759776822885.jpg" 
                alt="Abdul Wahab - Professional headshot" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
                data-testid="hero-profile-image"
              />
            </div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
