import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "Tailwind CSS", "GitHub", "Git", "Firebase", "React native", "Django", "JavaScript"
  ];

  const experiences = [
    
    {
      title: "Full Stack Development Intern",
      company: "ATS Technologies",
      period: "06- 2025 - 07- 2022",
      description: "Gained hands on experience building real-world applications using React and Django during a Internship."
    },
    
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
              Hi, I’m Bavin Kumar R, a passionate and self-driven developer currently pursuing my B.Tech in Information Technology at Selvam College of Technology. My journey into the world of coding started with curiosity and a love for solving problems, and it quickly turned into a mission to build meaningful, impactful tech solutions.
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
                  My first exposure to coding was through Python, which immediately sparked my interest. The simplicity yet power of the language inspired me to dive deeper. I started creating small projects like:
                </p>
                <p>
                  Avengers logo using turtle (my first Code),
                  Sentiment Analysis & Weather Analysis.
                </p>
                <p>
                  As I progressed, I didn't stop at basics. I explored:
                </p>
                <p>
⚙️ Backend with Django, Express.js, and Firebase
                </p>
                <p>
📱 Mobile Apps using React Native and Expo
              </p>
              <p>
🎓 A full-stack Student Management System with role-based login and document handling
              </p>
              <p>
Each project taught me something new—from frontend polish with Tailwind CSS to API integration, authentication, and deployment.
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