import { Download, Mail, Linkedin, Phone, Sun, Moon, Briefcase, Code, GraduationCap, FolderOpen } from "lucide-react";
import profileImage from "@assets/My Real_1759776822885.jpg";
import { useTheme } from "@/hooks/use-theme";

export default function HeroWithTabs() {
  const { theme, toggleTheme } = useTheme();

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
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      {/* Side Info - Name, Contact, Theme */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-start space-y-6">
        <div className="glass-card px-4 py-6 space-y-4">
          <h3 className="text-lg font-bold gradient-text writing-vertical-rl transform rotate-180">Abdul Wahab</h3>
        </div>
        
        <div className="glass-card p-3 flex flex-col space-y-3">
          <a 
            href="mailto:abdulwahabstd@gmail.com"
            className="hover:text-primary transition-colors"
            data-testid="link-email-side"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/abdul-wahab-69981921b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            data-testid="link-linkedin-side"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="tel:+923122647754"
            className="hover:text-primary transition-colors"
            data-testid="link-phone-side"
            title="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={toggleTheme}
          className="glass-card p-3 hover:bg-muted/50 transition-all"
          data-testid="button-theme-toggle-side"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Content - Center with Tabs Around */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="relative flex items-center justify-center">
          {/* Grid Container for Tabs - Desktop: 3x3 grid, Mobile: Stacked */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-6 w-full max-w-3xl">
            
            {/* Top Left - Experience Tab */}
            <button
              onClick={() => scrollToSection('experience')}
              className="section-card hover:scale-105 transition-all cursor-pointer p-6 flex flex-col items-center space-y-3 group animate-slide-from-left"
              data-testid="tab-experience"
              style={{animationDelay: '0.8s'}}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg transition-all">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Experience</h3>
              <p className="text-xs text-muted-foreground text-center">1 year at Innovador</p>
            </button>

            {/* Top Center - Empty */}
            <div></div>

            {/* Top Right - Projects Tab */}
            <button
              onClick={() => scrollToSection('projects')}
              className="section-card hover:scale-105 transition-all cursor-pointer p-6 flex flex-col items-center space-y-3 group animate-slide-from-right"
              data-testid="tab-projects"
              style={{animationDelay: '0.8s'}}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:shadow-lg transition-all">
                <FolderOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Projects</h3>
              <p className="text-xs text-muted-foreground text-center">Testing portfolio</p>
            </button>

            {/* Middle Left - Empty */}
            <div></div>

            {/* Center - Profile Picture */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* Helicopter Rotor */}
              <div className="helicopter-rotor"></div>
              
              <div className="profile-glow animate-fly-in">
                <img 
                  src={profileImage}
                  alt="Abdul Wahab"
                  className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                  data-testid="hero-profile-image"
                />
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <h1 className="text-2xl md:text-3xl font-bold gradient-text">Abdul Wahab</h1>
                <p className="text-base font-semibold text-foreground">Software Engineer</p>
                <p className="text-sm text-muted-foreground">Specialist In SQA</p>
              </div>
              <button 
                onClick={handleDownloadResume}
                className="px-4 py-2 glass-card text-sm font-semibold hover:bg-muted/50 transition-all inline-flex items-center space-x-2"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Middle Right - Empty */}
            <div></div>

            {/* Bottom Left - Skills Tab */}
            <button
              onClick={() => scrollToSection('skills')}
              className="section-card hover:scale-105 transition-all cursor-pointer p-6 flex flex-col items-center space-y-3 group animate-slide-from-left"
              data-testid="tab-skills"
              style={{animationDelay: '1s'}}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:shadow-lg transition-all">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Skills</h3>
              <p className="text-xs text-muted-foreground text-center">Testing expertise</p>
            </button>

            {/* Bottom Center - Empty */}
            <div></div>

            {/* Bottom Right - Education Tab */}
            <button
              onClick={() => scrollToSection('education')}
              className="section-card hover:scale-105 transition-all cursor-pointer p-6 flex flex-col items-center space-y-3 group animate-slide-from-right"
              data-testid="tab-education"
              style={{animationDelay: '1s'}}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center group-hover:shadow-lg transition-all">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Education</h3>
              <p className="text-xs text-muted-foreground text-center">BS Software Eng.</p>
            </button>
          </div>

          {/* Mobile Layout - Stacked vertically */}
          <div className="lg:hidden flex flex-col items-center space-y-6 w-full max-w-md px-4">
            {/* Profile Picture */}
            <div className="flex flex-col items-center justify-center space-y-4 animate-fade-in order-1">
              <div className="profile-glow">
                <img 
                  src={profileImage}
                  alt="Abdul Wahab"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                  data-testid="hero-profile-image-mobile"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold gradient-text">Abdul Wahab</h1>
                <p className="text-sm text-muted-foreground">SQA Engineer</p>
              </div>
              <button 
                onClick={handleDownloadResume}
                className="px-4 py-2 glass-card text-sm font-semibold hover:bg-muted/50 transition-all inline-flex items-center space-x-2"
                data-testid="button-download-resume-mobile"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Tabs Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-4 w-full order-2">
              <button
                onClick={() => scrollToSection('experience')}
                className="section-card hover:scale-105 transition-all cursor-pointer p-4 flex flex-col items-center space-y-2 group"
                data-testid="tab-experience-mobile"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg transition-all">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold">Experience</h3>
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="section-card hover:scale-105 transition-all cursor-pointer p-4 flex flex-col items-center space-y-2 group"
                data-testid="tab-projects-mobile"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:shadow-lg transition-all">
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold">Projects</h3>
              </button>

              <button
                onClick={() => scrollToSection('skills')}
                className="section-card hover:scale-105 transition-all cursor-pointer p-4 flex flex-col items-center space-y-2 group"
                data-testid="tab-skills-mobile"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:shadow-lg transition-all">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold">Skills</h3>
              </button>

              <button
                onClick={() => scrollToSection('education')}
                className="section-card hover:scale-105 transition-all cursor-pointer p-4 flex flex-col items-center space-y-2 group"
                data-testid="tab-education-mobile"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center group-hover:shadow-lg transition-all">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold">Education</h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Theme Toggle & Contacts */}
      <div className="fixed bottom-4 right-4 flex lg:hidden flex-col space-y-2">
        <button
          onClick={toggleTheme}
          className="glass-card p-3 hover:bg-muted/50 transition-all"
          data-testid="button-theme-toggle-mobile"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <a 
          href="mailto:abdulwahabstd@gmail.com"
          className="glass-card p-3 hover:text-primary transition-colors"
          data-testid="link-email-mobile"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
