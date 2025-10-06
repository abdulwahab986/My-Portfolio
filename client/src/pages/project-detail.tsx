import { useRoute, Link } from "wouter";
import { ArrowLeft, CheckCircle2, Target, Lightbulb, TrendingUp } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Navigation from "@/components/navigation";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const project = params?.id ? getProjectById(params.id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary' };
      case 'secondary': return { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary' };
      case 'accent': return { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent' };
      default: return { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary' };
    }
  };

  const colors = getColorClasses(project.color);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Project Header */}
          <div className="mb-12" data-testid="section-project-header">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-64 object-cover rounded-2xl mb-6"
              data-testid="img-project-header"
            />
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold" data-testid="text-project-name">
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                    data-testid={`tag-${index}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-project-description">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">Role: </span>
                <span className="font-semibold" data-testid="text-project-role">{project.role}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Duration: </span>
                <span className="font-semibold" data-testid="text-project-duration">{project.duration}</span>
              </div>
            </div>
          </div>

          {/* Case Study */}
          <section className="mb-12" data-testid="section-case-study">
            <h2 className="text-3xl font-bold mb-6">Case Study</h2>
            
            {/* Overview */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className={`w-6 h-6 ${colors.text}`} />
                <h3 className="text-xl font-bold">Overview</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-case-study-overview">
                {project.caseStudy.overview}
              </p>
            </div>

            {/* Challenges */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className={`w-6 h-6 ${colors.text}`} />
                <h3 className="text-xl font-bold">Challenges</h3>
              </div>
              <ul className="space-y-3">
                {project.caseStudy.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3" data-testid={`challenge-${index}`}>
                    <CheckCircle2 className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className={`w-6 h-6 ${colors.text}`} />
                <h3 className="text-xl font-bold">Testing Approach</h3>
              </div>
              <ul className="space-y-3">
                {project.caseStudy.approach.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3" data-testid={`approach-${index}`}>
                    <CheckCircle2 className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className={`w-6 h-6 ${colors.text}`} />
                <h3 className="text-xl font-bold">Outcomes & Impact</h3>
              </div>
              <ul className="space-y-3">
                {project.caseStudy.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-3" data-testid={`outcome-${index}`}>
                    <CheckCircle2 className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-12" data-testid="section-technologies">
            <h2 className="text-3xl font-bold mb-6">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <div 
                  key={index}
                  className={`px-4 py-2 bg-card border ${colors.border} rounded-lg font-medium`}
                  data-testid={`technology-${index}`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Testing Contributions */}
          <section data-testid="section-testing-contributions">
            <h2 className="text-3xl font-bold mb-6">Key Testing Contributions</h2>
            <div className="bg-card border border-border rounded-2xl p-6">
              <ul className="space-y-3">
                {project.testingContributions.map((contribution, index) => (
                  <li key={index} className="flex items-start space-x-3" data-testid={`contribution-${index}`}>
                    <CheckCircle2 className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                    <span className="text-muted-foreground">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
