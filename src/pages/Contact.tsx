import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-24 px-4">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a project in mind or want to discuss a potential collaboration? 
          Feel free to reach out using the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Contact Info Sidebar (1 Column) */}
        <div className="space-y-6">
          <Card className="border-none bg-muted/50 shadow-none">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-background border">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Email</h4>
                  <a href="mailto:renielcuellar@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    renielcuellar@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-lg bg-background border">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Location</h4>
                  <p className="text-sm text-muted-foreground">Floridablanca, Pampanga, Philippines</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-sm mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full" asChild>
                    <a href="https://github.com/devrainyel" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full" asChild>
                    <a href="https://www.linkedin.com/in/reniel-ryand-cuellar-b9343b242/" target="_blank" rel="noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form (2 Columns) */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                I usually respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">Full Name</Label>
                    <Input id="first-name" placeholder="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Inquiry" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Briefly describe what you're looking for..." 
                    className="min-h-[150px]"
                  />
                </div>

                <Button className="w-full md:w-max px-8">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Contact;