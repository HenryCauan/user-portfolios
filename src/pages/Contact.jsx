
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "../components/ui/Cursor";
import "./Contact.css";
import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";

const Contact = () => {
  // Estados para controlar a visibilidade das mensagens de erro
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const overlayTrigger = () => {
    const triggers = document.querySelectorAll(
      ".home-link, .about-link, .projects-link"
    );
    const leftOverlay = document.querySelector(".overlay-left");
    const rightOverlay = document.querySelector(".overlay-right");

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();

        // Move os overlays para cobrir a tela
        leftOverlay.style.transform = "translateX(100%)";
        rightOverlay.style.transform = "translateX(-100%)";

        // Obtém o caminho do link clicado
        const targetPath = trigger.closest("a").getAttribute("href");

        // Aguarda a animação e depois navega para a página correta
        setTimeout(() => {
          window.location.href = targetPath;
        }, 1000);
      });
    });
  };

  useEffect(() => {
    overlayTrigger();
  }, []);
  
  useEffect(() => {
    // Adiciona um pequeno delay para garantir que o DOM esteja pronto
    setTimeout(() => {
      const leftOverlay = document.querySelector(".overlay-left-exit");
      const rightOverlay = document.querySelector(".overlay-right-exit");

      if (leftOverlay && rightOverlay) {
        // Move os overlays para fora da tela
        leftOverlay.style.transform = "translateX(-100%)";
        rightOverlay.style.transform = "translateX(100%)";
      }
    }, 120); // 50ms de delay

    // Limpa a transformação ao desmontar o componente
    return () => {
      const leftOverlay = document.querySelector(".overlay-left-exit");
      const rightOverlay = document.querySelector(".overlay-right-exit");

      if (leftOverlay && rightOverlay) {
        leftOverlay.style.transform = "translateX(0%)";
        rightOverlay.style.transform = "translateX(0%)";
      }
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#contact-animation",
      {
        y: "100%",
        opacity: 0,
        filter: "blur(10px)",
        duration: 2,
        ease: "power2.inOut",
      },
      {
        y: "0%",
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.3,
        scrollTrigger: ".container-contact",
      }
    );
  }, []);

  const handleSendClick = () => {
    const nameInput = document.querySelector(".Name");
    const emailInput = document.querySelector(".Email");
    const messageInput = document.querySelector("textarea");
    let isValid = true;

    if (!nameInput.value) {
      setNameError(true);
      nameInput.placeholder = "Por favor, preencha o campo de Nome";
      nameInput.style.borderColor = "red";
      isValid = false;
    } else {
      setNameError(false);
      nameInput.placeholder = "Name";
      nameInput.style.borderColor = "";
    }

    if (!emailInput.value) {
      setEmailError(true);
      emailInput.placeholder = "Por favor, preencha o campo de Email";
      emailInput.style.borderColor = "red";
      isValid = false;
    } else {
      setEmailError(false);
      emailInput.placeholder = "Email";
      emailInput.style.borderColor = "";
    }

    if (isValid) {
      const templateParams = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      };

      emailjs
        .send(
          "service_9muo169",
          "template_bws6eft",
          templateParams,
          "FSNnYD9iaYU4j_9QM"
        )
        .then(
          (response) => {
            console.log(
              "%cSUCCESS!",
              "color: green; font-size: 16px; font-weight: bold;",
              response.status,
              response.text
            );

            // Criar um elemento para a mensagem de sucesso
            const successMessage = document.createElement("div");
            successMessage.textContent = "Mensagem enviada com sucesso!";
            successMessage.style.position = "fixed";
            successMessage.style.bottom = "20px";
            successMessage.style.left = "50%";
            successMessage.style.transform = "translateX(-50%)";
            successMessage.style.backgroundColor = "rgba(0, 128, 0, 0.9)";
            successMessage.style.color = "white";
            successMessage.style.padding = "15px 30px";
            successMessage.style.borderRadius = "5px";
            successMessage.style.fontFamily = "Orbitron, sans-serif";
            successMessage.style.fontSize = "1.2rem";
            successMessage.style.zIndex = "1000";
            successMessage.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            document.body.appendChild(successMessage);

            // Animação de entrada
            gsap.fromTo(
              successMessage,
              {
                opacity: 0,
                y: 50,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              }
            );

            // Animação de saída após 3 segundos
            setTimeout(() => {
              gsap.to(successMessage, {
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                  document.body.removeChild(successMessage);
                },
              });
            }, 3000);

            // Resetar os campos de entrada
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
          },
          (err) => {
            console.log("FAILED...", err);
            alert("Falha ao enviar a mensagem. Tente novamente.");
          }
        );
    }
  };

  return (
    <>
      <Navbar />
      <Cursor />
      <div className="container-contact bg-white">
        <div className="overlay-left"></div>
        <div className="overlay-right"></div>
        <div className="overlay-left-exit"></div>
        <div className="overlay-right-exit"></div>
        <div className="title-contact font-orbitron" id="contact-animation">
          CONTATE-ME
        </div>
        <div className="contact-links font-ibm" id="contact-animation">
          <span>
            <i className="ri-mail-fill"></i>henrca@gmail.com
          </span>
          <span>
            <i className="ri-map-pin-user-fill"></i>Petrolina - PE, 56320-610,
            Brasil
          </span>
          <a href="https://www.instagram.com/henrca__/">
            <i className="ri-instagram-line"></i>Instagram
          </a>
          <a href="https://www.linkedin.com/in/henry-cauan-2ba1b2267/">
            <i className="ri-linkedin-box-line"></i>Linkdin
          </a>
          <a href="https://github.com/HenryCauan">
            <i className="ri-github-fill"></i>GitHub
          </a>
        </div>
        <div className="layout" id="contact-animation">
          <div className="inputs" id="contact-animation">
            <input
              name="name"
              className="Name font-ibm"
              type="text"
              placeholder="Name"
              style={{ borderColor: nameError ? "red" : "" }}
            />
            <input
              name="email"
              className="Email font-ibm"
              type="text"
              placeholder="Email"
              style={{ borderColor: emailError ? "red" : "" }}
            />
            <textarea
              name="message"
              className="font-ibm mb-10"
              placeholder="Message "
            ></textarea>
            <button
              type="submit"
              onClick={handleSendClick}
              className="flex relative left-[6.5rem] items-center justify-center text-[1.5rem] w-[12rem] h-[3.5rem] bg-white text-black border-[3px] border-black font-orbitron group overflow-hidden"
            >
              <div className="absolute inset-0 bg-black transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Enviar
              </span>
            </button>
          </div>
          <div
            className="contact-description font-orbitron"
            id="contact-animation"
          >
            <span>"Sua mensagem é importante. Manda aí!"</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
