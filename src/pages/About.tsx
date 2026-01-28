import { Badge } from "@/components/ui/badge";
import { Code2, Server, Layout } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "PHP", category: "Backend" },
    { name: "NodeJS", category: "Backend" },
    { name: "ExpressJs", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
  ];

  return (
    <section id="about" className="container mx-auto py-24 bg-slate-50/50 dark:bg-slate-900/20 rounded-3xl my-10">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* --- Left Side: What I Do --- */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What I Do</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
           I build full-stack web applications that balance clean design with robust logic. I focus on creating scalable systems that are easy to use and solve practical, real-world problems.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit">
                <Layout className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Frontend Dev</h4>
                <p className="text-sm text-muted-foreground">Crafting responsive, high-performance interfaces.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Backend Logic</h4>
                <p className="text-sm text-muted-foreground">Building robust APIs and server-side logic.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Side: Tech Stack --- */}
        <div className="bg-white dark:bg-black border rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">Tech Stack</h3>
          </div>
          
          <div className="space-y-8">
            {/* Grouping by Category */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Frontend & Core</p>
              <div className="flex flex-wrap gap-2">
                {skills.filter(s => s.category === "Frontend").map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Backend & Database</p>
              <div className="flex flex-wrap gap-2">
                {skills.filter(s => s.category !== "Frontend").map((skill) => (
                  <Badge key={skill.name} variant="default" className="px-3 py-1 text-sm bg-primary/80">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t italic text-sm text-muted-foreground">
              "I'm always learning. Currently exploring more about backend and DevOps."
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;