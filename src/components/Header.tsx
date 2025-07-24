
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Github, Linkedin, Mail, Menu } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Alex Johnson</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-3">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
