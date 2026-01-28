import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Layers, Lock } from "lucide-react";
import { Link } from "react-router";
import { projectList } from "@/data/projects";

const Projects = () => {

  return (
    <section id="projects" className="container mx-auto py-24 px-4">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Layers className="w-4 h-4" />
          Featured Work
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">My Projects</h2>
        <p className="max-w-[700px] text-muted-foreground text-lg">
          A selection of my recent works where I combine design logic with robust backend functionality.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project) => (
          <Card key={project.id} className="group overflow-hidden border-muted-foreground/20 hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
            
            {/* Project Thumbnail */}
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 {/* Quick action buttons overlay for desktop hover */}
                 <Button variant="secondary" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noreferrer">Preview</a>
                 </Button>
              </div>
            </div>

            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider font-bold">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <CardDescription className="text-sm leading-relaxed text-foreground/70">
                {project.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="gap-4 pt-4 border-t mt-auto">
              <Button variant="default" className="flex-1 gap-2" asChild>
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </Button>
              {project.githubLink === "/redacted" ? (
                <Button variant="outline" size="icon" className="shrink-0 hover:bg-black hover:text-white" asChild>
                  <Link to={project.githubLink}>
                    <Lock className="w-5 h-5" />
                    <span className="sr-only">Source Code</span>
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" size="icon" className="shrink-0 hover:bg-black hover:text-white" asChild>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">Source Code</span>
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;