
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animação simples no carregamento
    const text = textRef.current;
    if (text) {
      text.style.opacity = '0';
      text.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        text.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
      {/* Divisão em dois painéis como na referência */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full bg-black"></div>
        <div className="w-1/2 h-full bg-black">
          {/* Aqui poderia ir uma imagem como na referência */}
        </div>
      </div>

      {/* Conteúdo centralizado */}
      <div className="z-10 flex flex-col items-start px-12 max-w-7xl mx-auto w-full">
        {/* Nome em grande escala e estilo vertical */}
        <div ref={textRef} className="mb-10">
          <div className="flex flex-col items-start">
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-oswald tracking-tighter leading-none">H</h1>
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-oswald tracking-tighter leading-none -mt-20">C</h1>
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-oswald tracking-tighter leading-none -mt-20">A</h1>
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-oswald tracking-tighter leading-none -mt-20">U</h1>
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-oswald tracking-tighter leading-none -mt-20">A</h1>
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-oswald tracking-tighter leading-none -mt-20">N</h1>
          </div>
        </div>
        
        {/* Descrição profissional minimalista */}
        <div className="mb-10 fade-in ml-4" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg uppercase tracking-widest font-light">
            Desenvolvedor Frontend & Designer UI/UX
          </p>
        </div>
        
        {/* Botão minimalista de ação */}
        <div className="fade-in ml-4" style={{ animationDelay: '0.7s' }}>
          <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-6 text-lg">
            Ver Projetos
          </Button>
        </div>
      </div>
      
      {/* Indicador de rolagem */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce fade-in cursor-pointer" style={{ animationDelay: '1s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Rolar</span>
          <ArrowDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
