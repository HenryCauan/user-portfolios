import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Magnet from "../components/ui/Magnet";
import Cursor from '../components/ui/Cursor';
import './About.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';
import Navbar from '../components/Navbar'

const About = () => {
  const overlayTrigger = () => {
    const triggers = document.querySelectorAll('.home-link, .projects-link, .contact-link');
    const leftOverlay = document.querySelector('.overlay-left');
    const rightOverlay = document.querySelector('.overlay-right');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();

        // Move os overlays para cobrir a tela
        leftOverlay.style.transform = 'translateX(100%)';
        rightOverlay.style.transform = 'translateX(-100%)';

        // Obtém o caminho do link clicado
        const targetPath = trigger.closest('a').getAttribute('href');

        // Aguarda a animação e depois navega para a página correta
        setTimeout(() => {
          navigate(targetPath);
        }, 1000);
      });
    });
  }

  useEffect(() => {
    overlayTrigger();
  }, []);
  useEffect(() => {
    // Adiciona um pequeno delay para garantir que o DOM esteja pronto
    setTimeout(() => {
      const leftOverlay = document.querySelector('.overlay-left-exit');
      const rightOverlay = document.querySelector('.overlay-right-exit');

      if (leftOverlay && rightOverlay) {
        // Move os overlays para fora da tela
        leftOverlay.style.transform = 'translateX(-100%)';
        rightOverlay.style.transform = 'translateX(100%)';
      }
    }, 120); // 50ms de delay

    // Limpa a transformação ao desmontar o componente
    return () => {
      const leftOverlay = document.querySelector('.overlay-left-exit');
      const rightOverlay = document.querySelector('.overlay-right-exit');

      if (leftOverlay && rightOverlay) {
        leftOverlay.style.transform = 'translateX(0%)';
        rightOverlay.style.transform = 'translateX(0%)';
      }
    };
  }, []);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionOne = document.querySelector('.container-about');
    const Img = document.querySelector('.img-main');
    const skill = document.querySelector('.skill')
    const titleAbout = document.querySelector('.title-about')
    const subTitles = document.querySelectorAll('.subtitle')

    // Animação de opacidade para o título

    const tl = gsap.to(Img, {
      width: '100%',
      duration: 5,
      delay: 1,
    });

    gsap.to(subTitles, {
      y: '0%',
      opacity: 0.5,
      duration: 1,
      delay: 0.8,
      scrollTrigger: {
        trigger: '.container-about',
      }
    })
    gsap.to('.title-about', {
      y: '90%',
      opacity: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.container-about',
      }
    })
    gsap.to('.content-left', {
      x: window.innerWidth <= 425 ? '0%' : '0%',
      opacity: 1,
      stagger: 0.3,
      duration: 2,
      ease: "power4.inOut",
      delay: 0.5,
      scrollTrigger: {
        trigger: '.skill',
        start: 'top 80%',
        end: 'center +=500',
        scrub: true,
      }
    })
    gsap.to('.content-right', {
      x: '0%',
      opacity: 1,
      stagger: 0.3,
      duration: 2,
      ease: "power4.inOut",
      delay: 0.5,
      scrollTrigger: {
        trigger: '.skill',
        start: 'top 80%',
        end: 'center +=500',
        scrub: true,
      }
    })
    gsap.to('.name-skill', {
      x: '30%',
      opacity: 1,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: '.skill',
        start: 'top bottom',
        end: 'center bottom',
        scrub: true,
      }
    })
    gsap.to('.skill', {
      y: '-50%',
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.skill',
        start: 'center top',
        scrub: true,
      }
    })


    // Adiciona animação marquee para todos os title-skill
    const titleSkills = document.querySelectorAll('.title-skill');
    titleSkills.forEach(title => {
      gsap.to(title, {
        x: `-=${title.offsetWidth}`,
        duration: Infinity,
        repeat: -1,
        ease: 'none',
        modifiers: {
          x: x => {
            const width = title.offsetWidth;
            return (parseFloat(x) % width) + 'px';
          }
        }
      });
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const description = document.querySelector('.description-about');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          description.classList.add('fade-up');
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(description);

    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    // Configuração do Lenis
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const footer = document.querySelector('.footer-about');
    const footerChildren = footer.querySelectorAll('*');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2, // Ajuste o threshold para ser mais sensível
      rootMargin: '0px 0px -100px 0px' // Adiciona uma margem para ativar antes de chegar completamente
    });

    footerChildren.forEach(element => {
      if (element.classList.contains('fade-up')) {
        observer.observe(element);
      } else {
        element.classList.add('fade-up');
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  // Rola a página para o topo ao montar o componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Navbar />
      <Cursor />
      <div className="container-about">
        <div className="overlay-leftt"></div>
        <div className="overlay-rightt"></div>
        <div className="overlay-left-exit"></div>
        <div className="overlay-right-exit"></div>
        <div className="one-page">
          <div className="title-about font-orbitron whitespace-nowrap">SOBRE ME</div>
          <div className="subtitle font-ibm">
            <span>BRAZILIAN</span>
            <span>WEBDEVELOP</span>
          </div>
          <div className="img-main">
            <img src="" alt="" />
          </div>
        </div>
        <div className="two-page">
          <div className="description-about font-ibm">
            <span>Tenho 19 anos e sou apaixonado por tecnologia desde a infância. Desde pequeno, sempre tive facilidade para resolver problemas em computadores e celulares, encontrando soluções que muitas vezes ninguém mais conseguia. Entre os 10 e 12 anos, meu interesse pela tecnologia cresceu ainda mais, despertando em mim uma admiração profunda pela área. Aos 16 anos, já tinha a certeza de que queria seguir a carreira de programação.
            </span>
            <span>Formação Acadêmica Iniciei minha graduação em Ciência da Computação em 2024, onde venho aprimorando meus conhecimentos e expandindo minhas habilidades na área de desenvolvimento de software.
            </span>
            <span>
              Experiência Profissional Atualmente, trabalho como freelancer desenvolvendo sites para clientes. Embora ainda não tenha atuado formalmente na área, minha experiência prática inclui criação de projetos personalizados, otimização de sites e implementação de funcionalidades interativas.
            </span>
            <span>Habilidades Técnicas Tenho conhecimento em diversas linguagens de programação, mas as tecnologias com as quais mais trabalho são:
            </span>
            <span>
              • Front-end: HTML, CSS, JavaScript, React, Next, Vite, Tailwind CSS
              <br />
              • Versionamento de Código: Git, GitHub
              <br />
              • Design e UI/UX: Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Figma
            </span>
          </div>
        </div>
        <div className="three-page">
          <div className="skill">
            <div className="name-skill font-orbitron">SKILLS</div>
            <div className="container-skills">
              <div className="develop content content-left">
                <span className='title-skill font-orbitron'>DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP DEVELOP</span>
                <span className='skill-description font-ibm'>Sites personalizados e otimizados são desenvolvidos no Cursor IA, com foco em design impactante, animações interativas e usabilidade excepcional.
                </span>
              </div>
              <div className="designer content  content-right">
                <span className='title-skill font-orbitron'>DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER DESIGNER</span>
                <span className='skill-description'>Criação de interfaces intuitivas e visualmente envolventes, com foco na usabilidade e no impacto do design que geram resultados significativos.
                </span>
              </div>
              <div className="development content content-left">
                <span className='title-skill font-orbitron'>DEVELOPMENT DEVELOPMENT DEVELOPMENT DEVELOPMENT DEVELOPMENT DEVELOPMENT DEVELOPMENT DEVELOPMENT DEVELOPMENT DEVELOPMENT DEVELOPMENT DEVELOPMENT<br /> FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END</span>
                <span className='skill-description'>Desenvolvendo sites responsivos e de alto desempenho com foco em código limpo e experiência do usuário perfeita.
                </span>
              </div>
              <div className="lowcode content content-right">
                <span className='title-skill font-orbitron'>LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE LOW CODE</span>
                <span className='skill-description'>Desenvolvo designs e interfaces no Figma e Adobe Illustrator, garantindo uma experiência visual de alta qualidade. Após a criação, transito esses designs para código.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-about">
        <div className="one-row">

          <div className="logo-footer"><Magnet>H.</ Magnet></div>

          <div className="links-about font-ibm">
            <div className="pages">
              <Link to="/home"><span>Home</span></Link>
              <Link to="/about"><span>Sobre</span></Link>
              <Link to="/projects"><span>Projetos (4)</span></Link>
            </div>
            <div className="pages-two">
              <Link to="/contact"><span>Contato</span></Link>
              <Link to="/cv"><a href="https://drive.google.com/file/d/1zcPmETfI8BuiK961fb9aUGZXjlqlw_wW/view?usp=drive_link"><span>CV (Curriculo)</span></a></Link>
            </div>
            <div className="pages-three">
              <a href="https://www.instagram.com/henrca__/" target="_blank" rel="noopener noreferrer"><span>Instagram</span></a>
              <a href="https://www.linkedin.com/in/henry-cauan-2ba1b2267/" target="_blank" rel="noopener noreferrer"><span>Linkdln</span></a>
              <a href="https://github.com/HenryCauan" target="_blank" rel="noopener noreferrer"><span>GitHub</span></a>
            </div>
          </div>
          <div className="description-footer font-ibm">
            <span>Avise-me que voce esteve,
              aqui, Contate-me.</span>
            <Link to="/contact">
              <button className='getIn'>Entre em contato
              </button>
            </Link>
          </div>
        </div>
        <div className="nam-footer">BEM VINDO!!</div>
        <button className='arrow-footer'></button>
      </div>
    </>
  )
};

export default About; 