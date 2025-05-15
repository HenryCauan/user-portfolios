
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Linkedin, Instagram, Github, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SkillsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">SKILLS</h3>
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
    <CardContent className="p-6 flex items-center justify-center">
      <Button className="w-full bg-black text-white hover:bg-gray-800 gap-2">
        <Mail className="h-4 w-4" />
        Contact Me
      </Button>
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
        <div className="col-span-1 md:col-span-2">
          <SkillsCard />
        </div>
        <LocationCard />
        <SocialsCard />
        <ContactCard />
        <CvCard />
      </div>
    </section>
  );
};

export default BentoGrid;
