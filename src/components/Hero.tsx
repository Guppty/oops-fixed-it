
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200&q=80" 
            alt="Profile" 
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
          />
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Hi, I'm <span className="text-primary">Alex Johnson</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Computer Science Student & Aspiring Software Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and learning new technologies. 
            Currently pursuing my degree while building exciting projects and gaining hands-on experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="text-lg px-8 py-3">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="text-lg px-8 py-3">
              Get In Touch
            </Button>
          </div>
          <div className="mt-16">
            <button onClick={() => scrollToSection('about')} className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-muted-foreground mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
