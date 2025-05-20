
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Linkedin, Instagram, Github, Mail, FileText, Figma, Layers, PenTool, Code, GitBranch, GraduationCap, Award, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutMeCard = () => (
  <Card className="overflow-hidden h-full md:col-span-2 bg-black text-white">
    <CardContent className="p-6">
      <h3 className="text-2xl font-oswald font-medium mb-4">ABOUT ME</h3>
      <p className="text-gray-200">
        Front-end developer and UI/UX designer passionate about creating beautiful, 
        functional interfaces with clean code. Experienced in building responsive 
        websites and web applications that provide seamless user experiences.
        I enjoy solving complex problems and learning new technologies.
      </p>
    </CardContent>
  </Card>
);

const ExperienceCard = () => (
  <Card className="overflow-hidden h-full md:col-span-2 border-2 border-gray-200">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
        <Briefcase className="h-5 w-5" />
        PROFESSIONAL EXPERIENCE
      </h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <h4 className="font-medium">Frontend Developer</h4>
            <span className="text-sm text-gray-500">2023 - Present</span>
          </div>
          <p className="text-sm font-medium text-gray-700 mb-1">TechCorp Inc.</p>
          <p className="text-sm text-gray-600">
            Developed and maintained responsive web applications using React and Tailwind CSS.
            Implemented UI/UX improvements that increased user engagement by 25%.
          </p>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <h4 className="font-medium">UI/UX Design Intern</h4>
            <span className="text-sm text-gray-500">2022 - 2023</span>
          </div>
          <p className="text-sm font-medium text-gray-700 mb-1">DesignHub Studio</p>
          <p className="text-sm text-gray-600">
            Created wireframes and prototypes for mobile and web applications.
            Collaborated with development teams to implement design systems.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const SkillLevelCard = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Responsive Design', level: 90 },
  ];

  return (
    <Card className="overflow-hidden h-full md:row-span-2">
      <CardContent className="p-6">
        <h3 className="text-xl font-oswald font-medium mb-6">SKILL PROFICIENCY</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-black rounded-full" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const DevSkillsCard = () => (
  <Card className="overflow-hidden h-full bg-gray-50">
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
  <Card className="overflow-hidden h-full bg-gray-50">
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
  <Card className="overflow-hidden h-full bg-gray-50">
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

const EducationCard = () => (
  <Card className="overflow-hidden h-full border-2 border-gray-200">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
        <GraduationCap className="h-5 w-5" />
        FORMAÇÃO & CERTIFICAÇÕES
      </h3>
      <div className="space-y-3">
        <div className="flex gap-2 items-start">
          <Award className="h-4 w-4 mt-1 flex-shrink-0" />
          <p className="text-sm">Bacharelado em Ciência da Computação - Estácio | 2022 - Atual</p>
        </div>
        <div className="flex gap-2 items-start">
          <Award className="h-4 w-4 mt-1 flex-shrink-0" />
          <p className="text-sm">Certificação Fullstack - Mimo.org</p>
        </div>
        <div className="flex gap-2 items-start">
          <Award className="h-4 w-4 mt-1 flex-shrink-0" />
          <p className="text-sm">Imersão Dev Front-End e Back-End - Google & Dev</p>
        </div>
        <div className="flex gap-2 items-start">
          <Award className="h-4 w-4 mt-1 flex-shrink-0" />
          <p className="text-sm">Curso de Lógica de Programação - Mimo.org</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">TESTIMONIALS</h3>
      <div className="space-y-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm italic mb-2">
            "Exceptional problem-solver with strong attention to detail. Created beautiful, functional interfaces that our users love."
          </p>
          <p className="text-xs font-medium">— Maria Silva, Product Manager at TechCorp</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm italic mb-2">
            "Talented developer who delivers clean, well-documented code. Always meets deadlines and exceeds expectations."
          </p>
          <p className="text-xs font-medium">— João Mendes, Tech Lead at DesignHub</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const AchievementsCard = () => (
  <Card className="overflow-hidden h-full border-2 border-gray-200">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
        <Award className="h-5 w-5" />
        ACHIEVEMENTS
      </h3>
      <div className="space-y-3">
        <div className="flex gap-2 items-start">
          <Star className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500" />
          <p className="text-sm">Front-End Developer of the Month (TechCorp, Jul 2023)</p>
        </div>
        <div className="flex gap-2 items-start">
          <Star className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500" />
          <p className="text-sm">Best UI/UX Design - Internal Hackathon (2022)</p>
        </div>
        <div className="flex gap-2 items-start">
          <Star className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500" />
          <p className="text-sm">1st Place - Web Development Competition</p>
        </div>
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

const AvailabilityStatusCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <h3 className="text-xl font-oswald font-medium mb-2">AVAILABILITY STATUS</h3>
      <div className="flex flex-col items-center text-center gap-2">
        <Badge className="bg-green-500 text-white px-3 py-1">Available for Work</Badge>
        <p className="text-sm text-gray-700">Open to freelance projects and full-time positions</p>
      </div>
    </CardContent>
  </Card>
);

const SocialsCard = () => (
  <Card className="overflow-hidden h-full bg-gray-50">
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
  <Card className="overflow-hidden h-full border-2 border-gray-200">
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
  <Card className="overflow-hidden h-full border-2 border-gray-200">
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
    <section className="w-full py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">About Me</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">A snapshot of my professional journey, skills and experiences that define my work as a developer and designer.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Principal Information - First Row with more visual weight */}
          <AboutMeCard />
          <SkillLevelCard />
          
          {/* Professional Information - Second row with medium visual weight */}
          <ExperienceCard />
          <EducationCard />
          
          {/* Technical Skills - Group skills together */}
          <div className="grid grid-cols-1 gap-4 md:col-span-2">
            <DevSkillsCard />
            <UiUxSkillsCard />
            <ToolsCard />
          </div>
          
          {/* Achievements and Testimonials - Professional validation */}
          <AchievementsCard />
          <TestimonialsCard />
          
          {/* Contact Information - Easy access grouped together */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:col-span-3">
            <SocialsCard />
            <ContactCard />
            <CvCard />
            <AvailabilityStatusCard />
            <LocationCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
