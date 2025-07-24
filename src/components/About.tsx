
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Coding setup" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate Computer Science student with a strong foundation in programming 
                and a keen interest in software development. I love solving complex problems and 
                turning ideas into reality through code.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Currently in my junior year, I'm focusing on full-stack development, algorithms, 
                and data structures. I enjoy working on both personal projects and collaborating 
                with others to build meaningful applications.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Clean Code</h4>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable and efficient code
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Finding creative solutions to complex challenges
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Team Player</h4>
                <p className="text-sm text-muted-foreground">
                  Collaborating effectively in team environments
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Fast Learner</h4>
                <p className="text-sm text-muted-foreground">
                  Quickly adapting to new technologies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
