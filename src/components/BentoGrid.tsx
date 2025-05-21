
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Linkedin, Instagram, Github, Mail, FileText, Figma, Layers, PenTool, Code, GitBranch, GraduationCap, Award, Briefcase, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutMeCard = () => (
  <Card className="overflow-hidden h-full bg-black text-white md:col-span-2 md:row-span-1">
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
  <Card className="overflow-hidden h-full border-2 border-gray-200 md:col-span-2 md:row-span-1">
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
    <Card className="overflow-hidden h-full md:col-span-1 md:row-span-2">
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
        EDUCATION & CERTIFICATIONS
      </h3>
      <div className="space-y-3">
        <div className="flex gap-2 items-start">
          <Award className="h-4 w-4 mt-1 flex-shrink-0" />
          <p className="text-sm">Bachelor of Computer Science - Estácio | 2022 - Present</p>
        </div>
        <div className="flex gap-2 items-start">
          <Award className="h-4 w-4 mt-1 flex-shrink-0" />
          <p className="text-sm">Fullstack Certification - Mimo.org</p>
        </div>
        <div className="flex gap-2 items-start">
          <Award className="h-4 w-4 mt-1 flex-shrink-0" />
          <p className="text-sm">Front-End and Back-End Dev Immersion - Google & Dev</p>
        </div>
        <div className="flex gap-2 items-start">
          <Award className="h-4 w-4 mt-1 flex-shrink-0" />
          <p className="text-sm">Programming Logic Course - Mimo.org</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsCard = () => (
  <Card className="overflow-hidden h-full border-2 border-gray-200">
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

const ContactInfoCard = () => (
  <Card className="overflow-hidden h-full md:col-span-2">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">CONTACT INFORMATION</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>henrcau@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>+55 87 98859-1862</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Petrolina, Brazil</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CallToActionCard = () => (
  <Card className="overflow-hidden h-full border-2 border-gray-200 md:col-span-2 bg-gray-50">
    <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6 justify-between">
      <div>
        <h3 className="text-xl font-oswald font-medium mb-2">READY TO COLLABORATE?</h3>
        <p className="text-gray-600 mb-4 md:mb-0">
          Currently available for freelance projects and full-time positions.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="bg-black text-white hover:bg-gray-800 gap-2">
          <Mail className="h-4 w-4" />
          Contact Me
        </Button>
        <Button variant="outline" className="border-black gap-2">
          <FileText className="h-4 w-4" />
          Download CV
        </Button>
      </div>
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
          {/* Primeiro tier - Informações principais para recrutadores */}
          <AboutMeCard />
          <ExperienceCard />
          
          {/* Segundo tier - Skills técnicas que recrutadores buscam */}
          <SkillLevelCard />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
            <DevSkillsCard />
            <UiUxSkillsCard />
            <ToolsCard />
            <EducationCard />
          </div>
          
          {/* Terceiro tier - Validação profissional e diferencial */}
          <TestimonialsCard />
          <AchievementsCard />
          
          {/* Quarto tier - Contato e call to action bem visíveis */}
          <ContactInfoCard />
          <CallToActionCard />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

