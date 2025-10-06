import { TestTube, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/data/projects";

export default function ProjectsSection() {

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return { bg: 'bg-primary/10', text: 'text-primary', icon: 'text-primary' };
      case 'secondary': return { bg: 'bg-secondary/10', text: 'text-secondary', icon: 'text-secondary' };
      case 'accent': return { bg: 'bg-accent/10', text: 'text-accent', icon: 'text-accent' };
      default: return { bg: 'bg-primary/10', text: 'text-primary', icon: 'text-primary' };
    }
  };

  const getIcon = (iconName: string) => {
    const iconClasses = "w-6 h-6";
    switch (iconName) {
      case 'square':
        return <div className={`w-6 h-6 border-2 border-current rounded`}></div>;
      case 'heart':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        );
      case 'graduation-cap':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
          </svg>
        );
      default:
        return <div className={`w-6 h-6 border-2 border-current rounded`}></div>;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Quality assurance testing and validation work</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div key={index} className="section-card overflow-hidden" data-testid={`project-${project.name.toLowerCase()}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-full h-48 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center p-8">
                  <img 
                    src={project.image} 
                    alt={`${project.name} project`} 
                    className="max-w-full max-h-full object-contain"
                    data-testid={`img-project-${project.id}`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold" data-testid={`text-project-title-${project.id}`}>
                      {project.name}
                    </h3>
                    <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <div className={colors.icon}>
                        {getIcon(project.icon)}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4" data-testid={`text-project-desc-${project.id}`}>
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className={`text-sm font-semibold ${colors.text}`}>Key Testing Contributions:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.testingContributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start space-x-2">
                          <TestTube className={`w-3 h-3 ${colors.text} mt-1 flex-shrink-0`} />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/projects/${project.id}`}
                    className={`inline-flex items-center space-x-2 ${colors.text} hover:underline font-medium`}
                    data-testid={`link-view-details-${project.id}`}
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Projects Mention */}
        <div className="mt-12 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 inline-block" data-testid="additional-projects">
            <p className="text-muted-foreground mb-4 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Plus many more projects involving comprehensive QA testing across diverse industries</span>
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">Web Applications</span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg text-sm font-medium">Mobile Apps</span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium">Enterprise Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
