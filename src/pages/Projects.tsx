import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Edu-Track(on-going)",
      description: "An all-in-one system for students, staff, and admins. Includes features like: Role-based login system Profile management ,Document upload/download, Academic records, Notice board, Chat with notifications. It’s fully responsive, uses PostgreSQL and includes secure file handling via Djano backend.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjepnITbaJARuYB0s4wcRGMkydw1D2NVjcDqRUCWiDo7wxbPiRy7ldMi0gdtLDt-S9T8KJPH3hQQ8c7BrOQNQH3ZZuAVvngER9-_zyeaoOEExludTUkYeTTt5-7_WIezSMBT-6HEEZDhC0x7bejSEdzbGkPP3jaPOufexYspUqIx0f8kr3p13wp3LBpXoU/s320/img.jpeg",
      technologies: ["React native", "Node.js", "PostgreSQL", "Django"],
      githubUrl: "https://github.com/bavinroy",
      featured: true
    },
    {
      title: "GYM Guide App",
      description: "A responsive mobile app that helps users with workout plans, video demos. The React native version, a splash screen with an gif animation with responsive design.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSRT91DLbzb1Kxon16aA6-wbDAgd9InZnz-O5ChIf2iMASzbwNClq0z9mvARl_2_UflXMk9EMWbTr5vG5KLOmh6_2_Rqjg8xEmrZ3aLXxfI2w4E0kxTt0CZxO-uLPPOh3wD_U1x2XXWEZkQyWECP8ZqSkrbFQDbXC6I-BaKVR6T3f1usW03LBd8paRHho/s320/icon.png",
      technologies: ["React native", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/bavinroy",
      featured: true
    },
    {
      title: "Weather Analysis",
      description: "This project analyzes past weather data to forecast future conditions using machine learning techniques. It giving insights on temperature, humidity, and rain trends.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenWeather API"],
      githubUrl: "https://github.com/bavinroy",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/bavinroy",
      featured: false
    },
    {
      title: "Custom Dashboard",
      description: "A role-based dashboard with clean UI and API integration. Used for data visualization, personal profile management, and admin controls.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS", "MySQL"],
      githubUrl: "https://github.com/bavinroy",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my work, featuring web applications, mobile apps, and creative solutions 
              that demonstrate my skills and passion for development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{project.title}</span>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
