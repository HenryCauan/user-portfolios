
import React from 'react';

interface PortfolioItemProps {
  title: string;
  category: string;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, index }) => {
  return (
    <div 
      className="w-full border-t border-gray-200 py-8 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div>
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
      </div>
      <div className="text-2xl">→</div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const projects = [
    { title: "Identidade de Marca Minimalista", category: "Branding" },
    { title: "Fotografia em Preto e Branco", category: "Fotografia" },
    { title: "Exploração Tipográfica", category: "Design" },
    { title: "Visualização Arquitetônica", category: "Modelagem 3D" }
  ];

  return (
    <section id="work" className="w-full py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Trabalhos Selecionados</h2>
      <div className="fade-in">
        {projects.map((project, index) => (
          <PortfolioItem 
            key={index}
            title={project.title}
            category={project.category}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
