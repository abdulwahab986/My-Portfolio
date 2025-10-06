import { Download, Mail, Linkedin, Phone, ArrowRight } from "lucide-react";
import profileImage from "@assets/My Real_1759776822885.jpg";

export default function HeroCentered() {
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
    <section className="center-stage max-w-[1600px] mx-auto">
      {/* Left Side - About & Experience */}
      <div className="space-y-6 animate-slide-in-left lg:pr-8" style={{gridArea: 'left'}}>
        {/* About Card */}
        <div className="section-card" data-testid="about-card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Innovative and detail-oriented Software Engineer with <span className="text-primary font-semibold">1 year of experience</span> as a Software Quality Assurance (SQA) Engineer at <span className="text-secondary font-semibold">Innovador Solutions</span>. Passionate about ensuring software quality and delivering impactful user-centric solutions.
          </p>
        </div>

        {/* Experience Quick Card */}
        <div className="section-card" data-testid="experience-card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">Junior SQA Engineer</h3>
              <p className="text-primary font-medium">Innovador Solutions</p>
              <p className="text-sm text-muted-foreground">Nov 2024 – Jun 2025</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Manual Testing</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Regression</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Functional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center - Profile Hub */}
      <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in lg:px-12" style={{gridArea: 'center'}}>
        {/* Profile Picture with Glow */}
        <div className="profile-glow">
          <div className="relative">
            <img 
              src={profileImage}
              alt="Abdul Wahab - Professional headshot"
              className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
              data-testid="hero-profile-image"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center space-y-3">
          <div className="inline-block px-4 py-2 glass-card rounded-full text-sm font-medium mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for Opportunities</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Abdul Wahab</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">
            Software Engineer & SQA Specialist
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="mailto:abdulwahabstd@gmail.com"
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg"
            data-testid="button-contact"
          >
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
          </a>
          <button 
            onClick={handleDownloadResume}
            className="px-6 py-3 glass-card text-foreground rounded-xl font-semibold hover:bg-muted/50 transition-all hover:scale-105 inline-flex items-center justify-center space-x-2"
            data-testid="button-download-resume"
          >
            <Download className="w-5 h-5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/abdul-wahab-69981921b"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
            data-testid="hero-linkedin-link"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:abdulwahabstd@gmail.com"
            className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
            data-testid="hero-email-link"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="tel:+923342974042"
            className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
            data-testid="hero-phone-link"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Right Side - Skills & Projects */}
      <div className="space-y-6 animate-slide-in-right lg:pl-8" style={{gridArea: 'right'}}>
        {/* Skills Card */}
        <div className="section-card" data-testid="skills-card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Core Skills</h2>
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm mb-2">Testing Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">Manual Testing</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-xs font-medium">Regression</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-xs font-medium">Functional</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">Smoke Testing</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2">Tools & Tech</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-xs font-medium">Google Sheets</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-xs font-medium">Git</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">Slack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Quick Card */}
        <div className="section-card" data-testid="projects-card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Featured Work</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <h3 className="font-bold">OSqaure</h3>
              <p className="text-sm text-muted-foreground">Web & Desktop Testing</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <h3 className="font-bold">SoulWhispers</h3>
              <p className="text-sm text-muted-foreground">Social Platform QA</p>
            </div>
            <a 
              href="#projects"
              className="block text-center text-primary font-medium hover:text-secondary transition-colors mt-3"
            >
              View All Projects <ArrowRight className="inline w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
