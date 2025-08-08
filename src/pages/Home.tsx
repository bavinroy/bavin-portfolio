import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedTitle from "@/components/AnimatedTitle";
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Home = () => {
  const titles = [
    "Full Stack Developer",
    "React Specialist", 
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  const handleResumeDownload = () => {
    // Create a dummy PDF for demo purposes
    const link = document.createElement('a');
    link.href = '/sample-resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm{" "}
                  <span className="text-gradient">Alex Johnson</span>
                </h1>
                <div className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
                  I'm a{" "}
                  <AnimatedTitle 
                    titles={titles} 
                    className="text-primary font-semibold"
                  />
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about creating beautiful, functional, and user-centered digital experiences. 
                I specialize in modern web technologies and love turning complex problems into 
                simple, elegant solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={handleResumeDownload}
                  className="group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button variant="glass" size="xl">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
                <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl">
                  <CardContent className="p-0">
                    <img
                      src={profileImage}
                      alt="Alex Johnson - Portfolio"
                      className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-accent rounded-full blur-xl opacity-30 animate-float"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 gradient-accent rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "20+", label: "Happy Clients" },
              { number: "5", label: "Tech Stacks" },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;