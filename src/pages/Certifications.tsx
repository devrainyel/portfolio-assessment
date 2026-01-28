import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Layers , CheckCircle2 } from "lucide-react";

const Certifications = () => {
  // NOTE: For this design, use high-quality, darker images or actual certificate scans for best results.
  const certs = [
    {
      id: 1,
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera",
      date: "Oct 2024",
      image: "./meta_frontend_cert.JPG", 
      link: "https://coursera.org/verify/2J6SLKNUXV50",
      tags: ["HTML", "CSS", "JavaScrit", "Semantic HTML"]
    },
    {
      id: 2,
      title: "Foundations of Git",
      issuer: "Datacamp",
      date: "Nov 2024",
      image: "./datacamp_git_cert.JPG",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/4b194535521c8b9627a0a2cfc493743881135294",
      tags: ["Git workflows", "Git commands"]
    },
    {
      id: 3,
      title: "AWS Cloud Technical Essentials",
      issuer: "AWS",
      date: "Oct 2024",
      image: "./aws_cloud_cert.png",
      link: "https://coursera.org/verify/V5I3KZX6O1A7",
      tags: ["EC2", "IAM", "S3", "VPC", "RDS"]
    },
    {
      id: 4,
      title: "Introduction to Python",
      issuer: "Datacamp",
      date: "Nov 2024",
      image: "./datacamp_python_cert.png",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/7fc5c0af8d2741cac614e172300cb7686466bdd7",
      tags: ["Data Types", "Objects", "Functions", "Classes", "Dictionaries"]
    }
  ];

  return (
    <section id="certifications" className="container mx-auto py-24 px-4">
       <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Layers className="w-4 h-4" />
          Featured Certifications
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">My Certifications</h2>
      </div>

      {/* Grid: 1 column mobile, 2 columns desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certs.map((cert) => (
          <Card key={cert.id} className="group relative overflow-hidden rounded-2xl border-0 shadow-xl aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3]">
            
            {/* 1. The Background Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* 2. The Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 transition-opacity group-hover:via-black/80" />

            {/* 3. The Content sitting on top */}
            <CardContent className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
              <div className="space-y-3">
                 {/* Issuer & Date Row */}
                <div className="flex items-center justify-between text-white/80 text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4 text-primary" />
                     {cert.issuer}
                  </div>
                  <div className="flex items-center gap-1.5">
                     <Calendar className="w-4 h-4" />
                     {cert.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  {cert.title}
                </h3>

                 {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.tags.map(tag => (
                    // Using white/20 background for subtle glass effect tags
                    <Badge key={tag} variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0 font-normal tracking-wider">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Verify Button - Appears/Brightens on Hover */}
              <div className="mt-8 pt-6 border-t border-white/20 flex justify-end opacity-90 group-hover:opacity-100 transition-opacity">
                 <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black gap-2 rounded-full transition-all" asChild>
                    <a href={cert.link} target="_blank" rel="noreferrer">
                       Verify Credential <ExternalLink className="w-4 h-4" />
                    </a>
                 </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;