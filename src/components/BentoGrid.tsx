
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Linkedin, Instagram, Github, Mail, FileText, Figma, Layers, PenTool, Code, GitBranch, GraduationCap, Award, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Helper component for card animations
const AnimatedCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="h-full"
  >
    {children}
  </motion.div>
);

const DevSkillsCard = () => (
  <AnimatedCard delay={0.1}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
          <Code className="h-5 w-5" />
          DEV SKILLS
        </h3>
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
  </AnimatedCard>
);

const UiUxSkillsCard = () => (
  <AnimatedCard delay={0.2}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
          <PenTool className="h-5 w-5" />
          UI/UX SKILLS
        </h3>
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
  </AnimatedCard>
);

const ToolsCard = () => (
  <AnimatedCard delay={0.3}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
          <GitBranch className="h-5 w-5" />
          TOOLS
        </h3>
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
  </AnimatedCard>
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
  <AnimatedCard delay={0.5}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10 group">
      <CardContent className="p-6 flex flex-col justify-between h-full bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          LOCATION
        </h3>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gray-700 group-hover:text-black transition-colors" />
          <span>Petrolina, Brazil</span>
        </div>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const SocialsCard = () => (
  <AnimatedCard delay={0.6}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
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
  <AnimatedCard delay={0.7}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-white">
        <Button className="w-full bg-black text-white hover:bg-gray-800 gap-2 transition-all duration-300 hover:scale-105">
          <Mail className="h-4 w-4" />
          Contact Me
        </Button>
        <div className="text-sm">
          <motion.p 
            className="flex items-center gap-2 mb-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="h-4 w-4" /> 
            henrcau@gmail.com
          </motion.p>
          <motion.p
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            +55 87 98859-1862
          </motion.p>
        </div>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const CvCard = () => (
  <AnimatedCard delay={0.8}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <Button variant="outline" className="w-full border-black gap-2 mb-3 transition-all duration-300 hover:bg-black hover:text-white">
          <FileText className="h-4 w-4" />
          View CV
        </Button>
        <p className="text-sm text-gray-600 text-center">
          Aqui você encontrará minha jornada profissional, habilidades e experiências detalhadas.
        </p>
      </CardContent>
    </Card>
  </AnimatedCard>
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
    <AnimatedCard delay={0.2}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
        <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <h3 className="text-xl font-oswald font-medium mb-6 flex items-center gap-2">
            <Star className="h-5 w-5" />
            SKILL PROFICIENCY
          </h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="space-y-2"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-black rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
};

const AboutMeCard = () => (
  <AnimatedCard>
    <Card className="overflow-hidden h-full md:col-span-2 hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5" />
          ABOUT ME
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Front-end developer and UI/UX designer passionate about creating beautiful, 
          functional interfaces with clean code. Experienced in building responsive 
          websites and web applications that provide seamless user experiences.
          I enjoy solving complex problems and learning new technologies.
        </p>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const ExperienceCard = () => (
  <AnimatedCard delay={0.1}>
    <Card className="overflow-hidden h-full md:col-span-2 hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          PROFESSIONAL EXPERIENCE
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">Frontend Developer</h4>
              <Badge className="bg-black text-white">2023 - Present</Badge>
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
              <Badge className="bg-black text-white">2022 - 2023</Badge>
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
  </AnimatedCard>
);

const TestimonialsCard = () => (
  <AnimatedCard delay={0.5}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
          <Star className="h-5 w-5 text-amber-500" />
          TESTIMONIALS
        </h3>
        <div className="space-y-4">
          <motion.div 
            className="p-3 bg-gray-100 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <p className="text-sm italic mb-2">
              "Exceptional problem-solver with strong attention to detail. Created beautiful, functional interfaces that our users love."
            </p>
            <p className="text-xs font-medium">— Maria Silva, Product Manager at TechCorp</p>
          </motion.div>
          <motion.div 
            className="p-3 bg-gray-100 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <p className="text-sm italic mb-2">
              "Talented developer who delivers clean, well-documented code. Always meets deadlines and exceeds expectations."
            </p>
            <p className="text-xs font-medium">— João Mendes, Tech Lead at DesignHub</p>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const AchievementsCard = () => (
  <AnimatedCard delay={0.4}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-4 flex items-center gap-2">
          <Award className="h-5 w-5" />
          ACHIEVEMENTS
        </h3>
        <div className="space-y-3">
          <div className="flex gap-2 items-start group">
            <Star className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500 group-hover:scale-125 transition-transform" />
            <p className="text-sm">Front-End Developer of the Month (TechCorp, Jul 2023)</p>
          </div>
          <div className="flex gap-2 items-start group">
            <Star className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500 group-hover:scale-125 transition-transform" />
            <p className="text-sm">Best UI/UX Design - Internal Hackathon (2022)</p>
          </div>
          <div className="flex gap-2 items-start group">
            <Star className="h-4 w-4 mt-1 flex-shrink-0 text-amber-500 group-hover:scale-125 transition-transform" />
            <p className="text-sm">1st Place - Web Development Competition</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const AvailabilityStatusCard = () => (
  <AnimatedCard delay={0.6}>
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-black/10">
      <CardContent className="p-6 flex flex-col justify-between h-full bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-oswald font-medium mb-2 flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          AVAILABILITY STATUS
        </h3>
        <div className="flex flex-col items-center text-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Badge className="bg-green-500 text-white px-3 py-1">Available for Work</Badge>
          </motion.div>
          <p className="text-sm text-gray-700">Open to freelance projects and full-time positions</p>
        </div>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const BentoGrid: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-50">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-playfair font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-12 max-w-2xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A snapshot of my professional journey, skills and experiences that define my work as a developer and designer.
        </motion.p>
        
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
      </motion.div>
    </section>
  );
};

export default BentoGrid;
