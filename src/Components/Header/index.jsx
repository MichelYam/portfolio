import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

import './style.css'

const navRoute = [
    "Home",
    "About me",
    "Skills",
    "Projects",
    "Contact",
]


const textAnimate = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.5
        }
    }
}
const Index = () => {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);


    return (
        <header>
            <div className="landing">
                <div className='landing-img'>
                    <img src="./assets/img/bg.png" alt="" />
                </div>
                <nav className={`navbar ${!show ? "hidden" : lastScrollY === 0 ? "" : "active"}`}>
                    <ul className="navbar__container">
                        {
                            navRoute.map((item, index) => {
                                return (<li key={index} className="navbar__items fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                                    <a className="item" href={`#${item}`}>{item}</a>
                                </li>)
                            })
                        }
                        <div className='lang'>
                            <span>FR</span>
                            <span>ENG</span>
                        </div>
                    </ul>
                </nav>
                <div className="landing__content">
                    <motion.div
                        className="text-zone"
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ staggerChildren: 0.5 }}
                    >
                        <h1 className="fancy">
                            <motion.span variants={textAnimate}>
                                YAM
                            </motion.span>
                            <motion.span variants={textAnimate}>
                                Michel
                            </motion.span>
                            <motion.span variants={textAnimate}>
                                WEB DEVELOPER
                            </motion.span>
                        </h1>
                        <motion.div className='flex' variants={textAnimate}>
                            <button className='btn'>
                                Hire me
                            </button>
                            <button className='btn'>
                                Resume
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </header >
    )
}

export default Index


    // const text = document.querySelector(".fancy");
    // console.log(text)
    // const strText = text.textContent;
    // // const strText = text.ariaLabel;
    // const splitText = strText.split("");

    // for (let i = 0; i < splitText.length; i++) {
    //     text.innerHTML += "<span>" + splitText[i] + "</span>"
    // }

    // let char = 0;
    // let timer = setInterval(onTick, 50)


    // function onTick() {
    //     const span = text.querySelectorAll('span')[char]
    //     span.classList.add('fade');
    //     char++
    //     if (char === splitText.length) {
    //         complete();
    //         return;
    //     }
    // }

    // function complete() {
    //     clearInterval(timer);
    //     timer = null;
    // }