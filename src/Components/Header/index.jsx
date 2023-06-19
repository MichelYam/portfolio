import React, { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import './style.css'
import { ThemeContext } from '../../Context/Theme';

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
const Index = ({ navRoute }) => {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);
    const { toggleTheme } = useContext(ThemeContext)
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
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(!isOpen);
    const Close = () => setIsOpen(false);
    return (
        <header>
            <nav className={`navbar ${!show ? "hidden" : lastScrollY === 0 ? "" : "active"} ${isOpen ? "open" : ""}`}>
                <div className="toggle" onClick={handleClick} >
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
                <ul className="navbar__container">
                    {
                        navRoute.map((item, index) => {
                            return (<li key={index} className="navbar__items fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                                <a className="item" href={`#${item.label}`}>{item.value}</a>
                            </li>)
                        })
                    }
                </ul>
                <div className="theme">
                    <i className="fas fa-sun"></i>
                    <label className="switch" htmlFor="toggle">
                        <input id="toggle" type="checkbox" name='toggle' onClick={toggleTheme} />
                        <span className="slider round"></span>
                    </label>
                    <i className="fas fa-moon"></i>
                </div>
            </nav>
        </header>
    )
}

export default Index