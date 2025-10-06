import { Briefcase, GraduationCap, Check } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey in software quality assurance</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="timeline-line"></div>
          
          {/* Junior SQA Engineer */}
          <div className="relative pl-16 pb-12 animate-slide-in-left">
            <div className="absolute left-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            
            <div className="section-card" data-testid="experience-junior-sqa">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Junior SQA Engineer (Remote)</h3>
                  <p className="text-primary font-semibold">Innovador Solutions</p>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
                  Nov 2024 – Jun 2025
                </div>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Designed and executed manual test cases for web and mobile applications based on functional requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Performed Functional, Smoke, Regression, and cross-browser testing to ensure application quality and consistency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Created test plans, test scenarios, and maintained test documentation including bug reports and test summaries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Gained hands-on experience in QA processes and the complete bug lifecycle management</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Manual Testing</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Regression Testing</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Test Documentation</span>
              </div>
            </div>
          </div>
          
          {/* SQA Intern */}
          <div className="relative pl-16 animate-slide-in-right">
            <div className="absolute left-0 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            
            <div className="section-card" data-testid="experience-sqa-intern">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">SQA Engineer (Intern - Remote)</h3>
                  <p className="text-secondary font-semibold">Innovador Solutions</p>
                </div>
                <div className="bg-secondary/10 px-4 py-2 rounded-full text-sm font-medium text-secondary">
                  Jul 2024 – Oct 2024
                </div>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Assisted in writing and executing manual test cases for web and mobile applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Performed UI, functional, and regression testing; reported bugs using Google Sheets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Collaborated with senior QA engineers to understand testing workflows and best practices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Contributed to test documentation, bug reports, meetings, and ensured system stability through retesting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Worked as a project manager for 4 months, leading the team and managing project tasks and timelines</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Functional Testing</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Bug Reporting</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Collaboration</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
