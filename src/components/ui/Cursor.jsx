import React, { useEffect } from "react";

const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const menuItems = document.querySelectorAll('#menu span, .home-link, .about-link, .contact-link, .projects-link, #let');

        const handleMouseEnter = () => {
            cursor.classList.add('cursor-hover');
        };

        const handleMouseLeave = () => {
            cursor.classList.remove('cursor-hover');
        };

        menuItems.forEach(item => {
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            menuItems.forEach(item => {
                item.removeEventListener('mouseenter', handleMouseEnter);
                item.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        let mouseX = 0, mouseY = 0;
        let posX = 0, posY = 0;

        const mouseMoveHandler = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animateCursor = () => {
            posX += (mouseX - posX) * 0.1;
            posY += (mouseY - posY) * 0.1;

            if (cursor) {
                cursor.style.left = `${posX}px`;
                cursor.style.top = `${posY}px`;
            }
            requestAnimationFrame(animateCursor);
        };

        window.addEventListener('mousemove', mouseMoveHandler);
        animateCursor();

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <div className="cursor"></div>
    )
}

export default Cursor;