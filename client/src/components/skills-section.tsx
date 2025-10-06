import { FlaskConical, Code } from "lucide-react";

export default function SkillsSection() {
  const testingSkills = [
    { name: "Regression Testing", icon: "↺" },
    { name: "Retesting", icon: "⟲" },
    { name: "Sanity Testing", icon: "✓✓" },
    { name: "Smoke Testing", icon: "🔥" },
    { name: "Functional Testing", icon: "⚙" },
    { name: "UI Testing", icon: "🖥" },
    { name: "Black-Box Testing", icon: "📦" },
    { name: "Manual Testing", icon: "📱" }
  ];

  const technicalSkills = [
    { name: "Manual Testing", level: 95 },
    { name: "UI/UX Testing", level: 90 },
    { name: "Agile Methodologies", level: 85 },
    { name: "Jira & Test Management", level: 80 },
    { name: "Python (Basics)", level: 65 },
    { name: "Graphic Design", level: 75 }
  ];

  const additionalSkills = [
    "Problem-Solving", "Strong Communication", "MS Office", "Test Documentation",
    "Bug Reporting", "Team Collaboration", "Cross-browser Testing", "Project Management"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">My technical capabilities and testing proficiencies</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testing Expertise */}
          <div className="bg-card border border-border rounded-2xl p-8" data-testid="testing-expertise-section">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Testing Expertise</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {testingSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-badge bg-muted border border-border rounded-lg p-4 text-center cursor-pointer"
                  data-testid={`skill-badge-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-xl mb-2">{skill.icon}</div>
                  <p className="font-semibold text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="bg-card border border-border rounded-2xl p-8" data-testid="technical-skills-section">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} data-testid={`technical-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Skills */}
        <div className="mt-8 bg-card border border-border rounded-2xl p-8" data-testid="additional-skills-section">
          <h3 className="text-xl font-bold mb-6 text-center">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => {
              const colors = [
                'bg-primary/10 text-primary',
                'bg-secondary/10 text-secondary', 
                'bg-accent/10 text-accent'
              ];
              const colorClass = colors[index % colors.length];
              
              return (
                <span 
                  key={index} 
                  className={`px-4 py-2 ${colorClass} rounded-full font-medium`}
                  data-testid={`additional-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
