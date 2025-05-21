import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../components/Navbar'
import Lenis from '@studio-freight/lenis';
import ImgOne from '../assets/Scene _8.jpg'
import ImgTwo from '../assets/MacBook Pro Mockup vol.2.jpg'


const Projects = () => {
    const [showMenu, setShowMenu] = useState(false);

    const overlayTrigger = () => {
        const triggers = document.querySelectorAll('#names');
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
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('#img1', {
            y: '0vh'
        }, {
            y: '-30%',
            duration: 5,
            scrollTrigger: {
                trigger: '#project',
                start: 'top',
                end: 'bottom top',
                scrub: true,
            }
        })
        gsap.fromTo('#img2', {
            y: '0vh'
        }, {
            delay: 1,
            y: '-30%',
            duration: 5,
            scrollTrigger: {
                trigger: '#img2',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        })
    })

    return (
        <>
        <Navbar />
            <div className="relative max-w-screen min-h-[220vh] flex flex-col p-[4vw] bg-white text-black overflow-hidden" id='project'>
                <div className="flex flex-row">
                    <div className="overlay-left"></div>
                    <div className="overlay-right"></div>
                    <div className="overlay-left-exit"></div>
                    <div className="overlay-right-exit"></div>
                </div>
                <div className="flex flex-row relative gap-9 items-end text-[5rem] font-orbitron mb-8 max-sm:text-[4.5rem]">featured work <div className="relative opacity-50 -top-6 text-[1rem] max-sm:-left-[30vw]">more works</div></div>
                <div className="flex flex-col mb-[15rem]">
                    <div
                        className="w-[75vw] h-[60vh] bg-amber-500 mb-4 overflow-hidden"
                        onMouseEnter={() => {
                            gsap.to('#img1', { scale: 1.1, duration: 0.5 });
                            const cursor = document.getElementById('cursor-website');
                            cursor.style.display = 'block';
                            gsap.fromTo(cursor, 
                                { scale: 0 }, 
                                { scale: 1, duration: 0.3, ease: 'power2.out' }
                            );
                        }}
                        onMouseLeave={() => {
                            gsap.to('#img1', { scale: 1, duration: 0.5 });
                            const cursor = document.getElementById('cursor-website');
                            gsap.to(cursor, 
                                { scale: 0, duration: 0.3, ease: 'power2.out', onComplete: () => {
                                    cursor.style.display = 'none';
                                }}
                            );
                        }}
                        onClick={() => window.location.href = 'https://www.exemplo.com'}
                    >
                        <img
                            src={ImgOne}
                            alt=""
                            className="w-full h-[100vh] object-cover -translate-y-1"
                            id='img1'
                        />
                    </div>
                    <div className="text-[20px] font-ibm font-medium ">H.CAUAN - Portfolio</div>
                    <div className="text-1xl font-ibm opacity-60">Desenvolvimento Frontend • Design UX/UI • Identidade Visual • Responsivo</div>
                </div>
                <div className="relative top-[2rem] self-end flex flex-col">
                    <div
                        className="w-[70vw] h-[60vh] bg-amber-500 mb-4 overflow-hidden"
                        onMouseEnter={() => {
                            gsap.to('#img2', { scale: 1.1, duration: 0.5 });
                            const cursor = document.getElementById('cursor-website');
                            cursor.style.display = 'block';
                            gsap.fromTo(cursor, 
                                { scale: 0 }, 
                                { scale: 1, duration: 0.3, ease: 'power2.out' }
                            );
                        }}
                        onMouseLeave={() => {
                            gsap.to('#img2', { scale: 1, duration: 0.5 });
                            const cursor = document.getElementById('cursor-website');
                            gsap.to(cursor, 
                                { scale: 0, duration: 0.3, ease: 'power2.out', onComplete: () => {
                                    cursor.style.display = 'none';
                                }}
                            );
                        }}
                        onClick={() => window.location.href = 'https://tom-ford-alpha.vercel.app/'}
                    >
                        <img
                            src={ImgTwo}
                            alt=""
                            className="w-full h-[100vh] object-cover -translate-y-1"
                            id='img2'
                        />
                    </div>
                    <div className="text-[20px] font-ibm font-medium ">Tom Ford - Fragrance Collection (Meu Primeiro Projeto)</div>
                    <div className="text-1xl font-ibm opacity-60">Desenvolvimento Frontend • Design Elegante • UI Inspirada em Luxo • Projeto Conceitual</div>
                </div>
                <div className="relative self-center top-[25rem] font-ibm opacity-50">Mais Em Breve</div>
            </div>
        </>
    )
}

export default Projects