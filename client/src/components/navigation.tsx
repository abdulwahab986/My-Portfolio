import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg text-primary-foreground">
              AW
            </div>
            <span className="font-bold text-xl">Abdul Wahab</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-experience"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              data-testid="button-toggle-theme"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" data-testid="icon-sun" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" data-testid="icon-moon" />
              )}
            </button>
            <a 
              href="mailto:abdulwahabstd@gmail.com"
              className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              data-testid="nav-contact"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              data-testid="button-toggle-theme-mobile"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" data-testid="icon-sun-mobile" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" data-testid="icon-moon-mobile" />
              )}
            </button>
            <button 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border" data-testid="mobile-menu">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-skills"
              >
                Skills
              </button>
              <a 
                href="mailto:abdulwahabstd@gmail.com"
                className="block w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg text-center"
                data-testid="mobile-nav-contact"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
