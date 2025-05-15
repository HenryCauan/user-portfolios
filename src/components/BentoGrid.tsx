
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Linkedin, Instagram, Github, Mail, FileText, Figma, Layers, PenTool, Code, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DevSkillsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">DEV SKILLS</h3>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-black text-white">React</Badge>
        <Badge className="bg-black text-white">Next.js</Badge>
        <Badge className="bg-black text-white">JavaScript (ES6+)</Badge>
        <Badge className="bg-black text-white">HTML5</Badge>
        <Badge className="bg-black text-white">CSS3</Badge>
        <Badge className="bg-black text-white">Tailwind CSS</Badge>
        <Badge className="bg-black text-white">GSAP</Badge>
        <Badge className="bg-black text-white">Vite</Badge>
      </div>
    </CardContent>
  </Card>
);

const UiUxSkillsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">UI/UX SKILLS</h3>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-black text-white flex items-center gap-1">
          <Figma className="h-3 w-3" />
          Figma
        </Badge>
        <Badge className="bg-black text-white">Adobe Illustrator</Badge>
        <Badge className="bg-black text-white">Photoshop</Badge>
        <Badge className="bg-black text-white flex items-center gap-1">
          <Layers className="h-3 w-3" />
          Design Responsivo
        </Badge>
        <Badge className="bg-black text-white flex items-center gap-1">
          <PenTool className="h-3 w-3" />
          Animações Web
        </Badge>
      </div>
    </CardContent>
  </Card>
);

const ToolsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">TOOLS</h3>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-black text-white flex items-center gap-1">
          <GitBranch className="h-3 w-3" />
          Git
        </Badge>
        <Badge className="bg-black text-white flex items-center gap-1">
          <Github className="h-3 w-3" />
          GitHub
        </Badge>
        <Badge className="bg-black text-white flex items-center gap-1">
          <Code className="h-3 w-3" />
          REST APIs
        </Badge>
        <Badge className="bg-black text-white">Kanban</Badge>
        <Badge className="bg-black text-white">API Integration</Badge>
      </div>
    </CardContent>
  </Card>
);

const LocationCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <h3 className="text-xl font-oswald font-medium mb-4">LOCATION</h3>
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5" />
        <span>Petrolina, Brazil</span>
      </div>
    </CardContent>
  </Card>
);

const SocialsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">SOCIALS</h3>
      <div className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
          <Linkedin className="h-5 w-5" />
          <span>LinkedIn</span>
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
          <Instagram className="h-5 w-5" />
          <span>Instagram</span>
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
          <Github className="h-5 w-5" />
          <span>GitHub</span>
        </a>
      </div>
    </CardContent>
  </Card>
);

const ContactCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6 flex flex-col gap-4">
      <Button className="w-full bg-black text-white hover:bg-gray-800 gap-2">
        <Mail className="h-4 w-4" />
        Contact Me
      </Button>
      <div className="text-sm">
        <p className="flex items-center gap-2 mb-2">
          <Mail className="h-4 w-4" /> 
          henrcau@gmail.com
        </p>
        <p>+55 87 98859-1862</p>
      </div>
    </CardContent>
  </Card>
);

const CvCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6 flex flex-col items-center justify-center">
      <Button variant="outline" className="w-full border-black gap-2 mb-3">
        <FileText className="h-4 w-4" />
        View CV
      </Button>
      <p className="text-sm text-gray-600 text-center">
        Aqui você encontrará minha jornada profissional, habilidades e experiências detalhadas.
      </p>
    </CardContent>
  </Card>
);

const BentoGrid: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DevSkillsCard />
        <UiUxSkillsCard />
        <ToolsCard />
        <LocationCard />
        <SocialsCard />
        <div className="md:col-span-1">
          <ContactCard />
        </div>
        <div className="md:col-span-1">
          <CvCard />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
