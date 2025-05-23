
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Linkedin, Instagram, Github, Mail, FileText, Figma, Layers, PenTool, Code, GitBranch, GraduationCap, Award, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const DevSkillsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">HABILIDADES DEV</h3>
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
      <h3 className="text-xl font-oswald font-medium mb-4">HABILIDADES UI/UX</h3>
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
      <h3 className="text-xl font-oswald font-medium mb-4">FERRAMENTAS</h3>
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
        <Badge className="bg-black text-white">Integração de API</Badge>
      </div>
    </CardContent>
  </Card>
);

const EducationCard = () => (
  <AnimatedCard delay={0.4}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          FORMAÇÃO & CERTIFICAÇÕES
        </h3>
        <div className="space-y-3">
          <div className="flex gap-2 items-start">
            <Award className="h-4 w-4 mt-1 flex-shrink-0 text-gray-700" />
            <p className="text-sm">Bacharelado em Ciência da Computação - Estácio | 2022 - Atual</p>
          </div>
          <div className="flex gap-2 items-start">
            <Award className="h-4 w-4 mt-1 flex-shrink-0 text-gray-700" />
            <p className="text-sm">Certificação Fullstack - Mimo.org</p>
          </div>
          <div className="flex gap-2 items-start">
            <Award className="h-4 w-4 mt-1 flex-shrink-0 text-gray-700" />
            <p className="text-sm">Imersão Dev Front-End e Back-End - Google & Dev</p>
          </div>
          <div className="flex gap-2 items-start">
            <Award className="h-4 w-4 mt-1 flex-shrink-0 text-gray-700" />
            <p className="text-sm">Curso de Lógica de Programação - Mimo.org</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const LocationCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <h3 className="text-xl font-oswald font-medium mb-4">LOCALIZAÇÃO</h3>
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5" />
        <span>Petrolina, Brasil</span>
      </div>
    </CardContent>
  </Card>
);

const SocialsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">REDES SOCIAIS</h3>
      <div className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
          <Linkedin className="h-5 w-5" />
          SOCIALS
        </h3>
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 hover:text-black transition-colors group relative">
            <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>LinkedIn</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-black transition-colors group relative">
            <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Instagram</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-black transition-colors group relative">
            <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>GitHub</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const ContactCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6 flex flex-col gap-4">
      <Button className="w-full bg-black text-white hover:bg-gray-800 gap-2">
        <Mail className="h-4 w-4" />
        Contate-me
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
        Ver CV
      </Button>
      <p className="text-sm text-gray-600 text-center">
        Aqui você encontrará minha jornada profissional, habilidades e experiências detalhadas.
      </p>
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
    <Card className="overflow-hidden h-full">
      <CardContent className="p-6">
        <h3 className="text-xl font-oswald font-medium mb-6">NÍVEL DE PROFICIÊNCIA</h3>
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

const AboutMeCard = () => (
  <Card className="overflow-hidden h-full md:col-span-2">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">SOBRE MIM</h3>
      <p className="text-gray-700">
        Desenvolvedor front-end e designer UI/UX apaixonado por criar interfaces bonitas e 
        funcionais com código limpo. Experiente na construção de sites responsivos e aplicações 
        web que proporcionam experiências de usuário perfeitas.
        Gosto de resolver problemas complexos e aprender novas tecnologias.
      </p>
    </CardContent>
  </Card>
);

const ExperienceCard = () => (
  <Card className="overflow-hidden h-full md:col-span-2">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
        <Briefcase className="h-5 w-5" />
        EXPERIÊNCIA PROFISSIONAL
      </h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <h4 className="font-medium">Desenvolvedor Frontend</h4>
            <span className="text-sm text-gray-500">2023 - Presente</span>
          </div>
          <p className="text-sm font-medium text-gray-700 mb-1">TechCorp Inc.</p>
          <p className="text-sm text-gray-600">
            Desenvolvi e mantive aplicações web responsivas usando React e Tailwind CSS.
            Implementei melhorias de UI/UX que aumentaram o engajamento do usuário em 25%.
          </p>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <h4 className="font-medium">Estagiário de UI/UX Design</h4>
            <span className="text-sm text-gray-500">2022 - 2023</span>
          </div>
          <p className="text-sm font-medium text-gray-700 mb-1">DesignHub Studio</p>
          <p className="text-sm text-gray-600">
            Criei wireframes e protótipos para aplicações móveis e web.
            Colaborei com equipes de desenvolvimento para implementar sistemas de design.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4">DEPOIMENTOS</h3>
      <div className="space-y-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm italic mb-2">
            "Solucionador excepcional de problemas com forte atenção aos detalhes. Criou interfaces bonitas e funcionais que nossos usuários adoram."
          </p>
          <p className="text-xs font-medium">— Maria Silva, Gerente de Produto na TechCorp</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm italic mb-2">
            "Desenvolvedor talentoso que entrega código limpo e bem documentado. Sempre cumpre prazos e excede expectativas."
          </p>
          <p className="text-xs font-medium">— João Mendes, Tech Lead na DesignHub</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const AchievementsCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
        <Award className="h-5 w-5" />
        CONQUISTAS
      </h3>
      <div className="space-y-3">
        <div className="flex gap-2 items-start">
          <Star className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500" />
          <p className="text-sm">Desenvolvedor Front-End do Mês (TechCorp, Jul 2023)</p>
        </div>
        <div className="flex gap-2 items-start">
          <Star className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500" />
          <p className="text-sm">Melhor Design UI/UX - Hackathon Interno (2022)</p>
        </div>
        <div className="flex gap-2 items-start">
          <Star className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500" />
          <p className="text-sm">1º Lugar - Competição de Desenvolvimento Web</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const AvailabilityStatusCard = () => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <h3 className="text-xl font-oswald font-medium mb-2">STATUS DE DISPONIBILIDADE</h3>
      <div className="flex flex-col items-center text-center gap-2">
        <Badge className="bg-green-500 text-white px-3 py-1">Disponível para Trabalho</Badge>
        <p className="text-sm text-gray-700">Aberto a projetos freelance e posições de tempo integral</p>
      </div>
    </CardContent>
  </Card>
);

const BentoGrid: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">Sobre Mim</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AboutMeCard />
        <ExperienceCard />
        <DevSkillsCard />
        <UiUxSkillsCard />
        <SkillLevelCard />
        <ToolsCard />
        <TestimonialsCard />
        <EducationCard />
        <AchievementsCard />
        <LocationCard />
        <AvailabilityStatusCard />
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
