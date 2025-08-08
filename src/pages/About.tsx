import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "Tailwind CSS", "Figma", "Git", "AWS", "Docker", "GraphQL"
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns."
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description: "Built scalable web applications from scratch, designed user interfaces, and collaborated with cross-functional teams."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2021",
      description: "Developed responsive websites and web applications for various clients, focusing on performance and user experience."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who loves creating digital experiences that make a difference. 
              With a strong foundation in modern web technologies and a keen eye for design, 
              I bring ideas to life through code.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  My journey into tech started during college when I built my first website. 
                  What began as curiosity quickly turned into passion as I discovered the power 
                  of code to solve real-world problems.
                </p>
                <p>
                  Over the years, I've had the privilege of working with amazing teams, 
                  learning from industry experts, and contributing to projects that impact 
                  thousands of users daily.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or enjoying a good book with a cup of coffee.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, title: "Clean Code", desc: "Writing maintainable, scalable code" },
                { icon: Palette, title: "Design Focus", desc: "Creating beautiful user experiences" },
                { icon: Zap, title: "Performance", desc: "Optimizing for speed and efficiency" },
                { icon: Users, title: "Collaboration", desc: "Working effectively in teams" }
              ].map((item, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span>{exp.title}</span>
                      <Badge variant="outline">{exp.period}</Badge>
                    </CardTitle>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;